"use server"

import { cookies } from "next/headers";

export const getOwnSubjects=async()=>{
    const store = await cookies();
    const token= store.get("token")?.value;

    try{
       const res= await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/subjects/subject`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        },
        next:{
            revalidate:3600,
        },
       });
       const result = await res.json();
       return result

    }catch(error:any){
     return Error(error);
    }
};




