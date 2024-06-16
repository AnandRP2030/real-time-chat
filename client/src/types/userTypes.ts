export interface UserDetails {
  userName: string;
  gender: string;
  fullName: string;
}

export interface SignupUserDetails extends UserDetails {
  password: string;
  confirmPassword: string;
}

export interface LoginUserDeatils extends UserDetails {
  createdAt: string;
  profilePic: string;
  _id: string;
}

export interface LoginCredentials {
  userName: string;
  password: string;
}
