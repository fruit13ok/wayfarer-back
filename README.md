# Project Wayfarer
##### by: Andrea Piazza, Natalie Poulson, Sofia Aguirre, Yi Liu
## Project Wayfarer is for users to share tips about their favorite locations around the world.

## Technologies Used
- __Express__ Build backend routing.
- __React__ Build frontend, use state and props to pass data.
- __react-router-dom__ Build backend routes and links.
- __Axios__ Make request from frontend to backend, and to browser header.
- __MongoDB__ Persist 3 models to a Mongo Database. Use one one-to-many relationship between models with reference data.
- __Git__ There are 2 repo.
[wayfarer-front](https://github.com/sofia-aguirre/wayfarer-front)
[wayfarer-back](https://github.com/sofia-aguirre/wayfarer-back)
- __Trello__ Task planing.
- __Code Style__ Using SaSS.
- __Visual Design__ Use Flexbox, react-responsive-carousel.
- __Authentication frontend__ Use axios to send headers authorization bearer localStorage token to backend to verify.
- __Authentication backend__ Use jwt-simple to create token in the backend, use jsonwebtoken to verify token pass from frontend which store in localstorage.
- __react-modal__ Create modal for form.

## Sprint 1: Basic Auth & Profiles
- splash page.
- Signup.
- Login.
- Logout.
- Header nav bar.
- Authentication.
- Frontend access backend public images.
- Get frontend profile user data use axios post reuest to bacjend verify token, then send another axios get request (which currently require type in loged in user name in url) to query from backend's route.
- Seeded the database.

## Missed Features
- Redirect after login.
- Do post.

## Work flows
1)
Download wireframes and user Stories Sprint 1: Basic Auth & Profiles
Ask the client question.
Create 2 Github repo and Trello board.
Plan ERD data models.
Delegate tasks and set mile stone.

2)
Start pair programming. 2 for the backend, 2 for the frontend (mix and swap).
Frontend create static web, break down React components.
Backend start with models, seed data, then routes.
Reacher modal.

3)
Frontend create signup / login, header, nav, modal form.
Backend start auth.

4)
Frontend create styling, profile page, city page, model form, nav, route / link.

5)
Encounter Git issue, and break fetures.
Backend start bcrypt, fix seed.

6)
Encounter passing up login state and user data, redirect.
Backend eidt payload in token, verify token.

## Code Snippets

#### NavBar view changing when logged in status switches after signup (or login):

App.js Componenet...
```
class App extends Component {
  constructor () {
    super()

    this.state = {
      isLoggedIn:false
    }
  }

componentDidMount () {  
  this.authfunc()
}

authfunc = () => {
  if (localStorage.token ){
    this.setState({
      isLoggedIn: true,
    })
  }
  else {
    this.setState({
      isLoggedIn:false
    })
  } 
}

  render() {
    return (
      <div className="App">
        <Header authfunc={this.authfunc} isLoggedIn={this.state.isLoggedIn}/>
        <Main isLoggedIn={this.state.isLoggedIn}/>
        <Footer />
      </div>
    );
  }
}
```

LoginModalContainer.js componenet....
```
  handleSignUp = (event) => {
    console.log('username: ',this.state.username);
    console.log('password: ',this.state.password);
    console.log('currentCity: ',this.state.currentCity);
    event.preventDefault();
      axios.post('http://localhost:3001/users/signup',
        {
          username: this.state.username,
          password: this.state.password,
          currentCity: this.state.currentCity
        } )
        .then(response => {
          localStorage.token=response.data.token
          this.props.authfunc()
        })
        .catch(err => console.log(err))
  }
```

Nav.js component....
```
class Nav extends Component {
    render() {
        let navBarItems = []
        if(this.props.isLoggedIn) {
            navBarItems.push(<li ><Link to="/cities"> Cities </Link></li>)
            navBarItems.push(<li><Link to="/profile/:name"> Profile </Link></li>)
            navBarItems.push(<li><a href="/" onClick={this.props.handleLogOut}> Log Out </a></li>)
            navBarItems.push(<form id='myForm'>
                                <input type="search" placeholder="Search ..."/>
                                <button onClick=""><i class="fas fa-search"></i></button>
                            </form>)
        }
        else {
            navBarItems.push( <LoginModalContainer authfunc={this.props.authfunc} isLoggedIn={this.props.isLoggedIn}/>)
        }
        return (
            <nav id="header-nav">
                <ul>
                {navBarItems}
                </ul>
            </nav>
        );
    }
}
```
#### Accessing which user is logged in based on local storage token, verification of token, and accessing payload information:

In Profiles.js component...
```
class Profiles extends Component {
    constructor(){
        super()
        this.state = {
        user: {},
        }
    }

    componentDidMount = () =>{
    
        var config = {
            headers: {'Authorization': "bearer " + localStorage.token}
        };
    
        var bodyParameters = {
            key: config.jwtSecret
        }
    
        axios.post( 
            'http://localhost:3001/users/verify',
            bodyParameters,
            config
        ).then((response) => {
            const userId = response.data.id
            const user = response.data.username

        }).catch((error) => {
            console.log("AXIOS ERROR:",error)
        });
```

In UserControllers.js (backend)...
```
router.post ('/verify',verifyToken, (req,res) => {
  let verified= jwt1.verify(req.token, config.jwtSecret)
  console.log("verified: ", verified)
  res.json(verified)
})

function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if(typeof bearerHeader !== 'undefined'){
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}
```
