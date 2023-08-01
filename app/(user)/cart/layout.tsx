import { AlertDialogProvider } from "@store/context/AlertDialog/alertDialogState";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <AlertDialogProvider>
            <section>{children}</section>
        </AlertDialogProvider>
    );
}
