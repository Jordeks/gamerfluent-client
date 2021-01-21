const URL = 'http://localhost:3000/api/v1/'

const token = localStorage.getItem('token')

export const getSessionUserBlogs = () => {
    return fetch(`${URL}/session_user_blogs`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => response.json())
}