import { ChevronDown, ChevronDownIcon } from "lucide-react";
import { Separator } from "../ui/separator";
import { Accordion, AccordionContent, AccordionTrigger } from "../ui/accordion";
import { AccordionItem } from "@radix-ui/react-accordion";
import { getColorByIndex } from "@/lib/utils";
import { RoomType } from "./scroll-area";

type PropsType = {
    id: number;
    label: string;
    icon: any;
    options?: RoomType[];
};
export const NavItem = ({ id, label, icon, options }: PropsType) => {
    const Icon = icon;
    return (
        <div className="w-full">
            {label == "Teaching" && <Separator className="my-2" />}
            {options ? (
                <div className="">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value={label} className="p-0">
                            <AccordionTrigger aria-orientation="horizontal" className="pl-6  cursor-pointer  border-gray-200 transition-all ease-in duration-100 hover:bg-slate-100 rounded-r-full  text-slate-600 font-medium text-sm flex items-center justify-start leading-10 py-0.5">
                                <ChevronDown className="size-4 -ml-4 " />
                                <div className="p-1">
                                    <Icon className="size-5" />
                                </div>
                                <div className="ml-3">{label}</div>
                            </AccordionTrigger>
                            {options.map((item, index: number) => {
                                const getClassColor = getColorByIndex(index)
                                return (
                                    <AccordionContent className="pl-6  cursor-pointer  border-gray-200 transition-all ease-in duration-100 hover:bg-slate-100 rounded-r-full  text-slate-600 font-medium text-sm flex items-center justify-start leading-10 py-0.5">
                                        <div className={`${getClassColor} uppercase  size-8 text-white rounded-full  align-middle flex items-center justify-center font-medium`}>
                                            {item?.name[0]}
                                        </div>
                                        <div className="ml-3 capitalize">{item?.name}</div>
                                    </AccordionContent>
                                )
                            })}
                        </AccordionItem>
                    </Accordion>


                </div>
            ) : (

                <div className="pl-6  cursor-pointer  border-gray-200 transition-all ease-in duration-100 hover:bg-slate-100 rounded-r-full  text-slate-600 font-medium text-sm flex items-center leading-10 py-0.5">
                    <div className="p-1">
                        <Icon className=" size-5" />
                    </div>

                    <div className="ml-3">{label}</div>
                </div>
            )}

        </div>

    );
};
