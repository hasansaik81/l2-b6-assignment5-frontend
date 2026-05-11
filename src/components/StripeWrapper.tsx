

// "use client";

// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import CheckoutForm from "./paymentForm/CheckoutForm";
// // আপনার CheckoutForm এর পাথটি চেক করে নিন
// // import CheckoutForm from "./paymentForm"; 

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// // ✅ এখানে bookingId অ্যাড করতে হবে
// interface StripeWrapperProps {
//   clientSecret: string;
//   bookingId: string; // এটি মিসিং ছিল
//   amount: number;
// }

// export default function StripeWrapper({ clientSecret, bookingId, amount }: StripeWrapperProps) {
//   return (
//     <Elements stripe={stripePromise} options={{ clientSecret }}>
//       {/* ✅ এবার এখান থেকে প্রপসগুলো ফর্মে পাঠানো যাবে */}
//       <CheckoutForm bookingId={bookingId} amount={amount} />
//     </Elements>
//   );
// }