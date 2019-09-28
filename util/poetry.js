export default {
    token: undefined,
    fetchToken() {
        return fetch("https://v2.jinrishici.com/token")
            .then(data => {
                return data.json();
            })
            .then(response => {
                // window.localStorage.setItem("SEEKER_POETRY_TOKEN", response.data);
                this.token = response.data;
                Promise.resolve(response.data);
            });
    },
    todayPoetry() {
        // let token = window.localStorage.getItem("SEEKER_POETRY_TOKEN");
        if (this.token) {
            return this.fetchPoetry(this.token);
        } else {
            return this.fetchToken().then(token => {
                return this.fetchToken(token);
            });
        }
    },
    fetchPoetry(token) {
        return fetch(
            "https://v2.jinrishici.com/one.json?X-User-Token=" +
            encodeURIComponent(token)
        ).then(data => {
            return data.json();
        }).then(response => {
            return response.data;
        });
    }
}
