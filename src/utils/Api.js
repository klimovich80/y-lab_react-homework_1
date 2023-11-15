import BASE_URL from "./config";

const sendRequest = (url, method, body) => {
    const options = {
        method,
        headers: {
            "Content-Type": "application/json",
        },
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    return fetch(`${BASE_URL}${url}`, options).then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status} -> ${res.statusText}!`);
    });
};

export const authenticate = (password, email) => {
    return sendRequest("/signin", "POST", { password, email });
};