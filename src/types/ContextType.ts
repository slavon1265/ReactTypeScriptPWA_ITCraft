import {IAuth} from "./services/authServicesTypes";
import {IFirebase} from "./firebaseTypes";

export interface IContext {
    auth: IAuth;
    firebase: IFirebase;
}