import { fetchData } from "./fetch";

export class authFetch {
    uri = "http://localhost:3000/auth";

    async login(credential) {
        const user = await fetchData(this.uri + "/login", "POST", credential);
        return user;
    }
}
