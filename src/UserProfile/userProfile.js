import React from 'react';
import './userProfile.css';
import BeerStyle from '../BeerStyle/beerStyle.js';

export default class userProfile extends React.Component {
    render () {
        return (
            <div className="box">
                <div className="info">
                    <div className="pic">

                    </div>
                    <div className="userInfo">
                        Name: <br/>
                        Username: <br/>
                        email: <br/>
                        Password: <br/>
                    </div>
                    <div className="aboutMe">
                        About Me
                    </div>
                </div>
                <BeerStyle />
            </div>
        )
    }
}