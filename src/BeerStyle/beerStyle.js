import React from 'react';
import './beerStyle.css';

export default class BeerStyle extends React.Component {
    render() {
        const {name, description} = this.props;
        
        return (
            <div className="styleBox">
                <div className="pad">
                    <div className="name">{ name }</div>
                    <div className="description">{ description }</div>
                </div>
            </div>
        )
    }
}