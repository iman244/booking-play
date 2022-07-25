import { fetchData } from "./fetch";

export class authFetch {
    uri = "http://127.0.0.1:3000/auth";

    async login(credential) {
        const user = await fetchData(this.uri + "/login", "POST", credential);
        return user;
    }
}
