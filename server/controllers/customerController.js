

exports.homepage = (req, res) => {
    const locals = {
        title: 'Node Js',
        description: 'User Management System',
    }

    res.render('index', locals);
}


exports.addCustomer = (req, res) => {
    const locals = {
        title: 'Add New Customer',
        description: 'User Management System',
    }

    res.render('customer/add',locals);
}

exports.postCustomer  = (req, res) => {
    console.log(req.body);
    const locals = {
        title: 'New Customer Added',
        description: 'User Management System',
    }

    res.render('customer/add',locals);
}

