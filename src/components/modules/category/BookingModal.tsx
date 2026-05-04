





// "use client";

// import * as React from "react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// // ---------------- Schema ----------------
// const bookingSchema = z.object({
//   subjectId: z.string().min(1, "Select subject"),
//   startDate: z.string().min(1),
//   endDate: z.string().min(1),
//   notes: z.string().optional(),
// });

// export type BookingFormValues = z.infer<typeof bookingSchema>;

// // ---------------- Props ----------------
// interface BookingModalProps {
//   subjects: {id:string;name:string}[]
//   onSubmit:(data:BookingFormValues)=>void;
  
// }

// // interface BookingModalProps {
// //   subjects: Subject[];
// //   onSubmit: (data: BookingFormValues) => void;
// // }

// // export default function BookingModal({subjects,onSubmit}:BookingModalProps){
// //   const {register ,handleSubmit, watch,formState:{erros},setValue}=useForm<BookingFormValues>({
// //     resolver:zodResolver(bookingSchema),
// //   });
// // }

// // ---------------- Component ----------------
// export default function BookingModal({
//   subjects,
//   onSubmit,
// }: BookingModalProps) {

//   const {
//     handleSubmit,
//     setValue,
//     register,
//     formState: { errors },
//   } = useForm<BookingFormValues>({
//     resolver: zodResolver(bookingSchema),
//   });

//   console.log("SUBJECTS:", subjects); // 🔥 DEBUG IMPORTANT

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button>Book Service</Button>
//       </DialogTrigger>

//       <DialogContent className="sm:max-w-lg">
//         <DialogHeader>
//           <DialogTitle>Book Session</DialogTitle>
//         </DialogHeader>

//         <form className="space-y-4" onSubmit={handleSubmit((data) => onSubmit(data)) } >

//           {/* 🔥 SUBJECT DROPDOWN */}
//           <div>
//             <Label>Subject</Label>

//             <Select onValueChange={(val) => setValue("subjectId", val)}>
//               <SelectTrigger>
//                 <SelectValue placeholder="Select subject" />
//               </SelectTrigger>

//               <SelectContent>
//                 {subjects && subjects.length > 0 ? (
//                   subjects.map((sub) => (
//                     <SelectItem key={sub.id} value={sub.id}>
//                       {sub.name}
//                     </SelectItem>
//                   ))
//                 ) : (
//                   <div className="p-2 text-sm text-gray-500">
//                     No subjects found
//                   </div>
//                 )}
//               </SelectContent>
//             </Select>

//             {errors.subjectId && (
//               <p className="text-red-500 text-sm">
//                 {errors.subjectId.message}
//               </p>
//             )}
//           </div>

//           {/* Start Date */}
//           <Input type="datetime-local" {...register("startDate")} />

//           {/* End Date */}
//           <Input type="datetime-local" {...register("endDate")} />

//           {/* Notes */}
//           <Textarea {...register("notes")} placeholder="Notes..." />

//           {/* Submit */}
//           <DialogFooter>
//             <Button type="submit" className="w-full">
//               Confirm Booking
//             </Button>
//           </DialogFooter>

//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }





// "use client";

// import * as React from "react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// // ---------------- Schema ----------------
// const bookingSchema = z.object({
//   subjectId: z.string().min(1, "Select subject"),
//   startDate: z.string().min(1),
//   endDate: z.string().min(1),
//   notes: z.string().optional(),
// });

// export type BookingFormValues = z.infer<typeof bookingSchema>;

// // ---------------- Props ----------------
// interface BookingModalProps {
//   subjects: { id: string; name: string }[];
//   onSubmit: (data: BookingFormValues) => void;
// }

// // ---------------- Component ----------------
// export default function BookingModal({
//   subjects=[],
//   onSubmit,
// }: BookingModalProps) {
//   const {
//     handleSubmit,
//     setValue,
//     register,
//     formState: { errors },
//   } = useForm<BookingFormValues>({
//     resolver: zodResolver(bookingSchema),
//   });

//   console.log("SUBJECTS FINAL:", subjects);

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button disabled={subjects.length === 0}>
//           {subjects.length === 0 ? "Loading..." : "Book Service"}
//         </Button>
//       </DialogTrigger>

//       <DialogContent className="sm:max-w-lg">
//         <DialogHeader>
//           <DialogTitle>Book Session</DialogTitle>
//         </DialogHeader>

//         <form
//           className="space-y-4"
//           onSubmit={handleSubmit((data) => onSubmit(data))}
//         >
//           {/* SUBJECT DROPDOWN */}
//           <div>
//             <Label>Subject</Label>

//             <Select onValueChange={(val) => setValue("subjectId", val)}>
//               <SelectTrigger>
//                 <SelectValue placeholder="Select subject" />
//               </SelectTrigger>

//               <SelectContent>
//                 {subjects.map((sub) => (
//                   <SelectItem key={sub.id} value={sub.id}>
//                     {sub.name}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>

//             {errors.subjectId && (
//               <p className="text-red-500 text-sm">
//                 {errors.subjectId.message}
//               </p>
//             )}
//           </div>

//           {/* Start Date */}
//           <Input type="datetime-local" {...register("startDate")} />

