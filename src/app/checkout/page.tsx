// export default function Page({ searchParams }: any) {
//   return (
//     <div>
//       BookingId: {searchParams.bookingId}
//       Amount: {searchParams.amount}
//     </div>
//   );
// }



// type Props = {
//   searchParams: {
//     bookingId?: string;
//     amount?: string;
//   };
// };

// export default function Page({ searchParams }: Props) {
//   return (
//     <div>
//       <h1>Checkout Page</h1>

//       <p>BookingId: {searchParams.bookingId}</p>
//       <p>Amount: {searchParams.amount}</p>
//     </div>
//   );
// }



// import PaymentSection from "@/components/paymentForm/PaymentSection";

// export default function Page({
//   params,
// }: {
//   params: { bookingId: string };
// }) {
//   return (
//     <div className="flex justify-center py-20">
//       <PaymentSection
//         bookingId={params.bookingId}
//         amount={50}
//       />
//     </div>
//   );
// }



