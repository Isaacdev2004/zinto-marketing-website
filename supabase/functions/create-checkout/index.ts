import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Price mapping for the plans
const PRICE_IDS = {
  basic: {
    monthly: "price_1S7RPOAYoxtlO0HeI3ovtcRA",
    yearly: "price_1S7RPlAYoxtlO0He0yf0i8Lx"
  },
  pro: {
    monthly: "price_1S7RQ1AYoxtlO0HeOAGMNoRe", 
    yearly: "price_1S7RQEAYoxtlO0Hem9l42X2G"
  },
  enterprise: {
    monthly: "price_1S7RQTAYoxtlO0Hef0FxR6Ek",
    yearly: "price_1S7RQlAYoxtlO0HeUxfWLpeF"
  }
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { plan, billing } = await req.json();
    
    if (!plan || !billing) {
      throw new Error("Plan and billing period are required");
    }

    const priceId = PRICE_IDS[plan as keyof typeof PRICE_IDS]?.[billing as keyof typeof PRICE_IDS.basic];
    
    if (!priceId) {
      throw new Error("Invalid plan or billing period");
    }

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", { 
      apiVersion: "2025-08-27.basil" 
    });

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${req.headers.get("origin")}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/pricing?canceled=true`,
      allow_promotion_codes: true,
      billing_address_collection: "required",
    });

    return new Response(
      JSON.stringify({ url: session.url, sessionId: session.id }), 
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Checkout error:", error);
    return new Response(
      JSON.stringify({ error: error.message }), 
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});