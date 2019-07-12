import React from 'react';
import './AddContact.css';

const AddContact = (props) => {
    return (
      
            <div className= "AddContact">
                <label> <strong> Name </strong> </label><br/>
                <input 
                    id="name" type= "text" placeholder= "Text Input"  
                    value= {props.name} onChange = {props.nameHandler} /><br/>
                <label> <strong> Email</strong> </label><br/>
                    <input 
                        id="email" type= "text" placeholder= "Text Input" 
                        value= {props.email} onChange = {props.emailHandler} /><br/>
                <label> <strong> Contact </strong> </label><br/>
                    <input 
                        id="contact" type= "text" placeholder= "Text Input" 
                        value= {props.phone}  onChange = {props.contactHandler}/><br/>
                
                <button onClick = {props.postData}> Add</button> 
                <button onClick = {props.update}> Update </button>
            </div>
            
    );
}

export default AddContact;