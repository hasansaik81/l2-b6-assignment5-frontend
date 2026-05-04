// import { getProfile } from "@/services/profile";


// const page = async () => {
//     const {data}= await getProfile();
//     console.log(data)
//   return (
//     <div>
        
//     </div>
//   )
// }

// export default page    


import { getProfile } from "@/services/profile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Mail, UserCircle, Briefcase, GraduationCap } from "lucide-react";

// ১. টিউটরদের জন্য স্ট্যাটাস কম্পোনেন্ট (পেজের বাইরে রাখাই ভালো)
const TutorStats = ({ data }: any) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
    <Card className="bg-blue-50/50 border-blue-100">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-blue-600">Total Classes</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">45+</p>
      </CardContent>
    </Card>
    {/* অন্য কার্ডগুলো... */}
  </div>
);

// ২. স্টুডেন্টদের জন্য স্ট্যাটাস কম্পোনেন্ট
const StudentStats = ({ data }: any) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
    <Card className="bg-green-50/50 border-green-100">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-green-600">Enrolled Courses</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">12</p>
      </CardContent>
    </Card>
    {/* অন্য কার্ডগুলো... */}
  </div>
);

// ৩. আপনার মূল পেজ কম্পোনেন্ট
const ProfilePage = async () => {
  // এখানেই আপনার `getProfile` কল হবে
  const { data } = await getProfile();

  // ডাটা না থাকলে সেফটি চেক
  if (!data) return <div className="text-center py-20 text-gray-500">Loading profile...</div>;

  const isTutor = data.role === "TUTOR";

  return (
    <div className="container mx-auto max-w-5xl py-10 px-4">
      <Card className="overflow-hidden border-none shadow-xl bg-white">
        <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-700" />
        <div className="px-8 pb-8">
          <div className="relative -mt-16 flex flex-col md:flex-row items-end gap-6">
            <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
              <AvatarImage src={data?.image} alt={data.name} />
              <AvatarFallback className="text-3xl bg-slate-100">
                {data.name?.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 pb-2">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
                <Badge variant={isTutor ? "default" : "secondary"} className="uppercase">
                  {data.role}
                </Badge>
              </div>
              <p className="text-gray-500 flex items-center gap-1 mt-1">
                <Mail className="w-4 h-4" /> {data.email}
              </p>
            </div>
            <Button className="mb-2">Edit Profile</Button>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                <UserCircle className="w-5 h-5 text-gray-400" /> Account Info
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="font-medium text-green-600 capitalize">{data.status}</span>
                </div>
                <div className="flex justify-between">
                  <span>Joined:</span>
                  <span className="font-medium flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" />
                    {new Date(data.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                {isTutor ? <Briefcase className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
                Dashboard Overview
              </h3>
              <p className="text-gray-600 leading-relaxed italic">
                "Hello! I am {data.name}, focused on {isTutor ? "teaching and mentoring students" : "learning and achieving my academic goals"}."
              </p>

              {/* ডাটা পাস করে কন্ডিশনাল রেন্ডারিং */}
              {isTutor ? <TutorStats data={data} /> : <StudentStats data={data} />}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;