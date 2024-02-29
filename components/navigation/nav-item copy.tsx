import { ChevronDown, ChevronDownIcon } from "lucide-react";
import { Separator } from "../ui/separator";
import { Accordion, AccordionContent, AccordionTrigger } from "../ui/accordion";
import { AccordionItem } from "@radix-ui/react-accordion";

type PropsType = {
    id: string;
    label: string;
    icon: any;
    options?: any;
};
export const NavItem = ({ id, label, icon, options }: PropsType) => {
    const Icon = icon;
    return (
        <div className="w-full">
            {label == "Teaching" && <Separator className="my-2" />}

            {options ? (

                <div className="pl-6  cursor-pointer  border-gray-200 transition-all ease-in duration-100 hover:bg-slate-100 rounded-r-full  text-slate-600 font-medium text-sm flex items-center leading-10 py-0.5">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value={label} className="p-0">
                            <AccordionTrigger aria-orientation="horizontal" className="p-0 justify-start">
                                <ChevronDown className="size-4 -ml-4 " />
                                <div className="p-1">
                                    <Icon className="size-5" />
                                </div>
                                <div className="ml-3">{label}</div>


                            </AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>

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
