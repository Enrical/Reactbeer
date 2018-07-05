import React from 'react';
import './beerStyle.css';

export default class BeerStyle extends React.Component {

    render() {
        const {name, description} = this.props;
        
        return (
            <div className="styleBox">
                <div>{ name }</div>
                <div>{ description }</div>
            </div>
        )
    }
}