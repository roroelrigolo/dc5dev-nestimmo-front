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
import FormCategory from "./FormCategory";
import { useState } from "react";

const DrawerCategory = () => {
    const [open, setOpen] = useState(false);

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button className="bg-cprimary" variant="default">
                    Ajouter une catégorie
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle className="text-center">Ajouter une catégorie</DrawerTitle>
                    <DrawerDescription className="text-center">Renseignez l'enssemble des champs.</DrawerDescription>
                    <FormCategory setOpen={setOpen} />
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

export default DrawerCategory;