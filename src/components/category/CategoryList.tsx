'use client'

import { fetchAllCategories } from "@/services/category.service";
import { useQuery } from "@tanstack/react-query";
import DrawerCategory from "./DrawerCategory";
import Link from "next/link";

const CategoryList = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['getAllCategories'],
        queryFn: fetchAllCategories
    })

    if(isPending) return <div className="h-full flex justify-center items-center">Loading...</div>

    return ( 
        <div>
            <div className="flex justify-between items-center">
                <h2 className="text-4xl font-bold my-5 text-cprimary">
                    Liste des catégories
                </h2>
                <DrawerCategory />
            </div>

            <div className="grid grid-cols-4 gap-2">
                {data?.map((category: any) => (
                    <Link href={`/categories/${category.id}`}>
                        <div key={category.id} className="bg-cprimary shadow-lg text-white rounded-lg p-4">
                            <h3 className="text-lg font-medium mb-2">{category.title}</h3>
                        </div>
                    </Link> 
                ))}
            </div>
        </div>
     );
}
 
export default CategoryList;