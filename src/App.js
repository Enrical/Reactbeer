import React from 'react';
import './App.css';
import Header from './Header/header.js';
import Page from './Page/page.js';
import Stylelist from './Stylelist/stylelist.js';
import UserProfile from './UserProfile/userProfile.js';
import Contact from './Contact/contact.js';
import UserSignup from './UserSignup/userSignup.js';

export default class App extends React.Component {
    render() {
        return (
        <div>
            <Header />
            {/* <Page /> */}
            <Stylelist />
            {/* <UserProfile /> */}
            {/* <Contact /> */}
            {/* <UserSignup /> */}
        </div>
        )
    }
}