




// "use client";

// import { createPaymentIntent } from "@/services/payment";
// import { useEffect, useState } from "react";
// import StripeWrapper from "./StripeWrapper";

// type Props = {
//   bookingId: string;
//   amount: number;
// };

// export default function PaymentSection({
//   bookingId,
//   amount,
// }: Props) {

//   const [clientSecret, setClientSecret] =
//     useState("");

//   useEffect(() => {

//     const getIntent = async () => {

//       try {

//         const data =
//           await createPaymentIntent(
//             bookingId,
//             amount
//           );

//         setClientSecret(
//           data?.data?.clientSecret
//         );

//       } catch (error) {

//         console.log(error);

//       }
//     };

//     getIntent();

//   }, [bookingId, amount]);

//   return (
//     <div>

//       {clientSecret && (
//         <StripeWrapper
//           clientSecret={clientSecret}
//           bookingId={bookingId}
//           amount={amount}
//         />
//       )}

//     </div>
//   );
// }





"use client";

import { useEffect, useState } from "react";

import StripeWrapper from "./StripeWrapper";

import { createPaymentIntent } from "@/services/payment";

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

  // useEffect(() => {

  //   const loadIntent = async () => {

  //     const data =
  //       await createPaymentIntent(
  //         bookingId,
  //         amount
  //       );

  //     setClientSecret(
  //       data?.data?.clientSecret
  //     );
  //   };

  //   loadIntent();

  // }, [bookingId, amount]);



  useEffect(() => {
  const getIntent = async () => {
    try {
      const data = await createPaymentIntent(bookingId, amount);

      console.log("API RESPONSE:", data); // 🔥 add this

      setClientSecret(data?.data?.clientSecret);
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  getIntent();
}, [bookingId, amount]);

  if (!clientSecret) {
    return <p>Loading...</p>;
  }

  return (
    <StripeWrapper
      clientSecret={clientSecret}
      bookingId={bookingId}
      amount={amount}
    />
  );
}