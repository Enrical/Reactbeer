import React from 'react';
import './header.css';

export default class Header extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">

                    <div className="pos-f-t mr-auto" id="menu">
                        <div className="collapse" id="navbarToggleExternalContent">
                            <div className="bg p-4">
                                <ul className="nav navbar-nav">
                                    <li className="active">
                                        <a href="">Home</a>
                                    </li>
                                    <li className="dropdown">
                                        <a href=""> browse beers
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <nav className="navbar navbar-left navbar-dark bg text-warning">
                            <button className="navbar-toggler bg" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                <img className="ok bg"  src="http://pngimg.com/uploads/beer/beer_PNG2376.png"></img>
                                {/* <span className="navbar-toggler-icon"></span> */}
                            </button>
                        </nav>
                        {/* <div className="navbar navbar-left navbar-dark bg title">
                            <p>BEER FLAVOUR</p>
                        </div> */}
                        
                        <ul className="nav navbar-nav navbar-right"  id="singup">
                            <li>
                                <a href=""><span className="glyphicon glyphicon-user"></span> Sign Up</a>
                            </li>
                            <li>
                                <a href=""><span className="glyphicon glyphicon-log-in"></span> Login</a>
                            </li>
                        </ul>

                    </div>
            
                </div>
            </nav>
    
        )  
    }
}
