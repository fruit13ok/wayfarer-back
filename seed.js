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
    }
    // ,
    // {
    //     photo: '/images/paris.jpg',
    //     name: 'Paris, France'
    // },
    // {
    //     photo: '/images/dubai.jpg',
    //     name: 'Dubai, UAE'
    // },
    // {
    //     photo: '/images/newYorkCity.jpg',
    //     name: 'New York City, USA'
    // },
    // {
    //     photo: '/images/tokyo.jpg',
    //     name: 'Tokyo, Japan'
    // },
    // {
    //     photo: '/images/sydney.jpg',
    //     name: 'Sydney, Australia'
    // },
    // {
    //     photo: '/images/seattle.jpg',
    //     name: 'Seattle, USA'
    // },
    // {
    //     photo: '/images/mexicoCity.png',
    //     name: 'Mexico City, Mexico'
    // }
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
     }
    //,
    // {
    //     username: 'Andrea',
    //     password: 'password',
    //     dateJoined: '2018-10-3',
    //     currentCity: 'San Francisco'
    // },
    // {
    //     username: 'Dalton',
    //     password: 'password',
    //     dateJoined: '2018-10-3',
    //     currentCity: 'San Francisco'
    // },
    // {
    //     username: 'Justin',
    //     password: 'password',
    //     dateJoined: '2018-10-3',
    //     currentCity: 'San Francisco'
    // },
    // {
    //     username: 'Luke',
    //     password: 'password',
    //     dateJoined: '2018-10-3',
    //     currentCity: 'San Francisco'
    // },
    // {
    //     username: 'Francisco',
    //     password: 'password',
    //     dateJoined: '2018-10-3',
    //     currentCity: 'San Francisco'
    // },
    // {
    //     username: 'Raj',
    //     password: 'password',
    //     dateJoined: '2018-10-3',
    //     currentCity: 'San Francisco'
    // },
    // {
    //     username: 'Alan',
    //     password: 'password',
    //     dateJoined: '2018-10-3',
    //     currentCity: 'San Francisco'
    // },
    // {
    //     username: 'WaiKa',
    //     password: 'password',
    //     dateJoined: '2018-10-3',
    //     currentCity: 'San Francisco'
    // },
    // {
    //     username: 'Gino',
    //     password: 'password',
    //     dateJoined: '2018-10-3',
    //     currentCity: 'San Francisco'
    // }
];


// db.User.create({
//         username: 'Yi',
//         password: 'password',
//         dateJoined: '2018-10-3',
//         currentCity: 'San Francisco'
//     }, (err, user) => { 

//     console.log(user)
//     postList[0].user = user._id
//     db.Post.create(postList[0], (err, success) => {
//     // db.User.findOne({username: 'Yi'}, (err, users) => {
//     if (err){ return console.log("ERROR", err);}
//     console.log(success);
//     })
// })

// db.User.create({
//     username: 'Andrea',
//     password: 'password',
//     dateJoined: '2018-10-3',
//     currentCity: 'San Francisco'
// }, (err, user) => { 

//     console.log(user)
//     cityList[0].user = user._id
//     db.Post.create(postList[0], (err, success) => {
//     if (err){ return console.log("ERROR", err);}
//     console.log(success);   
//     })
// })

//////////////////////////////////////////////////////////////////////

var initVar = () => {
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
            dateJoined: '2018-10-4',
            currentCity: 'San Francisco'
        }
    ];
    var cityList = [
        {
            photo: '/images/sanFrancisco.jpg',
            name: 'San Francisco, USA'
        },
        {
            photo: '/images/bangkok.jpg',
            name: 'Bangkok, Thailand'
        }
    ];
    var postList = [
        {
            dateCreated: '2018-10-3',
            body: 'I visited San francisco and very loved.',
            title: 'visited San Francisco'
        },
        {
            dateCreated: '2018-10-4',
            body: 'I visited Bangkok and very good.',
            title: 'visited Bangkok'
        }
    ]
}

