import { api, handle } from '../helpers/api';

// const login = data => api.get('/test', data).then(rs => console.log(rs));
const login = data => api.post('/login', data).then(handle)
                         .then(res => localStorage.setItem('token', res.token));

const me = () => api.post('/me').then(handle);

const logout = () => localStorage.removeItem('token');


export const userService = {
    login, logout, me
}


