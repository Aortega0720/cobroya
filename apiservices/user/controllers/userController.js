const UserServices = require('../services/userServices');

class UserController {
   async userRegister(req, res){
    try {
       const user = await UserServices.userRegister(req.body);
       res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear usuario', error });
    }
   }

   async userLogin(req, res){
    try {
        const Auth = await UserServices.login(req.body);
        res.status(200)  .json(Auth)
    } catch (error) {
        res.status(500).json({ message: 'Error al Acceder al usuario', error });
    }
   }
}

module.exports = new UserController();