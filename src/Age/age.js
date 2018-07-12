import React from 'react';
import AgeVerified from '../libs/Agevalidation/jquery.agecheck';
import './agecheck.css';


export default class Age extends React.Component{


    render(){
        return(
            <body>
            <script src="../libs/Agevalidation/jquery.agecheck.js"></script>
            </body>

            )
            // {AgeVerified.AgeVerified.init('')}
        
        }
}