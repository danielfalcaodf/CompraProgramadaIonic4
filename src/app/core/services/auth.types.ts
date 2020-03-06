export enum AuthProvider
{
    Email,
    Facebook
}

export interface User
{
    nome?: string;
    email: string;
    password: string;
}

export interface AuthOptions
{
    isSignIn: boolean;
    provider: AuthProvider;
    user: User;
}