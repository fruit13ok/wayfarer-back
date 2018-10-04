var db = require('./models');

var user = [{}];

var cityList = [
    {
        photo: '/images/sanFrancisco.jpg',
        name: 'San Francisco, USA'
    },
    {
        photo: '/images/bangkok.jpg',
        name: 'Bangkok, Thailand'
    },
    {
        photo: '/images/london.jpg',
        name: 'London, UK'
    },
    {
        photo: '/images/paris.jpg',
        name: 'Paris, France'
    },
    {
        photo: '/images/dubai.jpg',
        name: 'Dubai, UAE'
    },
    {
        photo: '/images/newYorkCity.jpg',
        name: 'New York City, USA'
    },
    {
        photo: '/images/tokyo.jpg',
        name: 'Tokyo, Japan'
    },
    {
        photo: '/images/sydney.jpg',
        name: 'Sydney, Australia'
    },
    {
        photo: '/images/seattle.jpg',
        name: 'Seattle, USA'
    },
    {
        photo: '/images/mexicoCity.png',
        name: 'Mexico City, Mexico'
    }
];
var postList = [
    {
        dateCreated: '2018-10-3',
        body: 'I visited San francisco and very loved.',
        title: 'visited San Francisco',
        city: '5bb657d31d995d4415beff23',
        image: '/images/sanFrancicso.jpg'
    }]

var userList = [
    {
        username: 'Yi',
        password: 'password',
        dateJoined: '2018-10-3',
        currentCity: 'San Francisco'
    },
    {
        username: 'Natalie',
        password: 'password',
        dateJoined: '2018-10-3',
        currentCity: 'San Francisco'
    },
    {
        username: 'Sophia',
        password: 'password',
        dateJoined: '2018-10-3',
        currentCity: 'San Francisco'
    },
    {
        username: 'Andrea',
        password: 'password',
        dateJoined: '2018-10-3',
        currentCity: 'San Francisco'
    },
    {
        username: 'Dalton',
        password: 'password',
        dateJoined: '2018-10-3',
        currentCity: 'San Francisco'
    },
    {
        username: 'Justin',
        password: 'password',
        dateJoined: '2018-10-3',
        currentCity: 'San Francisco'
    },
    {
        username: 'Luke',
        password: 'password',
        dateJoined: '2018-10-3',
        currentCity: 'San Francisco'
    },
    {
        username: 'Francisco',
        password: 'password',
        dateJoined: '2018-10-3',
        currentCity: 'San Francisco'
    },
    {
        username: 'Raj',
        password: 'password',
        dateJoined: '2018-10-3',
        currentCity: 'San Francisco'
    },
    {
        username: 'Alan',
        password: 'password',
        dateJoined: '2018-10-3',
        currentCity: 'San Francisco'
    },
    {
        username: 'WaiKa',
        password: 'password',
        dateJoined: '2018-10-3',
        currentCity: 'San Francisco'
    },
    {
        username: 'Gino',
        password: 'password',
        dateJoined: '2018-10-3',
        currentCity: 'San Francisco'
    }
];


db.User.create({
        username: 'Yi',
        password: 'password',
        dateJoined: '2018-10-3',
        currentCity: 'San Francisco'
    }, (err, user) => { 

    console.log(user)
    postList[0].user = user._id
    db.Post.create(postList[0], (err, success) => {
    // db.User.findOne({username: 'Yi'}, (err, users) => {
    if (err){ return console.log("ERROR", err);}
    console.log(success);
    })
})

db.User.create({
    username: 'Andrea',
    password: 'password',
    dateJoined: '2018-10-3',
    currentCity: 'San Francisco'
}, (err, user) => { 

    console.log(user)
    cityList[0].user = user._id
    db.Post.create(postList[0], (err, success) => {
    if (err){ return console.log("ERROR", err);}
    console.log(success);   
    })
})
