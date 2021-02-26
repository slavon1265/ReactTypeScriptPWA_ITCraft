export interface IAuth{
    authType: string;
}

export enum ActionsTypes{
    SET_AUTH_TYPE='SET_AUTH_TYPE',
}

interface SetAuthType {
    type: ActionsTypes.SET_AUTH_TYPE;
    payload: string;
}

export type AuthAction = SetAuthType;