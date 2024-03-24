import { DummyAvatar } from "@/components/common/dummy-avatar";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { TAnnouncement, TRoom, TUser } from "@/lib/types";
import { convertToAMPM } from "@/lib/utils";
import { CommentForm } from "./comment-form";
import { CommentLists } from "./comment-lists";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import { AnnouncementActionCta } from "./announcement-action-cta";
type PropsType = {
    announcements: TAnnouncement[];
    teacher: TUser
};

export const AnnouncementBlock = ({ announcements, teacher }: PropsType) => {
    return (
        <section className="space-y-3">
            {announcements?.map((item: TAnnouncement) => {
                return (
                    <Card key={item.id} className="w-full  cursor-pointer transition-all rounded-lg ">
                        <CardHeader>
                            <div className="flex items-center gap-x-2">
                                <DummyAvatar />
                                <div className="mr-auto">
                                    <span className="text-xs font-semibold">{teacher.name}</span>
                                    <div className="text-xs font-light">
                                        {convertToAMPM(item?.updatedAt)}
                                    </div>
                                </div>
                                <AnnouncementActionCta announcement={item} />
                            </div>
                        </CardHeader>
                        <CardContent >
                            <h2 className="text-sm italic font-medium mb-2">{item?.title}</h2>
                            <p className="text-xs text-gray-500 leading-loose ">{item?.description}</p>
                        </CardContent>
                        <CardFooter className="flex-col">
                            <CommentLists />
                            <CommentForm />
                        </CardFooter>
                    </Card>
                );
            })}
        </section>
    );
};
