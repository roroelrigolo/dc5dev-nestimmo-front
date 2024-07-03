'use client'

import { fetchAllPosts } from "@/services/post.service";
import { useQuery } from "@tanstack/react-query";
import DrawerPost from "./DrawerPost";
import Link from "next/link";

const PostList = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['getAllPosts'],
        queryFn: fetchAllPosts
    })

    if(isPending) return <div className="h-full flex justify-center items-center">Loading...</div>

    return ( 
        <div>
            <div className="flex justify-between items-center">
                <h2 className="text-4xl font-bold my-5 text-cprimary">
                    Liste des posts
                </h2>
                <DrawerPost />
            </div>
  

            <div className="grid grid-cols-4 gap-2">
                {data?.map((post: any) => (
                    <Link href={`/posts/${post.id}`}>
                        <div key={post.id} className="bg-cprimary hover:bg-cprimary/50 shadow-lg text-white rounded-lg p-4">
                            <h3 className="text-lg font-medium mb-2">{post.title}</h3>
                            <p>{post.description}</p>
                        </div>    
                    </Link>
                ))}
            </div>
        </div>
     );
}
 
export default PostList;