var seedIt = () =>{
    console.log(postList[0].dateCreated);
    for (var i=0; i<2; i++){
        // console.log(userList[i].username);
        // console.log(cityList[i].photo);
        // console.log('i: ', i, 'date: ',postList[i].dateCreated);
        console.log('i: ', i);
    }

    db.User.remove( {} , (err,res) => {
        if (err) {
            console.log('error', err);
        }
        else {
            console.log('All user removed!',res);
            for (var i=0; i<2; i++){
                console.log(userList[i]);
                console.log(cityList[i]);
                console.log(postList[i]);
                
                db.User.create({
                    username: userList[i].username,
                    password: userList[i].password,
                    dateJoined: userList[i].dateJoined,
                    currentCity: userList[i].currentCity
                }, (err, createdUser) => { 
                    if(err){console.log(err);}
                    console.log('createdUser: ', createdUser)
                    if(createdUser){
                        db.City.create({
                            photo: cityList[i].photo,
                            name: cityList[i].name,
                        }, (err, createdCity) => { 
                            if(err){console.log(err);}
                            console.log('createdCity: ', createdCity)
                            if(createdCity){
                                db.Post.create({
                                    dateCreated: postList[i].dateCreated,
                                    body: postList[i].body,
                                    user: createdUser._id,
                                    title: postList[i].title,
                                    city: createdCity._id
                                }, (err, createdPost) => { 
                                    if(err){console.log(err);}
                                    console.log('createdPost: ', createdPost)
                                    process.exit();
                                })
                            }
                        })
                    }
                })
            }
        }
    });
}

// initVar();
// setTimeout(() => {
//     seedIt();
// },1000)

//////////////////////////////////////////////////////////////////////

db.User.remove( {} , (err,res) => {
    if (err) {console.log('error', err);return;}
    else {console.log('All user removed!',res);}
});
db.City.remove( {} , (err,res) => {
    if (err) {console.log('error', err);return;}
    else {console.log('All city removed!',res);}
});
db.Post.remove( {} , (err,res) => {
    if (err) {console.log('error', err);return;}
    else {console.log('All post removed!',res);}
});
        
db.User.create({
    username: 'Yi',
    password: 'password',
    dateJoined: '2018-10-3',
    currentCity: 'San Francisco'
}, (err, createdUser) => { 
    if(err){console.log(err);}
    console.log('createdUser: ', createdUser)
    db.City.create({
        photo: 'https://i.imgur.com/cSrM2Th.jpg',
        name: 'San Francisco',
    }, (err, createdCity) => { 
        if(err){console.log(err);}
        console.log('createdCity: ', createdCity)
        db.Post.create({
            dateCreated: '2018-10-3',
            body: 'I visited San francisco and very loved.',
            user: createdUser._id,
            title: 'visited San Francisco',
            city: createdCity._id
        }, (err, createdPost) => { 
            if(err){console.log(err);}
            console.log('createdPost: ', createdPost)
        })
    })
})
db.User.create({
    username: 'Natalie',
    password: 'password',
    dateJoined: '2018-10-4',
    currentCity: 'San Francisco'
}, (err, createdUser) => { 
    if(err){console.log(err);}
    // console.log('createdUser: ', createdUser)
    db.City.create({
        photo: 'https://i.imgur.com/13pCZDI.jpg',
        name: 'Bangkok',
    }, (err, createdCity) => { 
        if(err){console.log(err);}
        console.log('createdUser: ', createdUser)
        console.log('createdCity: ', createdCity)
        db.Post.create({
            dateCreated: '2018-10-4',
            body: 'I visited Bangkok and very good.',
            user: createdUser._id,
            title: 'visited Bangkok',
            city: createdCity._id
        }, (err, createdPost) => { 
            if(err){console.log(err);}
            console.log('createdPost: ', createdPost)
            process.exit();
        })
    })
})