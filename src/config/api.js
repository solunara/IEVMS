// const BASE_URL = import.meta.env.VITE_BASE_URL
const BASE_URL = "http://localhost:8080"
export const API_CONFIG = {
    // login
    loginApi: `${BASE_URL}/login`,
    logoutApi: `${BASE_URL}/logout`,

    // vehicle
    getVehicleListApi: `${BASE_URL}/vehicle/list`,

    // operator
    getOperatorListApi: `${BASE_URL}/operator/list`,
}

export const CONFIG = {
    TOKEN_NAME: 'Authorization',
}

export const setToken = token => window.localStorage.setItem(CONFIG.TOKEN_NAME, token);
export const getToken = ()=> window.localStorage.getItem(CONFIG.TOKEN_NAME);
export const removeToken = () => window.localStorage.removeItem(CONFIG.TOKEN_NAME);
