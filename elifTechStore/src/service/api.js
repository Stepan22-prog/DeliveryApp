class API {
    apiBase = import.meta.env.VITE_APP_SERVER_ADDRESS;

    async makeQuery({url, method = 'GET', body}) {
        const response = await fetch(`${this.apiBase}${url}`, {
            method,
            headers: {
                accept: 'application/json',
                "Content-type": 'application/json',
            },
            body
        });
        const parseJSON = await response.json();
        return parseJSON;
    }
}

export default API;