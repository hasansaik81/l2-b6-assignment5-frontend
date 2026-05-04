// export default function BookingConfirmPage() {
//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>✅ Booking Confirmed</h1>
//       <p>Your booking has been successfully created.</p>
//     </div>
//   );
// }




// import PayButton from "@/components/PayButton"



// export default function ConfirmPage({ searchParams }: any) {
//   const bookingId = searchParams.bookingId

//   return (
//     <div>
//       <h1>✅ Booking Confirmed</h1>
//       <p>Now complete your payment</p>

//       <PayButton bookingId={bookingId} />
//     </div>
//   )
// }


// import PayButton from '@/components/PayButton'



// import PayButton from "@/components/PayButton"

// export default function ConfirmPage({ searchParams }: any) {
//   const bookingId = searchParams.bookingId

//     console.log("Confirm bookingId:", bookingId) 

//   return (
//     <div>
//       <h1>Booking Confirmed</h1>

//       <PayButton bookingId={bookingId} />
   
//     </div>
//   )
  
// }


// import PayButton from "@/components/PayButton";

// export default function ConfirmPage({ searchParams }: any) {
//   const bookingId = searchParams.bookingId;

//   console.log("Confirm bookingId:", bookingId); // 👈 check

//   return (
//     <div>
//       <h1>Booking Confirmed</h1>
//       <PayButton bookingId={bookingId} />
//     </div>
//   );
// }




// import PayButton from "@/components/PayButton";

// export default function ConfirmPage({
//   searchParams,
// }: {
//   searchParams?: { bookingId?: string };
// }) {
//   const bookingId = searchParams?.bookingId;

//   console.log("🔥 bookingId from URL:", bookingId);

//   return (
//     <div>
//       <h1>Booking Confirmed</h1>

//       {bookingId ? (
//         <PayButton bookingId={bookingId} />
//       ) : (
//         <p className="text-red-500">
//           Booking ID missing ❌ (URL check করুন)
//         </p>
//       )}
//     </div>
//   );
// }