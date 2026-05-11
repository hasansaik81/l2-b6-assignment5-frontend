




// "use client";

// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import CheckoutForm from "./CheckoutForm";



// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
// );

// interface StripeWrapperProps {
//   clientSecret: string;
//   bookingId: string;
//   amount: number;
// }

// export default function StripeWrapper({
//   clientSecret,
//  bookingId,
//   amount,
// }: StripeWrapperProps) {
//   return (
//     <Elements
//       stripe={stripePromise}
//       options={{
//         clientSecret,
//       }}
//     >
//       <CheckoutForm
//         bookingId={bookingId}
//         amount={amount}
//         clientSecret={clientSecret}
//       />
//     </Elements>
//   );
// }



"use client";

import {
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { confirmPayment } from "@/services/payment";

type Props = {
  clientSecret: string;
  bookingId: string;
  amount: number;
};

export default function CheckoutForm({
  clientSecret,
  bookingId,
  amount,
}: Props) {

  const stripe = useStripe();

  const elements = useElements();

  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    setError("");

    const cardElement =
      elements.getElement(CardElement);

    if (!cardElement) {
      setLoading(false);
      return;
    }

    // ✅ Stripe Payment Confirm
    const result =
      await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
          },
        }
      );

    // ❌ Payment Error
    if (result.error) {

      setError(
        result.error.message ||
        "Payment Failed"
      );

      setLoading(false);

      return;
    }

    // ✅ Payment Success
    if (
      result.paymentIntent?.status ===
      "succeeded"
    ) {

      try {

        // ✅ Save Payment In DB
        await confirmPayment(
          bookingId,
          result.paymentIntent.id
        );

        // ✅ Redirect Success Page
        router.push(
          `/booking-confirm/${bookingId}`
        );

      } catch {

        setError(
          "Payment save failed"
        );
      }
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >

      {/* Card Input */}
      <div className="border border-gray-300 rounded-xl p-4 bg-white">

        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#1f2937",
                "::placeholder": {
                  color: "#9ca3af",
                },
              },
              invalid: {
                color: "#dc2626",
              },
            },
          }}
        />

      </div>

      {/* Error Message */}
      {error && (
        <p className="text-red-500 text-sm">
          {error}
        </p>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-black text-white py-3 rounded-xl font-semibold disabled:opacity-50"
      >

        {loading
          ? "Processing..."
          : `Pay $${amount}`}

      </button>

    </form>
  );
}