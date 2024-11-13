export type TUser = {
  id: number;
  display_name: string;
  profile_url: string;
  pronouns: string;
  dob: string;
  description: string;
};

export type TClip = {
  id: number;
  title: string;
  description: string;
  url: string;
  thumbnail_url: string;
  created_at: string;
  updated_at: string;
  user: TUser;
};
