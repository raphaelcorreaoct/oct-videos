export interface User {
  name?: string;
  password: string;
  avatar?: string;
  login: string;
  email: string;
  id: string;
  permission_level: number;
}

export interface UserLogin {
  password: string;
  email: string;
}

export interface Follower extends User {}
