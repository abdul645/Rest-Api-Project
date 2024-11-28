import adminModel from "../model/adminModel.js"

const adminLoginController = async (req, res) => {
    if (req.method === 'GET') {
        res.render('adminLogin', { title: 'Admin Signin' })
    }
    else if (req.method === 'POST') {
        try {
            const { UserName, password } = req.body;
            // Attempt to find a user based on UserName
            let check = await adminModel.findOne({ UserName })

            // If user is found and password matches

            if (check && check.Password == password) {
                // Redirect to DashBoard
                res.redirect('/dashboard');
            } else {
                // Handle case where user or password is incorrect
                return res.json('Wrong password or user not found')
            }
        } catch (error) {
            return res.status(500).json("Internal Server Error")
        }
    }
}

export { adminLoginController }