import { z } from "zod";
export const AnnouncementFormSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(2).max(1000).trim(),
});

export type AnnouncementFormType = z.infer<typeof AnnouncementFormSchema>;

export const AnnouncementInitialValues = {
  title: "",
  description: "",
};
