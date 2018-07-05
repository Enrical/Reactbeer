import React from 'react';


export default class WheelSimulatio extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    componentWillMount(){
        fetch('http://www.cbp-exercises.test/Final_project/public/api/attribute')
        .then(response => response.json())
        .then(json => {
            this.setState({
                posts: json
            })
        })
    }

    render(){
         console.log(this.state);
        return(
            <div className="wall">
            
            {  

                this.state.posts.map(post => {
                    return (
                        <form method="POST" action="http://www.cbp-exercises.test/project_test/Final_project/public/api/search">
                           <label>{post.attribute_name} </label>
                            <input type="text" />
                      
                      </form>

                    )
                }
        )}
            </div>
        )}
}
