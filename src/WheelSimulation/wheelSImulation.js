import React from 'react';

import SpiderGraph from '../libs/spidergraph/index.js';


export default class WheelSimulation extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            color: 0,
            bitterness: null,
            aroma: null,
            hop: null, 
            malt: null,
            fruit: null, 
            smoke: null, 
            sweet: null, 
            sour: null,
        }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInput = this.handleInput.bind(this);
    }
    
    
    handleInput(key, e) {
        console.log(key)
       /*Duplicating and updating the state */
       var state = Object.assign({}, this.state.circle); 
       state[key] = e.target.value;
       this.setState({ circle: state });
     }
        componentDidMount() {
        }

    handleSubmit(e) {
        //preventDefault prevents page reload   
        e.preventDefault();
        /*A call back to the onAdd props. The current
         *state is passed as a param
         */
        this.props.onClick(this.state);
      }

    onClick(state) {
        console.log(this.state);
      var attributedata = {
        color: state.color,
        bitterness: state.bitterness,
        aroma: state.aroma,
        hop: state.hop, 
        malt: state.malt,
        fruit: state.fruit, 
        smoke: state.smoke, 
        sweet: state.sweet, 
        sour: state.sour,
      };

      /*Fetch API for post request */
      fetch( 'http://www.cbp-exercises.test/beer/Final_project/public/api/search', {
          method:'post',
          /* headers are important*/
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          /*EROR: user is not defined*/
          body: JSON.stringify(attributedata)
      })
      .then(response => {
          return response.json();
      })
      .then(function(data){ 
          console.log(data)
      });
      //update the state of attribute
  }

    render(){
        return(
            <canvas className="wall" id="canvas" width="800" height="600" onClick={
            (e)=>this.handleInput('', e)+
            this.onClick.bind(this)}>
            </canvas>
            )
        {SpiderGraph.SpiderGraph.init('canvas')}}
    }
