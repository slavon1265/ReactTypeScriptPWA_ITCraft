export interface IInputs {
    activeInputID: string;
    activeInputValue: string;
}

export enum InputsTypes {
    SET_ACTIVE_INPUT_ID='SET_ACTIVE_INPUT_ID',
    SET_ACTIVE_INPUT_VALUE='SET_ACTIVE_INPUT_VALUE',
}

interface ISetActiveInputAction {
    type: InputsTypes.SET_ACTIVE_INPUT_ID;
    payload: string;
}

interface ISetActiveInputValue {
    type: InputsTypes.SET_ACTIVE_INPUT_VALUE;
    payload: string;
}

export type InputAction =
    ISetActiveInputAction
    | ISetActiveInputValue;

