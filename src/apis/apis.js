import axios from 'axios'

const ax = axios.create({
    baseURL: 'http://xxxxx'
})


//登陆接口
export function login(acc, pwd) {
    return ax.post('/login', { acc, pwd })
}

//验证token
export function getToken(token) {
    return ax.get('/getToken', { params: { token } })
}