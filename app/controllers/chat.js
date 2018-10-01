module.exports.newChat = (application, req, res) => {
    const data = req.body;

    req.assert('username', 'Nome ou apelido é obrigatório.').notEmpty().len(3, 100);

    const errors = req.validationErrors();

    if (errors) {
        res.send(errors);
    }

    res.render('chat');
};