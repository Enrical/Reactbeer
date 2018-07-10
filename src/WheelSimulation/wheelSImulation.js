import React from 'react';

import SpiderGraph from '../libs/spidergraph/index.js';


export default class WheelSimulation extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            color: null,
            bitterness: null,
            aroma: null,
            hop: null, 
            malt: null,
            fruit: null, 
            smoke: null, 
            sweet: null, 
            sour: null,
        }
    }

    onClick(){
        // this.setState({
        //     color: 
        // })
    }


    render(){
        return(
            <canvas className="wall" id="canvas" width="800" height="600" onClick={this.onClick.bind(this)}>
            </canvas>
            )
        {SpiderGraph.SpiderGraph.init('canvas')}}
    }
