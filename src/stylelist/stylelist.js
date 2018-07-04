import React from 'react';
import './stylelist.css';
import BeerStyle from '../BeerStyle/beerStyle.js';



export default class StyleList extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            styles : [
                {
                    name: 'Style 1',
                    description : 'description1'
                },
                {
                    name: 'Style 2',
                    description : 'description 2'
                },
                {
                    name: 'Style 3',
                    description : 'description 3'
                },
                {
                    name: 'Style 4',
                    description : 'description 4'
                },
                {
                    name: 'Style 5',
                    description : 'description 5'
                }

            ]
        }
    }

    render() {
        const {styles} = this.state;
        console.log(styles);

        return (
            <div className="box">
            <div className="list">
                {
                    styles.map((style, i) => {
                        return (
                            <BeerStyle key={i} name={style.name} description={style.description} />
                        )
                    })
                }
            </div>
            </div>
        );
    }
}