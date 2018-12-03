const express =  require('express');
const consign =  require('consign');

module.exports = () => {
    
    const app = express();

    consign({ cwd: 'app'})
        .include('models')
        .then('routes')
        .into(app);

    return app;
}