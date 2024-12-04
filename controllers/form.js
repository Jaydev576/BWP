const { formModel } = require("../models/schema");

const postForm = async (req, res, formSubmitted, previewData) => {
    let response;
    let body = req.body;
    try {
        //--Insert Data into Database
        const newData = new formModel(body)
        newData.save();
        formSubmitted = true

        //--Get id and businessName of inserted data
        let data = await formModel.find({ businessEmail: body.businessEmail })
        previewData['Name_of_Business'] = data[0].Name_of_Business;
        previewData['userId'] = data[0]._id;

        console.log(previewData);


        response = { 'redirectUrl': '/preview' }
    } catch (error) {
        return res.send({ 'Error': error })
    }
    return {
        formSubmitted,
        previewData,
        response
    }
}

module.exports = postForm 
