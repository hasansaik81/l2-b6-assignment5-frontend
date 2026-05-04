import CategoryCard from '@/components/modules/category/CategoryCard'
import { getAllCategory } from '@/services/category'


const page = async() => {
    const {data}= await getAllCategory()
   
    
  return (
    <div>
        <div className='grid my-10 grid-cols-4 gap-5 ' >

       {data?.map((c:any)=>(
        <CategoryCard key={c.id} category={c}/>
       ))
        
       }
        </div>
    </div>
  )
}


export default page