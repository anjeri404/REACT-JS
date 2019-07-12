import React from 'react';
import './Display.css';
import { Link } from 'react-router-dom';

const Display = (props) => (
    <tr className = "Display" key={props.id}>
                    <td key="id"> {props.id}</td>
                    <td key= "name">{props.name}</td>
                    <td key="email">{props.email} </td>
                    <td key="contact">{props.phone}</td>
                   <td key="1">
                    <Link to={'/view/' + props.id}>   
                            <button style ={{"display": "inline"}}>View </button>
                     </Link>
                        
                  
                        <button onClick = {props.update}> Update </button>
                        <button  onClick = {props.delete}> Delete </button> 
                    </td>
    </tr>
    
            
);
export default Display ;