// // 'use client'

// // import { useSearchParams } from 'next/navigation'
// // import { useEffect } from 'react'

// // export default function SuccessPage() {
// //   const params = useSearchParams()

// //   const transactionId = params.get('transactionId')
// //   const bookingId = params.get('bookingId')

// //   useEffect(() => {
// //     const confirmPayment = async () => {
// //       if (!transactionId) return

// //       try {
// //         await fetch(
// //           `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/confirm`,
// //           {
// //             method: 'POST',
// //             headers: {
// //               'Content-Type': 'application/json',
// //               Authorization: localStorage.getItem('token') || '',
// //             },
// //             body: JSON.stringify({
// //               transactionId,
// //               bookingId,
// //             }),
// //           }
// //         )
// //       } catch (error) {
// //         console.error('Payment confirmation failed:', error)
// //       }
// //     }

// //     confirmPayment()
// //   }, [transactionId, bookingId])

// //   return (
// //     <div className="p-10 text-center">
// //       <h1 className="text-2xl font-bold text-green-600 mb-4">
// //         ✅ Payment Successful
// //       </h1>

// //       <p className="text-gray-600">
// //         Your payment has been completed successfully.
// //       </p>
// //     </div>
// //   )
// // }





// 'use client'

// import { useSearchParams } from 'next/navigation'
// import { useEffect } from 'react'

// export default function SuccessPage() {
//   const params = useSearchParams()

//   const transactionId = params.get('transactionId')
//   const bookingId = params.get('bookingId')

//   useEffect(() => {
//     const confirmPayment = async () => {
//       if (!transactionId || !bookingId) return

//       try {
//         const token = localStorage.getItem('token')

//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/payments/confirm`,
//           {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//               Authorization: `Bearer ${token}`,
//             },
//             body: JSON.stringify({
//               transactionId,
//               bookingId,
//             }),
//           }
//         )

//         if (!res.ok) {
//           const data = await res.json()
//           console.error('Payment confirm failed:', data)
//         }
//       } catch (error) {
//         console.error('Payment confirmation failed:', error)
//       }
//     }

//     confirmPayment()
//   }, [transactionId, bookingId])

//   return (
//     <div className="p-10 text-center">
//       <h1 className="text-2xl font-bold text-green-600 mb-4">
//         ✅ Payment Successful
//       </h1>

//       <p className="text-gray-600">
//         Your payment has been completed successfully.
//       </p>
//     </div>
//   )
// }