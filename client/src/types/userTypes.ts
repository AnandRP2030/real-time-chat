export interface UserDetails {
    username: string;
    gender: string;
    fullName: string
}

export interface SignupUserDetails extends UserDetails {
    password: string;
    confirmPassword: string;
}

