'use client';

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import { Button } from "@/components/ui/button";
import FormEditPost from "./FormEditPost";
import { useState } from "react";

type DrawerEditPostProps = {
    postTitle: string;
    postDescription: string;
    postCategory: number
}

const DrawerEditPost = ({ postTitle,postDescription,postCategory }: DrawerEditPostProps) => {
    const [open, setOpen] = useState(false);

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button className="bg-cprimary" variant="default">
                    Modifier le post
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle className="text-center">Modifier la post : {postTitle}</DrawerTitle>
                    <DrawerDescription className="text-center">Renseignez l'enssemble des champs.</DrawerDescription>
                    <FormEditPost setOpen={setOpen} postTitle={postTitle} postDescription={postDescription} postCategory={postCategory}/>
                </DrawerHeader>
                <DrawerFooter>
                    <DrawerClose>
                        <Button variant="outline" className="bg-black text-cprimary w-full">Annuler</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}

export default DrawerEditPost;