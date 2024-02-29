import { AlertCircle } from "lucide-react";

interface FormErrorProps {
    message?: string
}

export const FormError = ({ message }: FormErrorProps) => {
    if (!message) return;
    return (
        <div className="bg-red-400/20 p-3 rounded-md flex items-center gap-x-2 text-sm text-red-400">
            <AlertCircle className="size-4" />
            <p>{message}</p>
        </div>
    )
}