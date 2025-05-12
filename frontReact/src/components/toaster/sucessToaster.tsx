import * as Toast from '@radix-ui/react-toast';
// import { useState } from 'react';

export function Toaster({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
    return (
        <Toast.Provider swipeDirection="right">
            <Toast.Root className="toast-root" open={open} onOpenChange={setOpen}>
                <Toast.Title className="toast-title">✅ Cadastro realizado com sucesso!</Toast.Title>
            </Toast.Root>
            <Toast.Viewport className="toast-viewport" />
        </Toast.Provider>
    );
}
