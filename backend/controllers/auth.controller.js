class AuthController{
    loginUser = async (req,res)=>{
        res.send('login success')
    }
}

export default new AuthController()