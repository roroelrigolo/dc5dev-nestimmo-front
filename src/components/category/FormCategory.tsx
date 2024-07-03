'use client'

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { createCategory } from "@/services/category.service"
import { useMutation, useQueryClient } from "@tanstack/react-query"

type FormCategoryProps = {
    setOpen: (open: boolean) => void;
}

const FormCategory = ({ setOpen } : FormCategoryProps) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: createCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['getAllCategories']
            })
            setOpen(false);
        },
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const createCategoryDTO = {
            title: e.target.title.value,
        }

        mutation.mutate(createCategoryDTO);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="mb-2">
                <Input 
                    type="text" 
                    placeholder="Category title" 
                    name="title"
                />
            </div>
            <div>
                <Button type="submit" className="w-full" disabled={mutation.isPending}>
                    {mutation.isPending && <span className="mr-4 h-4 w-4 rounded-full bg-white animate-pulse"></span>}
                    Create category
                </Button>
            </div>
        </form>
     );
}
 
export default FormCategory;