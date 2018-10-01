module.exports.newChat = (application, req, res) => {
    const data = req.body;
    
    res.render('chat');
};