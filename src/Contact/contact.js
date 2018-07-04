import React from 'react';
import './contact.css';

export default class Contact extends React.Component {
    render () {
        return (
            <div className="box">
                <div className="sectionHead">Contact Us</div>
                <span className="form">
                    <div>
                        <input id="firstname" type="text" name="first_name" className="formInput" placeholder="Please enter your first name *"/>
                    
                        <input id="lastname" type="text" name="last_name" className="formInput" placeholder="Please enter your last name *"/>
                    </div>
                </span>

                <span className="form">
                    <div>
                        <input id="email" type="text" name="email" className="formInput" placeholder="Please enter your email *"/>
                    
                        <input id="phone" type="phone" name="phone" className="formInput" placeholder="Please enter your phone number *"/>
                    </div>
                </span>
                <span className="form">
                    <div>
                        <textarea id="message" name="message" class="formMessage" placeholder="Send us a message *" rows="4"></textarea>
                    </div>
                </span>
                <span className="form">
                    <div>
                        <input type="submit" class="submit" value="Send message"/>
                    </div>
                </span>
            </div>
        )
    }
}