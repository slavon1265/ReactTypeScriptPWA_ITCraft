import {AuthService} from "../../services/authService";
import React from "react";
import {IAuth} from "../services/authServicesTypes";

export interface IAuthBlockPropsTypes {
    authType: string;
    authService: AuthService;
    setAuthFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
    authState: IAuth;
}
