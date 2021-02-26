import {ActionsTypes, AuthAction, IAuth} from "../types/reducers/authTypes";

const initialState: IAuth= {
    authType: 'signIn'
}

export default (state= initialState, action: AuthAction) => {
    switch (action.type) {
        case ActionsTypes.SET_AUTH_TYPE:
            return {...state, authType: action.payload}
        default :
            return state
    }
}

export const setAuthType = (payload:string): AuthAction => ({type: ActionsTypes.SET_AUTH_TYPE, payload})