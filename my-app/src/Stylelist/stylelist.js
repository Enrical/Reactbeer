import React from 'react';
import './stylelist.css';
import BeerStyle from '../BeerStyle/beerStyle.js';



export default class StyleList extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            styles : []
        }
    }

    // componentDidMount() {
    //     fetch('http://www.cbp-exercises.test/beer/Final_project/public/api/style')
    //         .then(response => response.json())
    //         .then(json => {
    //             this.setState({
    //             styles: json.styles
    //         })
    //     },);
    // }

    render() {

        const {styles} = this.state;
        console.log(styles);

        return (            
            <div className="box">
                {
                    this.state.style.map((style, i) => {
                        return (
                            <BeerStyle key={i} name={style.style_name} description={style.description} />
                        )
                    })
                }
            </div>
        );
    }
}