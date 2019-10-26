import React, { Component } from 'react';
import Route from 'react-router-dom/Route'

import ContactsList from './contactsList';
import Button from './Button';

export default class Routes extends Component {
	constructor(){
		super();
		this.state = {
			buttonProps: {
        value: 'Click me',
        onClick: this.handleClick
      },
      buttonProps1: {
        value: 'Button2',
        onClick: this.handleClick
      }
		}
	}
	handleClick(data) {
		console.log('data- router - ', data);
	}
	render() {
		return (
			<div>
				<Route path='/button' exact 
				render={()=> {
					return <Button data={this.state.buttonProps}/>
				}} />

				<Route path='/button1' exact 
				render={()=> {
					return <Button data={this.state.buttonProps1}/>
				}} />
				<Route path='/contacts' exact 
				render={()=> {
					return <ContactsList />
				}} />
			</div>
		)
	}
}