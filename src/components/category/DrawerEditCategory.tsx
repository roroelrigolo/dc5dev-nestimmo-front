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
import FormEditCategory from "./FormEditCategory";
import { useState } from "react";

type DrawerEditCategoryProps = {
    categoryName: string;
}

const DrawerEditCategory = ({ categoryName }: DrawerEditCategoryProps) => {
    const [open, setOpen] = useState(false);

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button className="bg-cprimary" variant="default">
                    Modifier la catégorie
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle className="text-center">Modifier la catégorie : {categoryName}</DrawerTitle>
                    <DrawerDescription className="text-center">Renseignez l'enssemble des champs.</DrawerDescription>
                    <FormEditCategory setOpen={setOpen} categoryName={categoryName} />
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

export default DrawerEditCategory;