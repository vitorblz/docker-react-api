const mongoose = require('mongoose');

const schema  = mongoose.Schema({

    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

mongoose.model('User',schema);

//const model = mongoose.model('User');
//const user = {username: 'vitor4', password: '123456789'};
//model.create(user);