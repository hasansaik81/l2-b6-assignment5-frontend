// import PaymentSection from "@/components/paymentForm/PaymentSection";

// type Props = {
//   params: {
//     bookingId: string;
//   };
// };

// export default function Page({
//   params,
// }: {
//   params: { bookingId: string };
// }) {
//   return (
//     <div>
//       Payment Page: {params.bookingId}
//     </div>
//   );
// }



// export default function Page({
//   searchParams,
// }: {
//   searchParams: { bookingId?: string; amount?: string };
// }) {
//   const bookingId = searchParams?.bookingId ?? "";
//   const amount = searchParams?.amount ?? "";

//   return (
//     <div>
//       <h1>Checkout Page</h1>

//       <p>BookingId: {bookingId}</p>
//       <p>Amount: {amount}</p>
//     </div>
//   );
// }





// app/dashboard/student/payment/[bookingId]/page.js



// app/dashboard/student/payment/[bookingId]/page.tsx
// app/dashboard/student/payment/[bookingId]/page.tsx




export default async function PaymentPage({ params }: { params: { bookingId: string } }) {
  const { bookingId } = await params
  
  return (
    <div>
      <h1>বুকিং আইডি: {bookingId}</h1>
    </div>
  )
}