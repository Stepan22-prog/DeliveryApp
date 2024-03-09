class API {
    apiBase = 'http:localhost:1212';

    async makeQuery({url, method = 'GET', body}) {
        const response = await fetch(`${this.apiBase}${url}`, {
            method,
            headers: {
                accept: 'application/json',
            },
            body
        });
        const parseJSON = await response.json();
        return parseJSON;
    }
}

export default API;