import React from 'react';
import './userProfile.css';
import BeerStyle from '../BeerStyle/beerStyle.js';

export default class userProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentWillMount() {
        fetch('http://www.cbp-exercises.test/beer/Final_project/public/api/user')
            .then(response => response.json())
            .then(json => {
                this.setState ({
                    users: json
                });
            });
    }


    render () {
        return (
            <div className="box">
                <div className="info">
                    <div className="pic">

                    </div>
                    <div className="userInfo">
                    <div className="name">
                    <h5>Name:</h5>
                    <p>Joe Blow</p>
                    </div>
                    <div className="user_name">
                    <h5>Username:</h5>
                    <p>my_Blow</p>
                    </div>
                    <div className="email">
                    <h5>Email:</h5>
                    <p>Joeblow@gmail.com</p>
                    </div>
                    {/* {
                        this.state.users.map((user, i) => {
                            return(
                                <div>
                                <p>{i}Name={user.first_name}</p>
                               
                                </div>
                               
                            )
                        })
                    } */}
                    </div>

                     <div className="aboutMe">
                    <h5>About me:</h5>
                    <p>              </p>
                     {/* {
                        this.state.users.map((user, i) => {
                            return(
                                <div>
                                <p className={1}>Name={user.about_me}</p>
                                
                                </div>
                               
                            )
                        })
                    } */}
                    </div>
                                    
                </div>
                <BeerStyle />
            </div>
        )
    }
}