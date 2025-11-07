const User = require('../models/User');

class UserController{
    register = async(req,res) => {
        try {
            const [Name,PassWorld,Location,Device] = req.body();
            const user = await new User(Name,PassWorld,Location,Device);
            user.save();
            res.status(400).message('Đăng nhập thành công!!!')
        } catch (error) {
            console.log(error);
            res.status(500).message('lỗi server???')
        }
    }
}

module.exports = new UserController;