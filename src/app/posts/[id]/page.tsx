'use client'

import DialogConfirmDelete from "@/components/globals/DialogConfirmDelete";
import { useToast } from "@/components/ui/use-toast";
import { deletePost, fetchPostById } from "@/services/post.service";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DrawerEditPost from "@/components/post/DrawerEditPost";

export type PostDetailParams = {
    id: string;
}

const PostDetail = () => {
    const { id } = useParams<PostDetailParams>();
    const router = useRouter();
    const { toast } = useToast()

    const { isPending, error, data } = useQuery({
        queryKey: ['getPostById', id],
        queryFn: () => fetchPostById(id)
    })

    const mutation = useMutation({
        mutationFn: deletePost,
        onSuccess: () => {
            toast({
                title: 'Post supprimé',
                description: 'Votre post a bien été supprimé',
            })
            router.push('/')
        }
    });

    const handleDelete = () => {
        mutation.mutate(id);
    }

    if(isPending) return <div className="h-full flex justify-center items-center">Loading...</div>
    
    return ( 
        <div className="container text-center py-8">
            <h1 className="text-4xl text-cprimary">{data.title}</h1>
            <p className="mb-8">{data.description}</p>
            <div className="flex justify-center mb-8">
                <p className="rounded-full bg-cprimary text-white px-4 py-2 w-fit">{data.category.title}</p>
            </div>
            <div className="flex justify-center items-center gap-x-4">
                <Button className="bg-cprimary w-fit">
                    <Link href={`/posts`}>
                        <p>Voir les autres posts</p>       
                    </Link>
                </Button>

                <DrawerEditPost postTitle={data.title} postDescription={data.description} postCategory={data.category.id}/>
                
                <DialogConfirmDelete 
                    handleDelete={handleDelete} 
                    isPending={mutation.isPending}
                />
            </div>
        </div>
     );
}
 
export default PostDetail;