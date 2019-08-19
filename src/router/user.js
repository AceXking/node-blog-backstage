const {
    login
} = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const handleUserRouter = (req, res) => {
    const method = req.method
    //登陆
    if (method === 'POST' && req.path === '/api/user/login') {
        const { username, password } = req.body
        const result = login(username, password)
        if (result) {
            return new SuccessModel()
        }
        return new ErrorModel('登录失败')
    }
}

module.exports = handleUserRouter