import React from 'react';
import './userSignup.css';

export default class UserSignup extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            user_name: '',
            first_name: '',
            last_name: '',
            email: '',
            password: '',
        }
    }

    componentDidMount(){
        fetch('http://www.cbp-exercises.test/beer/Final_project/public/api/user', {
        method: 'POST',            
        headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                user_name: '',
                first_name: '',
                last_name: '',
                email: '',
                password: '',
              })
        })
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         users: json
        //     })
        // })
    }
    
    render () {
        console.log(this.state);

        return (
            <div className="box">
                <div className="sectionHead">User Signup</div>

                <div className="formContent">
                    <form method="POST" action="http://www.cbp-exercises.test/beer/Final_project/public/api/user">
                    <span className="form">
                        <div>
                            <input id="firstname" type="text" name="first_name" className="formInput" placeholder="Please enter your first name *">{this.props.first_name}</input>
                        
                            <input id="lastname" type="text" name="last_name" className="formInput" placeholder="Please enter your last name *">{this.props.last_name}</input>
                        </div>
                    </span>

                    <span className="form">
                        <div>
                            <input id="username" type="text" name="user_name" className="formInput" placeholder="Please choose a username *">{this.props.user_name}</input>
                        
                            <input id="password" type="text" name="password" className="formInput" placeholder="Please choose a password *">{this.props.password}</input>
                        </div>
                    </span>
                    <span className="form">
                        <div>
                            <input id="email" type="email" name="email" className="formInputEmail" placeholder="Please enter your email *">{this.props.email}</input>
                        </div>
                    </span>
                    
                    <span className="form">
                        <div>
                            <input type="submit" class="submit" value="signup"/>
                        </div>
                    </span>
                    </form>
                </div>
            </div>
        )
    }
}