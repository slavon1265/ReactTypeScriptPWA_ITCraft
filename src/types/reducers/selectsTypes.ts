interface ISelectsValue {
    [key: string]: string;
}

export interface ISelectPayload {
    [key: string]: string | number;
}

export interface ISelects {
    selectsValue: ISelectsValue;
}


export enum SelectsActionTypes {
    ADD_SELECTS_VALUE = 'ADD_SELECTS_VALUE',
}


interface IAddSelectsValue {
    type: SelectsActionTypes.ADD_SELECTS_VALUE;
    payload: ISelectPayload;
}

export type SelectsAction = IAddSelectsValue;