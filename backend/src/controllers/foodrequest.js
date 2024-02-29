const FoodrequestModel = require('../model/foodrequest')
const createHttpError = require('http-errors')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
exports.savedetails = async (req, res, next) => {
    const firstname = req.body.firstname
    const organization = req.body.organization
    const organizationid = req.body.organizationid
    const numberofpeople = req.body.numberofpeople
    const category = req.body.category
    const foodtype = req.body.foodtype
    const size = req.body.size
    const location = req.body.location
    const contact = req.body.contact

    console.log(req.body)
    try {
        if (!firstname || !organization || !organizationid || !numberofpeople || !category || !foodtype || !size || !location || !contact) {
            throw createHttpError(400, 'Missing required parameters')
        }
        const newDetails = new FoodrequestModel({
            firstname: firstname,
            organization: organization,
            organizationid: parseInt(organizationid),
            numberofpeople: parseInt(numberofpeople),
            category: category,
            foodtype: foodtype,
            size: parseInt(size),
            location: location,
            contact: parseInt(contact),
            user: req.user.user_id  
        })
        const result = await newDetails.save();
        res.status(201).send(result);
    }
    catch (error) {
        next(error)
    }
}
//get details according to an id
exports.getdetailsbyid = async (req, res, next) => {
    try {
        const id = req.params.id
        const result = await FoodrequestModel.findById(id);
        res.status(201).send(result);
    }
    catch (error) {
        next(error)
    }

    
  

}


    exports.deletedetails = async (req, res, next) => {
        try {
            const id = req.params.id
            const result = await FoodrequestModel.findByIdAndDelete(id);
            res.status(201).send(result);
        }
        catch (error) {
            next(error)
        }
    }


    exports.getAll = async (req, res, next) => {
        const user_id = req.user.user_id;
        
        try {
            const result = await FoodrequestModel.find({ user: user_id });
            res.status(201).send(result);
        }
        catch (error) {
            next(error)
        }
    }



    exports.update = async (req, res, next) =>
    
    {

        try {

            const id = req.params.id;
            const firstname = req.body.firstname
            const organization = req.body.organization
            const organizationid = req.body.organizationid
            const numberofpeople = req.body.numberofpeople
            const category = req.body.category
            const foodtype = req.body.foodtype
            const size = req.body.size
            const location = req.body.location
            const contact = req.body.contact

            //validate id
            if (!mongoose.Types.ObjectId.isValid(id)) throw createHttpError(400, 'Invalid ID');

            const request = await FoodrequestModel.findById(id);

            if (!request) throw createHttpError(404, 'Request not found in the  databse');

            request.firstname = firstname || request.firstname;
            request.organization = organization || request.organization;
            request.organizationid = organizationid || request.organizationid;
            request.numberofpeople = numberofpeople || request.numberofpeople;
            request.category = category || request.category;
            request.foodtype = foodtype || request.foodtype;
            request.size = size || request.size;
            request.location = location || request.location;
            request.contact = contact || request.contact;
            request.user = req.user.user_id || request.user;

            const result = await request.save();

            res.status(200).send(result);            
            
        } catch (error) {
            next(error);
            
        }

    }

