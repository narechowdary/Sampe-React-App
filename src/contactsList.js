import React, { Component } from 'react';
import './contacts.css'
export default class ContactsList extends Component {
	constructor() {
		super();
		this.state = {
			contactsList: [
			{
				name: 'John',
				gender: 'Male',
				age: 30
			}
			],
			showAddContact: false,
			showEditContact: false,
			contact: {
				name: '',
				age: '',
				gender: ''
			}
		}
		this.handleChange 			= this.handleChange.bind(this);
		this.addContact 			= this.addContact.bind(this);
		this.removeItem 			= this.removeItem.bind(this);
		this.editItem 				= this.editItem.bind(this);
		this.showItem 				= this.showItem.bind(this);
		this.toggleEditContact  	= this.toggleEditContact.bind(this);
		this.updateContact 			= this.updateContact.bind(this);
		this.toggleContact 			= this.toggleContact.bind(this);
	}
	toggleContact() {
		this.setState({
			showAddContact: !this.state.showAddContact
		})
	}
	toggleEditContact() {
		this.setState({
			showEditContact: !this.state.showEditContact
		})
	}
	handleChange(e) {
		const contact = this.state.contact;

		this.setState({
			contact: {
				...contact,
				[e.target.id]: e.target.value
			}
		})
	}
	addContact() {
		const contactsList = this.state.contactsList;
		contactsList.push(this.state.contact);
		this.setState({
			contactsList: contactsList,
			contact: {},
			showAddContact: false
		});
	}
	removeItem(index) {
		console.log(index);
		const contactsList = this.state.contactsList;
		contactsList.splice(index, 1);
		this.setState({
			contactsList: contactsList
		});
	}
	editItem(item, index){
		this.setState({
			contact: item,
			showEditContact: true,
			editIndex: index
		})
 	}
 	updateContact() {
 		const contactsList = this.state.contactsList;
		const selectedIndex = this.state.editIndex;
		contactsList[selectedIndex] = this.state.contact;

		this.setState({
			contactsList: contactsList,
			showEditContact: false
		});
 	}

 	showItem(item){
 		console.log('item', item);
		this.setState({
			contact: item,
			showContact: true
		})
 	}
 	render(){
		return (
		<div>
			<h3>Contacts List</h3>
			{!this.state.showAddContact ? <button onClick={this.toggleContact}>Add contact</button> : ''}
			{this.state.showAddContact ? <div>
				<div>Name: <input type='text'  id="name" onChange={this.handleChange}/> </div>
				<div>Gender: <input type='text' id="gender" onChange={this.handleChange}/> </div>
				<div>Age: <input type='text' id="age" onChange={this.handleChange}/> </div>
				<div><input type='button' value='Cancel' onClick={this.toggleContact} />
				 <input type='button' value='Submit' onClick={this.addContact} /> </div>
			</div> : ''}

			{this.state.showEditContact ? <div>
				<div>Name: <input type='text'  id="name" value={this.state.contact.name} onChange={this.handleChange} /> </div>
				<div>Gender: <input type='text' id="gender"  value={this.state.contact.gender} onChange={this.handleChange} /> </div>
				<div>Age: <input type='text' id="age"  value={this.state.contact.age} onChange={this.handleChange} /> </div>
				<div><input type='button' value='Cancel' onClick={this.toggleEditContact} />
				 <input type='button' value='Submit' onClick={this.updateContact} /> </div>
			</div> : ''}

			{this.state.showContact ? <div>
				<div>Name:  <span>{this.state.contact.name}</span> </div>
				<div>Gender: <span> {this.state.contact.gender} </span>  </div>
				<div>Age: <span> {this.state.contact.age} </span>  </div> 
			</div> : ''}

			{
				this.state.contactsList.map((listItem, index) => {
					return (
						<div className='contactItem' key={index}>
							<span> Name: </span><span>{listItem.name}</span>				
							<span> Gender: </span><span>{listItem.gender}</span>				
							<span> Age: </span><span>{listItem.age}</span>				
							<span> <button onClick={() => this.removeItem(index)}>Delete</button>
							 <button onClick={() => this.editItem(listItem, index)}>Edit</button>
							 <button onClick={() => this.showItem(listItem)}>View Contact</button></span>				
						</div>
						);
				})
			}
		</div>
		);
	}
}