declare type Fave = {
  id: number;
  user_name: string;
  swim_spot_name: string;
};

declare type ISwimSpot = {
  name: string;
  county: string;
  description: string;
  coordinates: string;
  favourites: number;
  user_name: string;
};

declare interface ISwimPanelProps {
  name: string;
  county: string;
  desc: string;
  coordinates: string;
  username: string;
  faves: Fave[];
  userFaves: Fave[];
  currentUser: string | null;
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
