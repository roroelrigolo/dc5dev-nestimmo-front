'use client'

import DialogConfirmDelete from "@/components/globals/DialogConfirmDelete";
import { useToast } from "@/components/ui/use-toast";
import { deleteCategory, fetchCategoryById } from "@/services/category.service";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DrawerEditCategory from "@/components/category/DrawerEditCategory";

export type CategoryDetailParams = {
    id: string;
}

const CategoryDetail = () => {
    const { id } = useParams<CategoryDetailParams>();
    const router = useRouter();
    const { toast } = useToast()

    const { isPending, error, data } = useQuery({
        queryKey: ['getCategoryById', id],
        queryFn: () => fetchCategoryById(id)
    })

    const mutation = useMutation({
        mutationFn: deleteCategory,
        onSuccess: () => {
            toast({
                title: 'Catégorie supprimée',
                description: 'Votre catégorie a bien été supprimée',
            })
            router.push('/categories')
        }
    });

    const handleDelete = () => {
        mutation.mutate(id);
    }

    if(isPending) return <div className="h-full flex justify-center items-center">Loading...</div>
    
    return ( 
        <div className="container text-center py-8">
            <h1 className="text-4xl text-cprimary mb-8">{data.title}</h1>
            <div className="flex justify-center items-center gap-x-4">
                <Button className="bg-cprimary w-fit">
                    <Link href={`/categories`}>
                        <p>Voir les autres catégories</p>       
                    </Link>
                </Button>

                <DrawerEditCategory categoryName={data.title}/>
                
                <DialogConfirmDelete 
                    handleDelete={handleDelete} 
                    isPending={mutation.isPending}
                />
            </div>
        </div>
     );
}
 
export default CategoryDetail;