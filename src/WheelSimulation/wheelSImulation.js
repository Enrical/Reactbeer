import React from 'react';
// import './wheelstyle.css';
import SpiderGraph from '../libs/spidergraph/index.js';
import BeerStyle from '../BeerStyle/beerstyle.js';
import StyleList from '../Stylelist/stylelist.js';


export default class WheelSimulation extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            alcohol: null,
            color: null,
            biterness: null,
            aroma: null,
            hop: null, 
            malt: null,
            data:[]
            // fruitiness: null, 
            // smokiness: null, 
            // sweetness: null, 
            // sourness: null,
        }
        
          this.handleSubmit = this.handleSubmit.bind(this);
          this.displaydata = this.displaydata.bind(this);
    }

    componentDidMount()
    {
        SpiderGraph.init('canvas'); 
        SpiderGraph.component = this;
    }

    handleSubmit(e) {
        //preventDefault prevents page reload   
        e.preventDefault();
        // this.props.onSearch(this.state.searchText);
        /*A call back to the onAdd props. The current
            *state is passed as a param
            */
        this.props.onClick(this.state);
    }

    onClick(e){
        let input = SpiderGraph.instance.canvasClicked(e);
        console.log(input);
        let state = Object.assign({}, this.state);
        state[input.layer] = input.level;
        this.setState(state);
        console.log(this.state);

        fetch( 'http://www.cbp-exercises.test/beer/Final_project/public/api/search', {
              method:'post',
              /* headers are important*/
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              /*EROR: user is not defined*/
              body: JSON.stringify(state)
          })
          .then(response => {
              return response.json();
          })
          .then((data) =>{
            console.log(data)
            this.setState({data: data})
          });
    }

    displaydata(){
        console.log(this.state.data);
        this.setState({showWheel: false});
        // this.state.styles.map((style, i) => {
        //     return(
        //         <StyleList 
        //         key={i.category_id}
        //         name={style.style_name}
        //         description={style.description} 
        //         />
        //     )   
        // })
    }



    render(){
        // console.log(SpiderGraph)
        return(
            <div className="box">
                <canvas className="wall" id="canvas" width="800" height="600" >
                </canvas>
                <button onClick={this.displaydata}>BEER
                {/* <BeerStyle 
                                key={i}
                                name={style.style_name}
                                description={style.description} 
                                /> */}
                                </button>
                <StyleList data={this.state.data} />
            </div>
        )
    }
}

export class ListStyle extends React.Component{
constructor(props) {
    super(props);

    this.state = {
        styles: {},
        showWheel: true
    }
    // this.handleAddStyle = this.handleAddStyle.blind(this);
}

    // handleAddStyle(style){
    //     console.log(style);
    //     var style = {}

    //     this.props.onAdd(this.state.style);
    // }



    displaydata(){
        console.log(this.state.beerData);
        this.setState({showWheel: false});
        // this.state.styles.map((style, i) => {
        //     return(
        //         <StyleList 
        //         key={i.category_id}
        //         name={style.style_name}
        //         description={style.description} 
        //         />
        //     )   
        // })
    }

    // componentWillMount() {
    //     fetch('http://www.cbp-exercises.test/beer/Final_project/public/api/search', {
    //     method: 'get',
    //     dataType: "JSON",
    //     headers: {
    //       "Content-Type": "application/json; charset=utf-8",
    //     }})
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState ({
    //                 styles: data.style
    //             });
    //         // .then(response => {
    //         //     return response.json();
    //         // })
    //         });
    // }

    render() {
        return(
            <div className="box">
            {this.state.showWheel && <WheelSimulation />}
            <button onClick={this.displaydata}>BEER
            </button>
            {!this.state.showWheel && <StyleList />}
            <div className="list">
            {console.log(data.style)}
            {/* {
                        this.state.styles.map((style, i) => {
                            return(
                                <StyleList 
                                key={i.category_id}
                                name={style.style_name}
                                description={style.description} 
                                />
                            )   
                        })
                    } */}
            </div>
            </div>
        )

    }
}

    // export default class WheelSimulation extends React.Component {

    //     constructor(props){
    //         super(props);
    //         this.state = {
    //             color: 0,
    //             bitterness: null,
    //             aroma: null,
    //             hop: null, 
    //             malt: null,
    //             fruit: null, 
    //             smoke: null, 
    //             sweet: null, 
    //             sour: null,
    //         }
    //       this.handleSubmit = this.handleSubmit.bind(this);
    //       this.handleInput = this.handleInput.bind(this);
    //     }
        
        
    //     handleInput(key, e) {
    //         console.log(key)
    //        /*Duplicating and updating the state */
    //        var state = Object.assign({}, this.state.circle); 
    //        state[key] = e.target.value;
    //        this.setState({ circle: state });
    //      }
    //         componentDidMount() {
    //         }
    
    //     handleSubmit(e) {
    //         //preventDefault prevents page reload   
    //         e.preventDefault();
    //         /*A call back to the onAdd props. The current
    //          *state is passed as a param
    //          */
    //         this.props.onClick(this.state);
    //       }
    
    //     onClick(state) {
    //         console.log(this.state);
    //       var attributedata = {
    //         color: state.color,
    //         bitterness: state.bitterness,
    //         aroma: state.aroma,
    //         hop: state.hop, 
    //         malt: state.malt,
    //         fruit: state.fruit, 
    //         smoke: state.smoke, 
    //         sweet: state.sweet, 
    //         sour: state.sour,
    //       };
    
    //       /*Fetch API for post request */
    //       fetch( 'http://www.cbp-exercises.test/beer/Final_project/public/api/search', {
    //           method:'post',
    //           /* headers are important*/
    //           headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //           },
    //           /*EROR: user is not defined*/
    //           body: JSON.stringify(attributedata)
    //       })
    //       .then(response => {
    //           return response.json();
    //       })
    //       .then(function(data){ 
    //           console.log(data)
    //       });
    //       //update the state of attribute
    //   }
    
    //     render(){
    //         return(
    //             <canvas className="wall" id="canvas" width="800" height="600" onClick={
    //             (e)=>this.handleInput('', e)+
    //             this.onClick.bind(this)}>
    //             </canvas>
    //             )
    //         {SpiderGraph.SpiderGraph.init('canvas')}}
    //     }