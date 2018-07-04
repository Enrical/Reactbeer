import React from 'react';
import './App.css';
import Header from './Header/header.js';
import Page from './Page/page.js';

export default class App extends React.Component {
    render() {
        return (
        <div>
            <Header />
            <Page />
        </div>
        )
    }
}