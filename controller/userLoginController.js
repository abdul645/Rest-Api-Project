import userModel from "../model/userModel.js";


const userLoginController = async (req, res) => {
    if (req.method === 'GET') {
        res.render('userLogin', {title: 'Login user'})
    }else if(req.method === 'POST'){

        try {
            
            const { UserName, password } = req.body;
            let check = await userModel.findOne({UserName})

            if (check && check.Password == password) {
                
                res.redirect('/userDashboard')
            }else{
                return res.json("Wrong password or user not found")
            }

        } catch (error) {
            return res.status(500).json("Internal server error")
        }
    }
}

export {userLoginController}