

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

