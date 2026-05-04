// "use client"

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetContent,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// import { Menu } from "lucide-react";
// import { useEffect, useState } from "react";
// import { getUser,UserLogOut } from "@/services/auth";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [user,setUser]=useState(null);
//   const [loading,setLoading]=useState(false);

//   const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "Courses", href: "/courses" },
//   { name: "categories", href: "/categories" },
//   { name: "About", href: "/about" },
// ];

//  const pathname = usePathname();

// useEffect(()=>{
//     const getCurrentUser=async()=>{
//       const userData= await getUser();
//       setUser(userData);
//     };
//     getCurrentUser();
//   },[loading])

//   const handleLogout=()=>{
//     UserLogOut();
//     setLoading(true)
//   }



//   return (
//     <nav className="w-full border-b bg-white sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold">
//           SkillBridge
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-6">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className={`text-sm font-medium transition ${
//                 pathname === link.href
//                   ? "text-black font-semibold"
//                   : "text-gray-500 hover:text-black"
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}

//       {user?(<Button onClick={handleLogout}>LogOut</Button>):
//         (<Link href={"/login"}><Button>Login</Button></Link>)}
//           {/* <Button>Login</Button> */}
//           {/* <Button> <Link href={"/login"}>Login</Link></Button> */}
//         </div>

//         {/* Mobile Menu */}
//         <div className="md:hidden">
//           <Sheet open={open}onOpenChange={setOpen} >
//             <SheetTrigger asChild>
//               <Button variant="outline" size="icon">
//                 <Menu className="w-5 h-5" />
//               </Button>
//             </SheetTrigger>

//             <SheetContent side="right" className="w-[250px]">
//               <div className="flex flex-col gap-4 mt-6">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     onCanPlay={()=>setOpen(false)}
//                     className={`text-base ${
//                       pathname === link.href
//                         ? "font-semibold"
//                         : "text-gray-500"
//                     }`}
//                   >
//                     {link.name}
//                   </Link>
//                 ))}
//                 {user?(<Button className="w-full">LogOut</Button>) :
//                 (<Button className="w-full">Login</Button>)}

//                 {/* <Button className="mt-4">Login</Button> */}
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </nav>
//   );
// }



// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import { Menu } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetContent,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// import { getUser, } from "@/services/auth";

// export default function Navbar() {
//   const pathname = usePathname();
//   const router = useRouter();

//   const [open, setOpen] = useState(false);
//   const [user, setUser] = useState<any>(null);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "Services", href: "/services" },
//     { name: "About", href: "/about-us" },
//     { name: "Contact", href: "/contact" },
//   ];

//   // 🔥 Load user
//   useEffect(() => {
//     const loadUser = async () => {
//       const data = await getUser();
//       setUser(data);
//     };

//     loadUser();
//   }, []);

//   // 🔥 Logout
//   // const handleLogout = async () => {
//   //   await UserLogOut();
//   //   setUser(null);
//   //   router.push("/login");
//   // };

//   return (
//     <header className="border-b bg-white sticky top-0 z-50">
//       <div className="container mx-auto flex h-16 items-center justify-between px-4">

//         {/* Logo */}
//         <Link href="/" className="text-xl font-bold">
//           SkillBridge
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex items-center gap-6">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className={`text-sm font-medium transition-colors ${
//                 pathname === link.href
//                   ? "text-black font-bold"
//                   : "text-gray-500 hover:text-black"
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}

//           {user ? (
//             <Button onClick={handleLogout}>Logout</Button>
//           ) : (
//             <Link href="/login">
//               <Button>Login</Button>
//             </Link>
//           )}
//         </nav>

//         {/* Mobile Menu */}
//         <div className="md:hidden">
//           <Sheet open={open} onOpenChange={setOpen}>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon">
//                 <Menu className="h-5 w-5" />
//               </Button>
//             </SheetTrigger>

//             <SheetContent side="right" className="w-64">
//               <div className="flex flex-col gap-6 mt-6">

//                 {/* Links */}
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.name}
//                     href={link.href}
//                     onClick={() => setOpen(false)}
//                     className={`text-sm font-medium ${
//                       pathname === link.href
//                         ? "text-black font-bold"
//                         : "text-gray-500"
//                     }`}
//                   >
//                     {link.name}
//                   </Link>
//                 ))}

//                 {/* Auth Buttons */}
//                 {user ? (
//                   <Button
//                     onClick={handleLogout}
//                     className="w-full"
//                   >
//                     Logout
//                   </Button>
//                 ) : (
//                   <Link href="/login">
//                     <Button className="w-full">Login</Button>
//                   </Link>
//                 )}
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>

//       </div>
//     </header>
//   );
// }




// জেমিনি ্  এ আই 


"use client"

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User, LogOut, LayoutDashboard } from "lucide-react";
import { useEffect, useState } from "react";
import { getUser, UserLogOut } from "@/services/auth";

// Shadcn UI Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
  ];

  useEffect(() => {
    const getCurrentUser = async () => {
      const userData = await getUser();
      setUser(userData);
    };
    getCurrentUser();
  }, []);

  const handleLogout = () => {
    UserLogOut();
    setUser(null);
    router.push("/login");
  };

  return (
    <nav className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          SkillBridge
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition ${
                pathname === link.href ? "text-black font-semibold" : "text-gray-500 hover:text-black"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* User Profile or Login Button */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none cursor-pointer">
                <Avatar className="h-9 w-9 border">
                  <AvatarImage src={user?.image} alt={user?.name} />
                  <AvatarFallback className="bg-blue-100 text-blue-600 font-bold">
                    {user?.name?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user?.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="cursor-pointer flex items-center gap-2">
                    <User className="w-4 h-4" /> Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard" className="cursor-pointer flex items-center gap-2">
                    <LayoutDashboard className="w-4 h-4" /> Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600 flex items-center gap-2">
                  <LogOut className="w-4 h-4" /> Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button size="sm">Login</Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-4">
          {/* যদি মোবাইল ভিউতে ইউজার লগইন করা থাকে তবে সরাসরি আইকন দেখানো ভালো */}
          {user && (
             <Link href="/profile">
                <Avatar className="h-8 w-8 border">
                    <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
                </Avatar>
             </Link>
          )}
          
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`text-lg font-medium ${pathname === link.href ? "text-blue-600" : "text-gray-600"}`}
                  >
                    {link.name}
                  </Link>
                ))}
                
                <hr className="my-2" />
                
                {user ? (
                  <>
                    <Link href="/dashboard" onClick={() => setOpen(false)} className="text-lg font-medium text-gray-600">Dashboard</Link>
                    <Button onClick={handleLogout} variant="destructive" className="w-full mt-4">
                      Logout
                    </Button>
                  </>
                ) : (
                  <Link href="/login" onClick={() => setOpen(false)}>
                    <Button className="w-full">Login</Button>
                  </Link>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}