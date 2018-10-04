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
        user: '5bb657d31d995d4415beff17',
        title: 'visited San Francisco',
        city: '5bb657d31d995d4415beff23',
        image: '/images/sanFrancicso.jpg'
    },
    // {
    //     dateCreated: '2018-10-3',
    //     body: 'I visited Bangkok and is great.',
    //     user: 'Natalie',
    //     title: 'visited Bangkok',
    //     city: 'Bangkok, Thailand',
    //     image: '/images/bangkok.jpg'
    // },
    // {
    //     dateCreated: '2018-10-3',
    //     body: 'I visited Dubai and is great.',
    //     user: 'Sophia',
    //     title: 'visited Dubai',
    //     city: 'Dubai, UAE',
    //     image: '/images/dubai.jpg'
    // },
    // {
    //     dateCreated: '2018-10-3',
    //     body: 'I visited London and is great.',
    //     user: 'Andrea',
    //     title: 'visited London',
    //     city: 'London, UK',
    //     image: '/images/london.jpg'
    // },
    // {
    //     dateCreated: '2018-10-3',
    //     body: 'I visited Mexico City and is great.',
    //     user: 'Dalton',
    //     title: 'visited Mexico City',
    //     city: 'Mexico City, Mexico',
    //     image: '/images/mexicoCity.jpg'
    // },
    // {
    //     dateCreated: '2018-10-3',
    //     body: 'I visited New York City and have fun.',
    //     user: 'Justin',
    //     title: 'visited New York City',
    //     city: 'New York City, USA',
    //     image: '/images/newYorkCity.jpg'
    // },
    // {
    //     dateCreated: '2018-10-3',
    //     body: 'I visited Paris and have fun.',
    //     user: 'Luke',
    //     title: 'visited Paris',
    //     city: 'Paris, France',
    //     image: '/images/paris.jpg'
    // },
    // {
    //     dateCreated: '2018-10-3',
    //     body: 'I visited Seattle and have fun.',
    //     user: 'Francisco',
    //     title: 'visited Seattle',
    //     city: 'Seattle, USA',
    //     image: '/images/seattle.jpg'
    // },
    // {
    //     dateCreated: '2018-10-3',
    //     body: 'I visited Sydney and have fun.',
    //     user: 'Raj',
    //     title: 'visited Sydney',
    //     city: 'Sydney, Australia',
    //     image: '/images/sydney.jpg'
    // },
    // {
    //     dateCreated: '2018-10-3',
    //     body: 'I visited Tokyo and have fun.',
    //     user: 'Alan',
    //     title: 'visited Tokyo',
    //     city: 'Tokyo, Japan',
    //     image: '/images/tokyo.jpg'
    // },
    // {
    //     dateCreated: '2018-10-3',
    //     body: 'I visited Tokyo and have fun.',
    //     user: 'WaiKa',
    //     title: 'visited Tokyo',
    //     city: 'Tokyo, Japan',
    //     image: '/images/tokyo.jpg'
    // },
    // {
    //     dateCreated: '2018-10-3',
    //     body: 'I visited Tokyo and have fun.',
    //     user: 'Gino',
    //     title: 'visited Tokyo',
    //     city: 'Tokyo, Japan',
    //     image: '/images/tokyo.jpg'
    // }
];
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



// db.User.remove({}, (err, users) => {
//     db.User.create(userList, (err, users) => {
//         if (err) return console.log("ERROR", err);
//         console.log("All users: ", users);
//         console.log("Created ", users.length, "users");
//     });
// });

// db.City.remove({}, (err, cities) => {
//     db.City.create(cityList, (err, cities) => {
//         if (err) return console.log("ERROR", err);
//         console.log("All cities: ", cities);
//         console.log("Created ", cities.length, "cities");
//     });
// });

// db.Post.remove({}, (err, posts) => {
//     db.Post.create(postList, (err, posts) => {
//         if (err) {
//         return console.log("ERROR", err);
//         }
//         console.log("All posts: ", posts);
//         console.log("Created ", posts.length, "posts");
//         process.exit();
//     });
// });

db.User.findById('Yi', (err, users) => {
// db.User.findOne({username: 'Yi'}, (err, users) => {
    if (err) return console.log("ERROR", err);
    console.log("Yi: ", users._id);
});