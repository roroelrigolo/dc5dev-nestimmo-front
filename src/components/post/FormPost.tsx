'use client'

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { createPost } from "@/services/post.service"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { fetchAllCategories } from "@/services/category.service"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useToast } from "../ui/use-toast"
  

type FormPostProps = {
    setOpen: (open: boolean) => void;
}

const FormPost = ({ setOpen } : FormPostProps) => {
    const queryClient = useQueryClient();
    const { toast } = useToast();

    const { isPending, error, data } = useQuery({
        queryKey: ['getAllCategories'],
        queryFn: fetchAllCategories
    })

    const mutation = useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['getAllPosts']
            })
            setOpen(false);
            toast({
                title: 'Post ajouté',
                description: 'Votre post a bien été ajouté',
            })
        },
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const createPostDTO = {
            title: e.target.title.value,
            description: e.target.description.value,
            category: e.target.category.value
        }

        mutation.mutate(createPostDTO);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="mb-2">
                <Input 
                    type="text" 
                    placeholder="Titre" 
                    name="title"
                />
            </div>
            <div className="mb-2">
                <Textarea 
                    placeholder="Description"
                    name="description"
                />
            </div>
            <div className="mb-2">
                <select name="category" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option disabled>Catégorie</option>
                    {data && data?.map((category: any) => (
                        <option value={category.id}>{category.title}</option>
                    ))}
                </select>
            </div>
            <div>
                <Button type="submit" className="bg-cprimary w-full" disabled={mutation.isPending}>
                    {mutation.isPending && <span className="mr-4 h-4 w-4 rounded-full bg-white animate-pulse"></span>}
                    Ajouter
                </Button>
            </div>
        </form>
     );
}
 
export default FormPost;