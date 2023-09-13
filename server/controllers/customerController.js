const Customer = require('../models/Customer');
const mongoose = require('mongoose');

exports.homepage = async (req, res) => {

    const messages = req.flash('info');
    const locals = {
        title: 'Node Js',
        description: 'User Management System',
    }
 
    let perPage = 12;
    let page = req.query.page || 1;

    try {
      const customers = await Customer.aggregate([ { $sort: { createdAt: -1 } } ])
        .skip(perPage * page - perPage)
        .limit(perPage)
        .exec(); 
      const count = await Customer.count();

      res.render('index', {
        locals,
        customers,
        current: page,
        pages: Math.ceil(count / perPage),
        messages
      });

    } catch (error) {
      console.log(error);
    }
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

exports.view = async (req, res) => {

  try {
    const customer = await Customer.findOne({ _id: req.params.id })

    const locals = {
      title: "View Customer Data",
      description: "Free NodeJs User Management System",
    };

    res.render('customer/view', {
      locals,
      customer
    })

  } catch (error) {
    console.log(error);
  }

}

