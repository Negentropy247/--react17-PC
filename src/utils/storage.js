// 封装本地存储的操作
const TOKEN_KEY = 'itcast_geek_pc'

const getToken = () => localStorage.getItem(TOKEN_KEY)
const setToken = token => localStorage.setItem(TOKEN_KEY, token)
const removeToken = () => localStorage.removeItem(TOKEN_KEY)
const hasToken = () => !!getToken()

export { hasToken, getToken, setToken, removeToken }
