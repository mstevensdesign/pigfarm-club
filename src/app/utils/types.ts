export type TUser = {
  id: number;
  display_name: string;
  profile_url: string;
  pronouns: string;
  dob: string;
  description: string;
  first_name: string;
  last_name: string;
  email: string;
};

export type TClip = {
  id: number;
  url: string;
  title: string;
  description: string;
  date: string;
  game_title: string;
  created_at?: string;
  updated_at?: string;
  user_id: number;
  user_profile_url: string;
  user_display_name: string;
  user?: TUser;
  players?: string[];
};
