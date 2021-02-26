import {IInputs, InputAction, InputsTypes} from "../types/reducers/inputsTypes";

const initialState: IInputs = {
    activeInputID: '1',
    activeInputValue: '1',
}

export default (state= initialState, action: InputAction) => {
    switch (action.type) {
        case InputsTypes.SET_ACTIVE_INPUT_ID:
            return {...state, activeInputID: action.payload};
        case InputsTypes.SET_ACTIVE_INPUT_VALUE:
            return {...state, activeInputValue: action.payload};
        default :
            return state
    }
}

export const setActiveInputIdAction = (payload: string): InputAction => ({type: InputsTypes.SET_ACTIVE_INPUT_ID, payload})
export const setActiveInputValueAction = (payload: string): InputAction => ({type: InputsTypes.SET_ACTIVE_INPUT_VALUE, payload})