import { api, getAuthHeaders, get, post, update, del } from "./services.common";
export const loginAPI = async (userlogin) => {
    //path e.g.
    let url = `${api}/user/login`
    let authHeader = getAuthHeaders()
    return await post(url, userlogin, { ...authHeader })
}
export const signupAPI = async (userlogin) => {
    //another path e.g.
    let url = `${api}/user/signup`
    let authHeader = getAuthHeaders()
    return await post(url, userlogin, { ...authHeader })
}