import React from 'react';
import './userSignup.css';

export default class UserSignup extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    componentWillMount(){
        fetch('http://www.cbp-exercises.test/beer/Final_project/public/api/user')
        .then(response => response.json())
        .then(json => {
            this.setState({
                users: json
            })
        })
    }
    
    render () {
        console.log(this.state);

        return (
            <div className="box">
                <div className="sectionHead">User Signup</div>

                <div className="formContent">
                    <form method="post" action="http://www.cbp-exercises.test/beer/Final_project/public/api/user">
                    <span className="form">
                        <div>
                            <input id="firstname" type="text" name="first_name" className="formInput" placeholder="Please enter your first name *"/>
                        
                            <input id="lastname" type="text" name="last_name" className="formInput" placeholder="Please enter your last name *"/>
                        </div>
                    </span>

                    <span className="form">
                        <div>
                            <input id="username" type="text" name="username" className="formInput" placeholder="Please choose a username *"/>
                        
                            <input id="password" type="password" name="password" className="formInput" placeholder="Please choose a password *"/>
                        </div>
                    </span>
                    <span className="form">
                        <div>
                            <input id="email" type="email" name="email" className="formInputEmail" placeholder="Please enter your email *"/>
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