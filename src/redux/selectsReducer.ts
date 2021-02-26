import {ISelectPayload, SelectsAction, SelectsActionTypes} from "../types/reducers/selectsTypes";

const initialState = {
    selectsValues: {}
}

export default (state= initialState, action: SelectsAction) => {
    switch (action.type) {
        case SelectsActionTypes.ADD_SELECTS_VALUE:
            return {...state, selectsValues: {...state.selectsValues, ...action.payload}};
        default :
            return state
    }
}

export const addSelectsValueAction = (payload: ISelectPayload): SelectsAction => ({type: SelectsActionTypes.ADD_SELECTS_VALUE, payload})