var express = require('express'),
    app = express(),
    cors = require('cors'),
    mongoose = require('mongoose');


mongoose.Promise = require('q').Promise;
mongoose.connect('mongodb://localhost/task_management_system');
var db = mongoose.connection;

db.on('open', function () {
    console.log('Mongoose connected!');
})

db.on('error', function () {
    console.log('Error happened!');
})

app.use(cors({
    origin: 'http://localhost:3000'
}));


app.get('/fetchTasks', function(req, res) {
    console.log('fetching');
    db.collection('tasks').find().toArray(function (err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(docs);
        }
    });
    // res.send([
    //     {
    //         id: 1, 
    //         title: "task1", 
    //         detail: "this is task1",
    //         start: '2018-09-05T13:13:55.008',
    //         end: '2018-09-05T13:13:55.008',
    //         allDay: true
    //     },
    //     {
    //         id: 2, 
    //         title: "task2", 
    //         detail: "this is task2",
    //         start: '2018-09-04T13:13:55-0400',
    //         end: '2018-09-04T13:13:55-0400',
    //         allDay: true
    //     },
    //     {
    //         id: 3, 
    //         title: "task3", 
    //         detail: "this is task3",
    //         start: '2018-09-03T13:13:55-0400',
    //         end: '2018-09-03T13:13:55-0400',
    //         allDay: true
    //     },
    //     {
    //         id: 4, 
    //         title: "task4", 
    //         detail: "this is task4",
    //         start: '2018-09-10T13:13:55-0400',
    //         end: '2018-09-10T13:13:55-0400',
    //         allDay: true
    //     }
    // ]);
})

app.listen('4000', function() {
    console.log('Server running on port 4000!');
})