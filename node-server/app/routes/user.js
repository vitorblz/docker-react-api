const routes = {};

routes.home = function(req, res) {
    res.send('hello world');
};


module.exports = (app) => {
    app.get('/', routes.home);
}