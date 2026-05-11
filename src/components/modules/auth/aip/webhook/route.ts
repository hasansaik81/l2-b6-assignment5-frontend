import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-01-27.acacia" as any, // আপনার ভার্সন অনুযায়ী
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {
  const body = await req.text(); // Raw body প্রয়োজন ভেরিফিকেশনের জন্য
  const sig = (await headers()).get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    // সিগনেচার ভেরিফাই করা
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err: any) {
    console.log(`⚠️ Webhook signature verification failed.`, err.message);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }

  // ইভেন্ট হ্যান্ডেল করা
  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object as Stripe.Checkout.Session;
      console.log("✅ Payment Succeeded for Session:", session.id);
      
      // এখানে আপনার ডাটাবেস আপডেট করুন (যেমন: booking status = 'paid')
      // updateBookingStatus(session.metadata?.bookingId);
      
      break;
      
    case "payment_intent.succeeded":
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log(`💰 Payment for ${paymentIntent.amount} succeeded.`);
      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}