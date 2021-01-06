const URL = 'http://localhost:3000/api/v1/blogs'

export const getNews = () => {
    return fetch(URL)
    .then(response => response.json())
}