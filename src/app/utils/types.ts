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
  title: string;
  description: string;
  url: string;
  thumbnail_url: string;
  date: string;
  created_at: string;
  updated_at: string;
  game_title: string;
  user_display_name: string;
  user_profile_url: string;
  user_id: number;
  user: TUser;
  players: string[];
};
