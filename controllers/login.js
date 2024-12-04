const { userModel } = require("../models/schema");

const postLogin = async (req, res, login) => {
    let response;
    let body = req.body;
    let loginStatus;
    body.type == 'Log In' ? loginStatus = true : loginStatus = false
    let x = await userModel.find({ email: body.email })
    if (loginStatus) {
        //Login Process
        try {
            if (x.length > 0) {
                if (body.password == x[0].password) {
                    login = true;
                    response = { 'redirectUrl': '/templates', 'message': 'SuccessFully Login', 'statusCode': 200 }
                }
                else {
                    response = { 'redirectUrl': '/login', 'message': 'Incorrect Password', 'statusCode': 404 }
                }
            }
            else {
                //--Go to Sign Up
                response = { 'redirectUrl': '/login', 'message': 'User not found, you can Sign Up', 'statusCode': 404 };
            }
        } catch (error) {
            return res.send({ 'Error': error })
        }
    }
    else {
        //SignUp Process
        try {
            if (x.length > 0) {
                //-----Go to Log In
                response = { 'redirectUrl': '/login', 'message': 'User already exist, you can Log In', 'statusCode': 404 }
            }
            else {
                //------Insert data
                let data = {
                    "email": body.email,
                    "password": body.password
                }
                const newData = new userModel(data)
                newData.save();
                login = true;

                response = { 'redirectUrl': '/templates', 'message': 'SuccessFully Sign Up', 'statusCode': 200 }
            }
        } catch (error) {
            return res.send({ 'Error': error })
        }
    }

    return {
        login,
        response
    }
}

module.exports = postLogin
