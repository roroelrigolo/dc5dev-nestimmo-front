import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"

type DialogConfirmDeleteProps = {
    handleDelete: () => void;
    isPending: boolean;
}

const DialogConfirmDelete = ({ handleDelete, isPending }: DialogConfirmDeleteProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="destructive">
                    Suprimer
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Etes-vous absolument sûr ?</DialogTitle>
                    <DialogDescription>
                        Cette action ne peut pas être annulée. Cela supprimera définitivement les données.
                    </DialogDescription>
                </DialogHeader>
                <Button variant="destructive" onClick={handleDelete} disabled={isPending}>
                    Confirmer
                </Button>
            </DialogContent>
        </Dialog>

    );
}

export default DialogConfirmDelete;