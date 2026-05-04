
import CategoryCard from "@/components/modules/category/CategoryCard";
import HeroCarousel from "@/components/modules/home/Hero";
import { getAllCategory } from "@/services/category";

export default async function Home() {
  const { data } = await getAllCategory();
  console.log(data)

  return (
    <div className="space-y-10">
      <HeroCarousel />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {data?.slice(0,4).map((c: any) => (
          <CategoryCard key={c.id} category={c} />
        ))}
      </div>
    </div>
  );
}



