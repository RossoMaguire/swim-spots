export interface ICreateSpotPayload {
  user_name: string | null;
  name: string;
  description: string;
  county: string;
  coordinates: string;
}

export interface ICreateFavouritePayload {
  user_name: string | null;
  swim_spot_name: string;
}

export interface ILoginPayload {
  user_name: string;
  password: string;
}

export interface IRegisterPayload {
  user_name: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}
