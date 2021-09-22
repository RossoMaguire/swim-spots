declare type Fave = {
  id: number;
  user_name: string;
  swim_spot_name: string;
};

declare type ISwimSpot = {
  id: number;
  name: string;
  county: string;
  description: string;
  coordinates: string;
  favourites: number;
  user_name: string;
};

declare interface ISwimPanelProps {
  id: number;
  name: string;
  county: string;
  desc: string;
  coordinates: string;
  username: string;
  faves: Fave[];
  userFaves: Fave[];
  currentUser: string | null;
  resetSwimSpots: Function;
}

declare interface ISearchPanelProps {
  handleSearch: React.ChangeEventHandler;
  searchBy: string;
}

declare interface IOrderProps {
  toggleOrder: React.ChangeEventHandler;
  order: boolean;
}

declare interface IFeedProps {
  handleLogout: React.MouseEventHandler;
  user: string | null;
}

declare interface ICreateSpotProps {
  user: string | null;
}

declare interface IUserNamePanelProps {
  currentUser: string | null;
  handleLogout: React.MouseEventHandler;
}

declare interface IDeleteSpotProps {
  id: number;
  resetSwimSpots: Function;
}

declare interface ILoginProps {
  handleLogin: Function;
}
