import adminModel from "../model/adminModel.js"


const adminSignupController = async (req, res) => {
    if (req.method === 'GET') {
        res.render('adminSignup', {title: 'Signup Admin'})
    }else if(req.method === 'POST'){
        try {
            console.log("Received data: ",req.body);
            
            //Destructure data
            // these structured name should be same as name attribute in Element
            const {username, email, contactNumber, password, cpassword} = req.body;

            //creating new instance of model
            const doc = new adminModel({
                UserName: username,
                Email: email,
                ContactNumber:contactNumber,
                Password: password,
                ConfirmPassword: cpassword
            }) 

            // save the data to the database
            const result = await doc.save();

            res.redirect('/dashboard');
            // res.status(200).json({ message: "Successfuly created", data:result});

            // if we send multiple response back then it will give error "Cannot set headers after they are sent to the client
            // at ServerResponse.setHeader "
                        
        } catch (error) {
            console.log('Error creating user: ', error);
            res.status(500).json({error: 'Internal Server Error'})
        }
    }
}

export {adminSignupController}