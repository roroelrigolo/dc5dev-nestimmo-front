'use client'

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { updatePost } from "@/services/post.service"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { PostUpdateDTO } from "@/types/post"
import { useParams } from "next/navigation"
import { PostDetailParams } from "@/app/posts/[id]/page"
import { useToast } from "../ui/use-toast"
import { fetchAllCategories } from "@/services/category.service"

type FormPostProps = {
    setOpen: (open: boolean) => void;
    postTitle: string;
    postDescription: string;
    postCategory: number;
}

const FormEditCategory = ({ setOpen, postTitle, postDescription, postCategory } : FormPostProps) => {
    const { id } = useParams<PostDetailParams>();
    const queryClient = useQueryClient();
    const { toast } = useToast();

    const { isPending, error, data } = useQuery({
        queryKey: ['getAllCategories'],
        queryFn: fetchAllCategories
    })

    const mutation = useMutation({
        mutationFn: ({ id, updatePostDTO }: { id: string, updatePostDTO: PostUpdateDTO }) => updatePost(id, updatePostDTO),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['getAllPosts']
            })
            queryClient.invalidateQueries({
                queryKey: ['getPostById', id]
            })
            setOpen(false);
            toast({
                title: 'Post modifié',
                description: 'Votre post a bien été modifié',
            })
        },
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const updatePostDTO = {
            title: e.target.title.value,
            description: e.target.description.value,
            category: e.target.category.value
        }

        mutation.mutate({id,updatePostDTO});
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="mb-2">
                <Input 
                    type="text" 
                    placeholder="Titre" 
                    name="title"
                    defaultValue={postTitle}
                />
            </div>
            <div className="mb-2">
                <Textarea 
                    placeholder="Description"
                    name="description"
                    defaultValue={postDescription}
                />
            </div>
            <div className="mb-2">
                <select name="category" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option disabled>Catégorie</option>
                    {data && data?.map((category: any) => (
                        <option value={category.id} selected={category.id === postCategory}>{category.title}</option>
                    ))}
                </select>
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