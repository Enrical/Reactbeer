import React from 'react';
import './header.css';

export default class Header extends React.Component {

    render() {
        return (
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">

                    <div class="pos-f-t mr-auto" id="menu">
                        <div class="collapse" id="navbarToggleExternalContent">
                            <div class="bg p-4">
                                <ul class="nav navbar-nav">
                                    <li class="active">
                                        <a href="">Home</a>
                                    </li>
                                    <li class="dropdown">
                                        <a href=""> browse beers
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <nav class="navbar navbar-left navbar-dark bg text-warning">
                            <button class="navbar-toggler bg" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                <img class="ok bg"  src="http://pngimg.com/uploads/beer/beer_PNG2376.png"></img>
                                {/* <span class="navbar-toggler-icon"></span> */}
                            </button>
                        </nav>
                        {/* <div class="navbar navbar-left navbar-dark bg title">
                            <p>BEER FLAVOUR</p>
                        </div> */}
                        
                        <ul class="nav navbar-nav navbar-right"  id="singup">
                            <li>
                                <a href=""><span class="glyphicon glyphicon-user"></span> Sign Up</a>
                            </li>
                            <li>
                                <a href=""><span class="glyphicon glyphicon-log-in"></span> Login</a>
                            </li>
                        </ul>

                    </div>
            
                </div>
            </nav>
    
        )  
    }
}
