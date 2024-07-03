'use client'

import DialogConfirmDelete from "@/components/globals/DialogConfirmDelete";
import { useToast } from "@/components/ui/use-toast";
import { deletePost, fetchPostById } from "@/services/post.service";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import CategoryList from "@/components/category/CategoryList";

const CategoryPage = () => {        
    return ( 
        <div className="px-10">
            <CategoryList />
        </div>
     );
}
 
export default CategoryPage;