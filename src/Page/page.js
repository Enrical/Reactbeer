import React from 'react';
import './page.css';
import Userlogin from '../Userlogin/userlogin';

export default class Page extends React.Component {
    render() {
        return (
            
            <div className="box">
            <Userlogin />
            </div>
        )
    }
}