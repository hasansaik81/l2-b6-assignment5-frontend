// 'use client'

// import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
// import { useRouter } from 'next/navigation'

// export default function PaymentForm({ clientSecret }: any) {
//   const stripe = useStripe()
//   const elements = useElements()
//   const router = useRouter()

//   const handleSubmit = async (e: any) => {
//     e.preventDefault()

//     // ✅ IMPORTANT CHECK
//     if (!stripe || !elements) return

//     const card = elements.getElement(CardElement)

//     if (!card) return

//     const result = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: card,
//       },
//     })

//     if (result.paymentIntent?.status === 'succeeded') {
//       router.push(`/payment/success?transactionId=${result.paymentIntent.id}`)
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit">Pay Now</button>
//     </form>
//   )
// }