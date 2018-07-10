import React from 'react';
import './stylelist.css';
import BeerStyle from '../BeerStyle/beerStyle.js';



export default class StyleList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            styles: []
        }
    }

    componentWillMount() {
        fetch('http://www.cbp-exercises.test/project_test/Final_project/public/api/style')
            .then(response => response.json())
            .then(json => {
                this.setState ({
                    styles: json
                });
            });
    }
    
    render() {
        
        return (
            <div className="box">
                <div className="list">
                    {
                        this.state.styles.map((style, i) => {
                            return (                      
                            <BeerStyle 
                                key={i}
                                name={style.style_name}
                                description={style.description} 
                                />
                            )
                        })
                    }  
                </div>      
            </div>
        )    
    }
}