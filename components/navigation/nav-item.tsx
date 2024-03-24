"use client"
import { ChevronDown, Eye } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import { AccordionItem } from "@radix-ui/react-accordion";
import { getColorByIndex } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { TRoom } from "@/lib/types";

type PropsType = {
    label: string;
    icon: any;
    options?: TRoom[];
    path?: string
};
export const NavItem = ({ label, icon, options, path }: PropsType) => {
    const Icon = icon;
    const router = useRouter()
    console.log(options)

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
                            {options?.map((item, index: number) => {
                                const getClassColor = getColorByIndex(index)
                                return (
                                    <AccordionContent key={index} onClick={() => router.push(`${"/c/" + item.id}` || "/")} className="pl-6  cursor-pointer text-xs border-gray-200 transition-all ease-in duration-100 hover:bg-slate-100 rounded-r-full  text-slate-600 font-medium  flex items-center justify-start leading-10 py-0.5">
                                        <div className={`${getClassColor} uppercase  size-8 text-white rounded-full  align-middle flex items-center justify-center font-medium`}>
                                            {item?.name[0]}
                                        </div>
                                        <div className="ml-3 capitalize">{item?.name}</div>
                                    </AccordionContent>
                                )
                            })}
                            <AccordionContent onClick={() => router.push(path || "/")} className="pl-6 text-xs cursor-pointer  border-gray-200 transition-all ease-in duration-100 hover:bg-slate-100 rounded-r-full  text-slate-600 font-medium  flex items-center justify-start leading-10 py-0.5">
                                <div className={` uppercase bg-sky-200  size-8  rounded-full  align-middle flex items-center justify-center font-medium`}>
                                    <Eye className="size-4 text-gray-500" />
                                </div>

                                <div className="ml-3 capitalize">View All</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            ) : (

                <div onClick={() => router.push(path || "/")} className="pl-6  cursor-pointer  border-gray-200 transition-all ease-in duration-100 hover:bg-slate-100 rounded-r-full  text-slate-600 font-medium text-sm flex items-center leading-10 py-0.5">
                    <div className="p-1">
                        <Icon className=" size-5" />
                    </div>

                    <div className="ml-3">{label}</div>
                </div>
            )}

        </div>
    );
};
