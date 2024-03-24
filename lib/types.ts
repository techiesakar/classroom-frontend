export type TRoom = {
  id: string;
  name: string;
  subject: string;
  inviteCode: string;
  teacher: TUser;
  announcements?: TAnnouncement[];
};

export type TAnnouncement = {
  id: string;
  title: string;
  description: string;
  updatedAt: string;
};

export type TUser = {
  id: string;
  name: string;
};

export type HTTPMethod = "post" | "patch";
