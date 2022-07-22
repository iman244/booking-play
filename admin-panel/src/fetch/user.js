// export const userFetchAllUserInformation = () => {};
// export const userFetchupdateUser = () => {};
// export const userFetchDeleteUser = () => {};
// export const userFetchUserInformation = () => {};

import { fetchData } from "./fetch";

export class userFetch {
    uri = "http://localhost:3000/users";
    async AllInfomation() {
        const data = await fetchData(this.uri + "/admin/all", "GET");
        return data;
    }
    async userInformation(id) {
        const data = await fetchData(uri + `/${id}`, "GET");
        return data;
    }
}
