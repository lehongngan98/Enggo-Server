const Router = require('express');

const { register, login, verification, forgotPassword, handleLoginWithGoogle ,changePassword} = require('../controller/authController');

const authRouter = Router()

authRouter.post('/register',register);
authRouter.post('/changePassword',changePassword);
authRouter.post('/login',login);
authRouter.post('/verification',verification);
authRouter.post('/forgotPassword',forgotPassword);
authRouter.post('/google-signin',handleLoginWithGoogle);






module.exports = authRouter;