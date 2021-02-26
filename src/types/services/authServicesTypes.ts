
export interface IAuth{
    [key: string]: any;
};

export interface ISignData {
    email: string;
    password: string;
    rememberMe?: boolean;
};