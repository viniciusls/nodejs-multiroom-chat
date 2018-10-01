module.exports.newChat = (application, req, res) => {
    const data = req.body;
    const io = application.get('io');

    req.assert('username', 'Nome ou apelido é obrigatório.').notEmpty();
    req.assert('username', 'Nome ou apelido precisa ter entre 3 e 20 caracteres.').len(3, 20);

    const errors = req.validationErrors();

    if (errors) {
        res.render('index', { errors });

        return;
    }

    io.emit('newUser', { username: data.username });
    io.emit('newMsg', { username: data.username, msg: data.username + ' entrou na sala.' });

    res.render('chat');
};