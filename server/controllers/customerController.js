const Customer = require('../models/Customer');
const mongoose = require('mongoose');

exports.homepage = (req, res) => {

    const messages = req.flash('info');
    const locals = {
        title: 'Node Js',
        description: 'User Management System',
    }

   res.render('index', { locals, messages} );
}


exports.addCustomer = (req, res) => {
    const locals = {
        title: 'Add New Customer',
        description: 'User Management System',
    }

    res.render('customer/add',locals);
}

exports.postCustomer  = async (req, res) => {
    console.log(req.body);

    const newCustomer = new Customer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        tel: req.body.tel,
        email: req.body.email,
        details: req.body.details,
    });

    try {
        await Customer.create(newCustomer);
        req.flash("info", "New customer has been added.");
        res.redirect('/');
    } catch (err) {
        console.log(err);
    }
    
}

