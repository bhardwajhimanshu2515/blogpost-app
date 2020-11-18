import { api, getAuthHeaders, get, post, update, del } from "./services.common";
export const createAPI = async (blogCreate) => {
    console.log(api);
    let url = `${api}/blog/create`
    let authHeader = getAuthHeaders()
    return await post(url, blogCreate, { ...authHeader })
}
export const getAPI = async () => {
    console.log(api);
    let url = `${api}/blog/getAll`;
    let authHeader = getAuthHeaders()
    return await get(url,{ ...authHeader })
}
export const getOneAPI = async (id) => {
    console.log(api);
    let url = `${api}/blog/one/?blogId=`+id;
    let authHeader = getAuthHeaders()
    return await get(url,{ ...authHeader })
}