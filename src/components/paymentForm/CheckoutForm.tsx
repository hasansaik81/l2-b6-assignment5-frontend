




// "use client";

// import {
//   CardElement,
//   useElements,
//   useStripe,
// } from "@stripe/react-stripe-js";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { confirmPayment } from "@/services/payment";

// type Props = {
//   bookingId: string;
//   amount: number;
//   clientSecret: string;
// };

// export default function CheckoutForm({
//   bookingId,
//   amount,
//   clientSecret,
// }: Props) {
//   const stripe = useStripe();
//   const elements = useElements();
//   const router = useRouter();

//   const [loading, setLoading] =
//     useState(false);

//   const [error, setError] =
//     useState("");

//   const handleSubmit = async (
//     e: React.FormEvent
//   ) => {
//     e.preventDefault();

//     if (!stripe || !elements) return;

//     setLoading(true);

//     const cardElement =
//       elements.getElement(CardElement);

//     if (!cardElement) return;

//     const result =
//       await stripe.confirmCardPayment(
//         clientSecret,
//         {
//           payment_method: {
//             card: cardElement,
//           },
//         }
//       );

//     if (result.error) {
//       setError(
//         result.error.message ||
//           "Payment failed"
//       );

//       setLoading(false);
//       return;
//     }

//     if (
//       result.paymentIntent?.status ===
//       "succeeded"
//     ) {
//       await confirmPayment(
//         bookingId,
//         result.paymentIntent.id
//       );

//       router.push(
//         `/booking-confirm/${bookingId}`
//       );
//     }

//     setLoading(false);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="space-y-4"
//     >
//       <div className="border p-4 rounded">
//         <CardElement />
//       </div>

//       {error && (
//         <p className="text-red-500">
//           {error}
//         </p>
//       )}

//       <button
//         type="submit"
//         disabled={loading}
//         className="bg-black text-white px-4 py-2 rounded"
//       >
//         {loading
//           ? "Processing..."
//           : `Pay $${amount}`}
//       </button>
//     </form>
//   );
// }


import PaymentSection from "@/components/paymentForm/PaymentSection";

type Props = {
  params: {
    bookingId: string;
  };
};

export default function Page({
  params,
}: Props) {
  return (
    <div className="flex justify-center py-20">

      <PaymentSection
        bookingId={params.bookingId}
        amount={50}
      />

    </div>
  );
}