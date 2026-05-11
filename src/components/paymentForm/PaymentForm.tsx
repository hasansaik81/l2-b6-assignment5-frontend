// 'use client'

// import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
// import { useRouter } from 'next/navigation'
// import { useState } from 'react'
// import { toast } from 'sonner'

// interface PaymentFormProps {
//   clientSecret: string;
//   bookingId: string;
//   amount: number;
// }

// export default function PaymentForm({ 
//   clientSecret, 
//   bookingId, 
//   amount 
// }: PaymentFormProps) {
//   const stripe = useStripe()
//   const elements = useElements()
//   const router = useRouter()
//   const [loading, setLoading] = useState(false)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()

//     if (!stripe || !elements) return
    
//     setLoading(true)

//     const card = elements.getElement(CardElement)
//     if (!card) {
//       setLoading(false)
//       return
//     }

//     // পেমেন্ট কনফার্ম করা
//     const result = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: { card: card },
//     })

//     if (result.error) {
//       toast.error(result.error.message || "পেমেন্ট ব্যর্থ হয়েছে")
//       setLoading(false)
//     } else if (result.paymentIntent?.status === 'succeeded') {
//       toast.success("Payment Successful!")
      
//       // ✅ এখানে bookingId ব্যবহার করে রিডাইরেক্ট করছি যাতে TS error চলে যায়
//       // একই সাথে সাকসেস পেজে ট্রানজেকশন আইডি পাঠিয়ে দিচ্ছি
//       const transactionId = result.paymentIntent.id;
      
//       router.push(
//         `/dashboard/student/bookings?success=true&bookingId=${bookingId}&transactionId=${transactionId}`
//       );
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-5">
//       <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-sm hover:border-blue-300 transition-colors">
//         <CardElement options={{
//           style: {
//             base: { 
//               fontSize: '16px', 
//               color: '#1f2937', // Gray-800
//               fontFamily: 'Inter, sans-serif',
//               '::placeholder': { color: '#9ca3af' }, // Gray-400
//             },
//             invalid: { color: '#dc2626' }, // Red-600
//           },
//         }} />
//       </div>
      
//       <div className="flex flex-col gap-3">
//         <button 
//           type="submit" 
//           disabled={!stripe || loading}
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold text-lg shadow-md active:scale-[0.98] transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
//         >
//           {loading ? (
//             <span className="flex items-center justify-center gap-2">
//               <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//               </svg>
//               Processing...
//             </span>
//           ) : (
//             `Confirm Payment $${amount}`
//           )}
//         </button>
//         <p className="text-center text-[11px] text-gray-400 uppercase tracking-widest">
//           Secure payment via Stripe
//         </p>
//       </div>
//     </form>
//   )
// }


"use client";

import { useEffect, useState } from "react";

// import StripeWrapper from "../StripeWrapper";

import { createPaymentIntent } from "@/services/payment";
import StripeWrapper from "./StripeWrapper";

type Props = {
  bookingId: string;
  amount: number;
};

export default function PaymentSection({
  bookingId,
  amount,
}: Props) {

  const [clientSecret, setClientSecret] =
    useState("");

  useEffect(() => {

    const getIntent = async () => {

      try {

        const data =
          await createPaymentIntent(
            bookingId,
            amount
          );

        setClientSecret(
          data?.data?.clientSecret
        );

      } catch (error) {
        console.log(error);
      }
    };

    getIntent();

  }, [bookingId, amount]);

  return (
    <div>

      {clientSecret && (
        <StripeWrapper
          clientSecret={clientSecret}
          bookingId={bookingId}
          amount={amount}
        />
      )}

    </div>
  );
}