//           {/* End Date */}
//           <Input type="datetime-local" {...register("endDate")} />

//           {/* Notes */}
//           <Textarea {...register("notes")} placeholder="Notes..." />

//           {/* Submit */}
//           <DialogFooter>
//             <Button type="submit" className="w-full">
//               Confirm Booking
//             </Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }




// "use client";

// import * as React from "react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// const bookingSchema = z.object({
//   subjectId: z.string().min(1, "Select subject"),
//   startDate: z.string().min(1),
//   endDate: z.string().min(1),
//   notes: z.string().optional(),
// });

// export type BookingFormValues = z.infer<typeof bookingSchema>;

// interface BookingModalProps {
//   subjects: { id: string; name: string }[];
//   onSubmit: (data: BookingFormValues) => void;
// }

// export default function BookingModal({subjects = [],onSubmit,}: BookingModalProps) {
//   const {
//     handleSubmit,
//     setValue,
//     register,
//     formState: { errors },
//   } = useForm<BookingFormValues>({
//     resolver: zodResolver(bookingSchema),
//   });

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button disabled={subjects.length === 0}>
//           {subjects.length === 0 ? "Loading..." : "Book Service"}
//         </Button>
//       </DialogTrigger>

//       <DialogContent className="sm:max-w-lg">
//         <DialogHeader>
//           <DialogTitle>Book Session</DialogTitle>
//         </DialogHeader>

//         <form
//           className="space-y-4"
//           onSubmit={handleSubmit((data)=>onSubmit(data)) }
//         >
//           {/* SUBJECT */}
//           <div>
//             <Label>Subject</Label>

//             <Select
//               onValueChange={(val) =>
//                 setValue("subjectId", val, { shouldValidate: true })
//               }
//             >
//               <SelectTrigger>
//                 <SelectValue placeholder="Select subject" />
//               </SelectTrigger>

//               <SelectContent>
//                 {subjects.map((sub) => (
//                   <SelectItem key={sub.id} value={sub.id}>
//                     {sub.name}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>

//             {errors.subjectId && (
//               <p className="text-red-500 text-sm">
//                 {errors.subjectId.message}
//               </p>
//             )}
//           </div>

//           {/* DATE */}
//           <Input type="datetime-local" {...register("startDate")} />
//           <Input type="datetime-local" {...register("endDate")} />

//           {/* NOTES */}
//           <Textarea {...register("notes")} placeholder="Notes..." />

//           {/* SUBMIT */}
//           <DialogFooter>
//             <Button type="submit" className="w-full">
//               Confirm Booking
//             </Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }









"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// ১. স্কিমাতে 'note' ব্যবহার করুন (ব্যাকএন্ডের সাথে মিল রেখে)
const bookingSchema = z.object({
  subjectId: z.string().min(1, "Please select a subject"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  note: z.string().optional(), // 'notes' থেকে 'note' এ পরিবর্তন
}).refine((data) => {
  return new Date(data.endDate) > new Date(data.startDate);
}, {
  message: "End date must be after start date",
  path: ["endDate"],
});

export type BookingFormValues = z.infer<typeof bookingSchema>;

interface BookingModalProps {
  subjects: { id: string; name: string }[];
  onSubmit: (data: BookingFormValues) => void;
}

export default function BookingModal({ subjects = [], onSubmit }: BookingModalProps) {
  const {
    handleSubmit,
    setValue,
    register,
    trigger, // ভ্যালিডেশন ট্রিগার করার জন্য
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={subjects.length === 0} variant="outline">
          {subjects.length === 0 ? "No subjects available" : "Book Service"}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Book a Session</DialogTitle>
        </DialogHeader>

        <form
          className="space-y-5"
          onSubmit={handleSubmit((data) => onSubmit(data))}
        >
          {/* SUBJECT SELECT */}
          <div className="space-y-2">
            <Label>Subject</Label>
            <Select
              onValueChange={(val) => {
                setValue("subjectId", val);
                trigger("subjectId"); // সিলেক্ট করার সাথে সাথে এরর রিমুভ হবে
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select subject" />
              </SelectTrigger>
              <SelectContent>
                {subjects.map((sub) => (
                  <SelectItem key={sub.id} value={sub.id}>
                    {sub.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.subjectId && (
              <p className="text-red-500 text-xs">{errors.subjectId.message}</p>
            )}
          </div>

          {/* DATE PICKERS */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Start Date & Time</Label>
              <Input type="datetime-local" {...register("startDate")} />
              {errors.startDate && (
                <p className="text-red-500 text-xs">{errors.startDate.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label>End Date & Time</Label>
              <Input type="datetime-local" {...register("endDate")} />
              {errors.endDate && (
                <p className="text-red-500 text-xs">{errors.endDate.message}</p>
              )}
            </div>
          </div>

          {/* NOTE */}
          <div className="space-y-2">
            <Label>Additional Note (Optional)</Label>
            <Textarea 
              {...register("note")} 
              placeholder="Tell the tutor about your requirements..." 
            />
          </div>

          <DialogFooter>
            <Button type="submit" className="w-full">
              Confirm Booking
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}