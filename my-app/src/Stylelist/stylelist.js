import React from 'react';
import './stylelist.css';
import BeerStyle from '../BeerStyle/beerStyle.js';



export default class StyleList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            style: []
        }
    }

    componentWillMount() {
        fetch('http://www.cbp-exercises.test:8080/final_project/Final_project/public/api/style/category')
            .then(response => response.json())
            .then(json => {
                this.setState ({
                    style: json
                });
            });
    }
    
    render() {
        const style = this.state;
        
        return (
            <div>
                {
                    this.state.style.map(post => {
                        return (                      
                        <BeerStyle 
                            name={style.beer_style}
                            description={style.description} />
                        )
                    })
                }    
            </div>
        )    
    }
}
