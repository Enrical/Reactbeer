import React from 'react';
import './userlogin.css';

export default class Userlogin extends React.Component {

    render() {
        return (
<div className="box">
    <div class="container">    

        <div class="form">

            <p class="user">User Log In</p>
            <form>
                <div class="form-group">
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" />
                </div>
                <div class="form-group">
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" class="btn singup">SingUp</button>
            </form>
        </div>
    </div>
</div>
        )
    }
}