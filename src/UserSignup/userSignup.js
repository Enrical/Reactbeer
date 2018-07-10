import React from 'react';
import './userSignup.css';


class AddUser extends React.Component {
 
    constructor(props) {
      super(props);
         this.state = {
            user: {
                user_name: '',
                first_name: '',
                last_name: '',
                email: '',
                password: '',
            }
        }
       
      //Boilerplate code for binding methods with `this`
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInput = this.handleInput.bind(this);
    }
     
    /* This method dynamically accepts inputs and stores it in the state */
    handleInput(key, e) {
       console.log(key)
      /*Duplicating and updating the state */
      var state = Object.assign({}, this.state.user); 
      state[key] = e.target.value;
      this.setState({user: state });
    }
   
   
    /* This method is invoked when submit button is pressed */
    handleSubmit(e) {
      //preventDefault prevents page reload   
      e.preventDefault();
      /*A call back to the onAdd props. The current
       *state is passed as a param
       */
      this.props.onAdd(this.state.user);
    }
   
    render() {
       
        return(
            <div className="box">
                <div className="sectionHead">User Signup</div>
                    <div className="formContent">
                        <form method="POST" action="http://www.cbp-exercises.test/beer/Final_project/public/api/user" onSubmit={this.handleSubmit}>
                            
                            <span className="form">
                                <div>
                                    <input id="first_name" type="text" name="first_name" className="formInput" placeholder="Please enter your first name *" onChange={(e)=>this.handleInput('first_name',e)}>{this.props.first_name}</input>
                                    
                                    <input id="last_name" type="text" name="last_name" className="formInput" placeholder="Please enter your last name *" onChange={(e)=>this.handleInput('last_name',e)}>{this.props.last_name}</input>
                                </div>
                            </span>

                            <span className="form">
                                <div>
                                    <input id="user_name" type="text" name="user_name" className="formInput" placeholder="Please choose a username *" onChange={(e)=>this.handleInput('user_name',e)}>{this.props.user_name}</input>

                                    <input id="password" type="password" name="password" className="formInput" placeholder="Please choose a password *" onChange={(e)=>this.handleInput('password',e)}>{this.props.password}</input>
                                </div>
                            </span>
                        
                            <span className="form">
                                <div>
                                    <input id="email" type="email" name="email" className="formInputEmail" placeholder="Please enter your email *" onChange={(e)=>this.handleInput('email',e)}>{this.props.email}</input>
                                </div>
                            </span>

                            <span className="form">
                                <div>
                                    <input type="submit" class="submit" value="submit"/>
                                </div>
                            </span>
                        </form>
                    </div>
                </div>
        )
    }
}


export default class UserSignup extends React.Component {
    
    constructor(){
        super();
        this.state = {
            user: {}
        }   
    }

    componentDidMount() {
        /* fetch API in action */
        // fetch('http://www.cbp-exercises.test/beer/Final_project/public/api/user')
        //     .then(response => {
        //         return response.json();
        //     })
        //     .then(users => {
        //         console.log(users)
        //         //Fetched product is stored in the state
        //         this.setState({ users });
        //     });
      }
            
      handleAddUser(user) {
          console.log(this.state);
        var userdata = {
            user_name: user.user_name,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: user.password,
        };

        /*Fetch API for post request */
        fetch( 'http://www.cbp-exercises.test/beer/Final_project/public/api/user', {
            method:'post',
            /* headers are important*/
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            /*EROR: user is not defined*/
            body: JSON.stringify(userdata)
        })
        .then(response => {
            return response.json();
        })
        .then(function(data){ 
            console.log(data)
        });

 //update the state of users
  }  

  render(){
        return(
            <AddUser onAdd={this.handleAddUser.bind(this)} /> 
        )
    }
}