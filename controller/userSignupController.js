import userModel from "../model/userModel.js";


const userSignupController = async (req, res) =>{
    if (req.method === 'GET') {
        res.render('userSignup', {title: 'Signup user'})
    }else if(req.method === 'POST'){
        try {
            console.log("Received Data: ", req.body);

            const { username, email, password, cpassword} = req.body;
            const doc = new userModel({
                UserName: username,
                Email: email,
                Password: password,
                ConfirmPassword: cpassword
            })
            const result = await doc.save();
            res.redirect('/userDashboard')
        } catch (error) {
            console.log("Error creating user:", error);
            res.status(500).json({error : "Internal Server error"}); 
        }
    }
}

export { userSignupController };