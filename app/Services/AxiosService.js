

export const hpApi = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=1&category=21&difficulty=easy&type=multiple&encode=base64',
    timeout: 8000,
    withCredentials: false
})