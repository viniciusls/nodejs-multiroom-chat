module.exports.newChat = (application, req, res) => {
    const data = req.body;

    req.assert('username', 'Nome ou apelido é obrigatório.').notEmpty();
    req.assert('username', 'Nome ou apelido precisa ter entre 3 e 20 caracteres.').len(3, 20);

    const errors = req.validationErrors();

    if (errors) {
        res.render('index', { errors });

        return;
    }

    application.get('io').emit('newMsg', { msg: req.body.username + ' entrou na sala.' });

    res.render('chat');
};