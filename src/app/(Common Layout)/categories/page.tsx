// import CategoryCard from '@/components/modules/category/CategoryCard'
// import { getAllCategory } from '@/services/category'


// const page = async() => {
//     const {data}= await getAllCategory()
   
    
//   return (
//     <div>
//         <div className='grid my-10 grid-cols-4 gap-5 ' >

//        {data?.map((c:any)=>(
//         <CategoryCard key={c.id} category={c}/>
//        ))
        
//        }
//         </div>
//     </div>
//   )
// }


// export default page




import CategoryCard from "@/components/modules/category/CategoryCard";
import { getAllCategory } from "@/services/category";

const Page = async () => {
  const { data } = await getAllCategory();

  return (
    <section className="my-10 pb-24">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {data?.map((c: any) => (
          <CategoryCard
            key={c.id}
            category={c}
          />
        ))}

      </div>

    </section>
  );
};

export default Page;

