// 'use client'

// import { useSearchParams } from 'next/navigation'
// import { Elements } from '@stripe/react-stripe-js'
// import { stripePromise } from '@/lib/stripe'
// import PaymentForm from '@/components/paymentForm/PaymentForm'

// export default function CheckoutPage() {
//   const params = useSearchParams()
//   const clientSecret = params.get('secret')

//   if (!clientSecret) {
//     return <p>Invalid payment</p>
//   }

//   return (
//     <Elements stripe={stripePromise} options={{ clientSecret }}>
//       <PaymentForm clientSecret={clientSecret} />
//     </Elements>
//   )
// }