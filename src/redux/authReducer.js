import {
    SET_AUTH_TYPE
} from "../utils/consts";

const initialState = {
    authType: 'signIn'
}

export default (state= initialState, action) => {
    switch (action.type) {
        case SET_AUTH_TYPE:
            return {...state, authType: action.payload}
        default :
            return state
    }
}

export const setAuthType = payload => ({type: SET_AUTH_TYPE, payload})