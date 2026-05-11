"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.

const ADMIN_navMain = [
  {
    title: "Admin Dash",
    url: "#",
    icon: SquareTerminal,
    isActive: true,
    items: [
      {
        title: "History",
        url: "#",
      },
      {
        title: "Starred",
        url: "#",
      },
      {
        title: "Settings",
        url: "#",
      },
    ],
  },
];

const STUDENT_navMain = [
  {
    title: "STUDENT Dash",
    url: "#",
    icon: SquareTerminal,
    isActive: true,
    items: [
      {
        title: "History",
        url: "#",
      },
      {
        title: "Starred",
        url: "#",
      },
      {
        title: "Settings",
        url: "#",
      },
    ],
  },
];

const TUTOR_navMain = [
  {
    title: "TUTOR Dash",
    url: "#",
    icon: SquareTerminal,
    isActive: true,
    items: [
      {
        title: "History",
        url: "#",
      },
      {
        title: "Starred",
        url: "#",
      },
      {
        title: "Settings",
        url: "#",
      },
    ],
  },
];

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  userRole: "ADMIN" | "STUDENT" | "TUTOR";
}

export function AppSidebar({ userRole, ...props }: AppSidebarProps) {
  let navItem = null;
  if (userRole === "ADMIN") {
    navItem = ADMIN_navMain;
  } else if (userRole === "STUDENT") {
    navItem = STUDENT_navMain;
  } else {
    navItem = TUTOR_navMain;
  }
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>{/* <TeamSwitcher teams={data.teams} /> */}</SidebarHeader>
      <SidebarContent>
        <NavMain items={navItem!} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}




// jodi amader payment form er code ta dekhte chai, tahole amra src/components/paymentForm/StripeWrapper.tsx file ta open korbo. Oikhane amra CheckoutForm component ke Elements component er vitor wrap korechi, jeta Stripe er context provide kore. CheckoutForm component e amra clientSecret, bookingId, and amount props pass korechi, jeta payment process er jonno dorkar.




// const STUDENT_navMain = [
//   {
//     title: "STUDENT Dash",
//     url: "/dashboard/student", // ড্যাশবোর্ডের মেইন ইউআরএল
//     icon: SquareTerminal,
//     isActive: true,
//     items: [
//       {
//         title: "My Bookings", // পেমেন্ট কনফার্ম হওয়ার পর এখানে বুকিং দেখা যাবে
//         url: "/dashboard/student/bookings", 
//       },
//       {
//         title: "Payment History",
//         url: "/dashboard/student/payment-history",
//       },
//       {
//         title: "Settings",
//         url: "/dashboard/student/settings",
//       },
//     ],
//   },
// ];