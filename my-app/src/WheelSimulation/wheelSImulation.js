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

    componentDidMount()
    {
        SpiderGraph.init('canvas'); 
        SpiderGraph.component = this;
    }

    onClick(e){
        let input = SpiderGraph.instance.canvasClicked(e);
        console.log(input);
        let state = Object.assign({}, this.state);
        state[input.layer] = input.level;
        this.setState(state);
        console.log(this.state);
    }


    render(){
        console.log(SpiderGraph)
        return(
            <canvas className="wall" id="canvas" width="800" height="600" >
            </canvas>
            )
    }
    }
