'use-strict';

module.exports = function(app){
    var todolist = require('./controller');

    app.route('/')
    .get(todolist.index);
};