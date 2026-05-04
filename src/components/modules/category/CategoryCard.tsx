// /* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DollarSign, Briefcase, Star } from "lucide-react";
import Link from "next/link";

interface CategoryCardProps {
  category: any;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  if (!category) return null;

  // ডেসট্রাকচারিং এ id অবশ্যই রাখবেন
  const {  categoryType, price, description, tutor } = category;

  return (
    <Card className="w-full max-w-md rounded-2xl shadow-md border group relative overflow-hidden">
      {/* কার্ড কন্টেন্ট */}
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <Badge variant="secondary">{categoryType}</Badge>
        <div className="flex items-center text-lg font-bold text-primary">
          <DollarSign size={16} /> {price}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>

        {/* টিউটর ইনফো */}
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>{tutor?.user?.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{tutor?.user?.name}</p>
            <p className="text-xs text-muted-foreground italic truncate">{tutor?.bio}</p>
          </div>
        </div>

        {/* বাটন সেকশন */}
        <div className="flex flex-col sm:flex-row gap-3 w-full pt-2">
          <Button className="w-full sm:w-1/2">Book Now</Button>

          {/* আন্ডারলাইন এরর দিলে সরাসরি Link এর ভেতর Button রাখুন */}
          <Link href={`/categories/${category.id}`} className="w-full sm:w-1/2">
            <Button variant="outline" className="w-full bg-black text-white hover:bg-slate-800">
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}