import React, { Component } from 'react';
import axios from 'axios';

import AddContact from '../../components/AddContact/AddContact';
import Display from '../../components/Display/Display';

class MainPage extends Component {
    state = {
        users: [],
        id: '',
        name: '',
        email: '',
        phone: '',
        position: null
    }

    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data.slice(0,10);
                const updatedUsers = users.map( user => {
                    return {
                        ...user
                    }
            });
                this.setState({users: updatedUsers});
               // console.log(response);
            } )
    .catch (error => {
        console.log (error);
        this.setstate({error:true});
    });
}
    nameInputHandler = (event) => {
        this.setState({name: event.target.value});
    } 

    emailInputHandler = (event) => {
        this.setState({email: event.target.value});
    }

    contactInputHandler = (event) => {
        this.setState({phone: event.target.value});
    }
 

    postDataHandler = () => {
        if (this.state.name === "" ||
            this.state.email === "" ||
            this.state.phone === "")
        
            {window.alert("Please fill out the name, email and contact");
                return;
        }

        const data ={id: parseInt(this.state.users[this.state.users.length-1].id) +1,
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone}

        axios.post('https://jsonplaceholder.typicode.com/users', data)
            .then (response => {
                console.log(response);
            })
        const users = this.state.users;
        users[this.state.users.length] = data;
        this.setState({users: users});
        this.setState({name: "", email: "", phone: ""})
    }

    deleteDataHandler = (i) => {
            console.log(i);
        axios.delete('https://jsonplaceholder.typicode.com/users/'+ i)
            .then (response => {
                console.log(response);
            })
            const users =this.state.users;
            users.splice(i, 1);
            this.setState({users: users});
    
}

    updateDataHandler = (i, id, name, email, phone) => {
            console.log();
            this.setState({position: i, id: id, name: name, email:email, phone: phone})
            
        }

    updateTableHandler = () => {
            const users = this.state.users;
            const data = {id: this.state.id, 
                        name: this.state.name, 
                        email:this.state.email, 
                        phone: this.state.phone}
            users[this.state.position] = data;
            this.setState({users: users});
            this.setState({name: "", email: "", phone: "", position: null});
        }
    render () {
        let display = [], i=0;

        for(i=0; i<this.state.users.length; i++){
            display.push (<Display 
                id={this.state.users[i].id} 
                name={this.state.users[i].name} 
                email={this.state.users[i].email}
                phone={this.state.users[i].phone} 
                update={this.updateDataHandler.bind(this, i,
                        this.state.users[i].id, 
                        this.state.users[i].name, 
                        this.state.users[i].email, 
                        this.state.users[i].phone)}
                delete={this.deleteDataHandler.bind(this, i)} />
            )
        }
    return (
            <div>
                 <AddContact 
                    nameHandler= {this.nameInputHandler} 
                    emailHandler= {this.emailInputHandler} 
                    contactHandler= {this.contactInputHandler} 
                    name= {this.state.name}
                    email= {this.state.email}
                    phone= {this.state.phone}
                    update={this.updateTableHandler}
                    postData={this.postDataHandler}
                    />
                <table>
                    <tbody>
                        <tr key ={this.props.id}>
                            <th key ="id">#ID</th>
                            <th key = "name">Name</th>
                            <th key = "email">Email</th>
                            <th key = "contact">Contact</th>
                            <th key="a"> </th>
                        </tr>
                        {display}
                    </tbody>
                </table>
            </div>         
               
        );
}
}
export default MainPage;
