

exports.homepage = (req, res) => {
    const locals = {
        title: 'Node Js',
        description: 'User Management System',
    }

    res.render('index', locals);
}
