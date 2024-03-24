import { DummyAvatar } from "@/components/common/dummy-avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SendHorizontal } from "lucide-react"

export const CommentForm = () => {
    return (
        <div className="flex w-full gap-3">
            <DummyAvatar />
            <Input placeholder="Add class comment..." className="rounded-3xl placeholder:text-xs  focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-pink-400 border-2" />
            <Button variant="outline" size="icon">
                <SendHorizontal className="h-4 w-4 text-gray-500" />
            </Button>
        </div>
    )
}
