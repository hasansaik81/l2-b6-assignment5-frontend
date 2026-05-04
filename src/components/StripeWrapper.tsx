"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ReactNode } from "react";

// আপনার Stripe এর Publishable Key এখানে দিন (Environment Variable থেকে নেওয়া ভালো)
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface StripeWrapperProps {
  children: ReactNode;
  clientSecret: string;
}

export default function StripeWrapper({ children, clientSecret }: StripeWrapperProps) {
  return (
    <Elements 
      stripe={stripePromise} 
      options={{ 
        clientSecret,
        appearance: { theme: 'stripe' } 
      }}
    >
      {children}
    </Elements>
  );
}