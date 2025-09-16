-- Add RLS policies for INSERT, UPDATE, and DELETE operations on subscriptions table
-- These policies ensure users can only modify their own subscription records

-- Policy for INSERT: Users can only create subscriptions for themselves
-- Note: In production, subscription creation should typically be handled by system processes (edge functions/webhooks)
CREATE POLICY "Users can insert their own subscription" 
ON public.subscriptions 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Policy for UPDATE: Users can only update their own subscriptions
-- Note: In production, subscription updates should typically be handled by system processes
CREATE POLICY "Users can update their own subscription" 
ON public.subscriptions 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Policy for DELETE: Users can only delete their own subscriptions
-- Note: In production, subscription deletion should typically be handled by system processes
CREATE POLICY "Users can delete their own subscription" 
ON public.subscriptions 
FOR DELETE 
USING (auth.uid() = user_id);