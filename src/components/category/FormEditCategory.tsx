'use client'

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { updateCategory } from "@/services/category.service"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CategoryUpdateDTO } from "@/types/category"
import { useParams } from "next/navigation"
import { CategoryDetailParams } from "@/app/categories/[id]/page"
import { useToast } from "../ui/use-toast"

type FormCategoryProps = {
    setOpen: (open: boolean) => void;
    categoryName: string;
}

const FormEditCategory = ({ setOpen, categoryName } : FormCategoryProps) => {
    const { id } = useParams<CategoryDetailParams>();
    const queryClient = useQueryClient();
    const { toast } = useToast();

    const mutation = useMutation({
        mutationFn: ({ id, updateCategoryDTO }: { id: string, updateCategoryDTO: CategoryUpdateDTO }) => updateCategory(id, updateCategoryDTO),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['getAllCategories']
            })
            queryClient.invalidateQueries({
                queryKey: ['getCategoryById', id]
            })
            setOpen(false);
            toast({
                title: 'Catégorie modifiée',
                description: 'Votre catégorie a bien été modifiée',
            })
        },
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const updateCategoryDTO = {
            title: e.target.title.value,
        }

        mutation.mutate({id,updateCategoryDTO});
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="mb-2">
                <Input 
                    type="text" 
                    placeholder="Titre" 
                    name="title"
                    defaultValue={categoryName}
                />
            </div>
            <div>
                <Button type="submit" className="bg-cprimary w-full" disabled={mutation.isPending}>
                    {mutation.isPending && <span className="mr-4 h-4 w-4 rounded-full bg-white animate-pulse"></span>}
                    Modifier
                </Button>
            </div>
        </form>
     );
}
 
export default FormEditCategory;