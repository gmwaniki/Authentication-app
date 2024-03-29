export enum Action {
  SIGNUP = 'signup',
  LOGIN = 'login',
}

export interface IUser {
  email: string;
  password: string;
}
export type AuthContextType = {
  user: any;
  signup: (user: IUser, callback: (err: any) => void) => void;
  login: (user: IUser, callback: (err: any) => void) => void;
  signout: (callback: VoidFunction) => void;
};

export interface IUserDetails {
  phone?: string;
  bio?: string;
  name?: string;
  picture?: string;
  email: string;
}

export type LocationState = {
  from: Location;
};
