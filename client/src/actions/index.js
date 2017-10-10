import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from '../constants/actionsTypes';

const requestLogin = data => {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        data
    }
};

const receiveLogin = user => {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        id_token: user.id_token
    }
};


const loginError = message => {
    return {
        type: LOGIN_ERROR,
        isFetching: false,
        isAuthenticated: false,
        message
    }
};

export const signIn = () => {
    return {
        type: 'TEST'
    }
}