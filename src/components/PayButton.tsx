// 'use client'

// import { useState } from 'react'
// import { createPaymentIntent } from '@/services/payment'

// export default function PayButton({ bookingId }: { bookingId?: string }) {
//   const [loading, setLoading] = useState(false)

//   const handlePay = async () => {
//     console.log("🔥 clicked")

//     if (!bookingId) {
//       alert("Booking ID missing ❌")
//       return
//     }

//     try {
//       setLoading(true)

//       const data = await createPaymentIntent(bookingId)

//       if (!data?.clientSecret) {
//         throw new Error("No client secret")
//       }

//       window.location.href =
//         `/payment/checkout?secret=${data.clientSecret}&bookingId=${bookingId}`

//     } catch (err: any) {
//       console.error("PAY ERROR:", err.message)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <button
//       onClick={handlePay}
//       disabled={loading || !bookingId}
//       className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
//     >
//       {loading ? "Processing..." : "Pay Now"}
//     </button>
//   )
// }