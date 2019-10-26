import React, { Component } from 'react';

export default class Button extends Component {
	constructor(props) {
    super(props);
    // console.log('Button - constructor', props);
    this.state = {
      buttonValue: props.data.value,
      txtbox: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  componentWillMount() {
    // console.log('Button - componentWillMount');
  }
  componentDidMount(){
    // console.log('Button - componentDidMount');
  }
  componentWillReceiveProps(nextProps){
    // console.log('Button - componentWillReceiveProps');
    // console.log('Button - nextProps', nextProps);
    this.setState({
    	buttonValue: nextProps.data.value
    });
  }
  shouldComponentUpdate(nextProps, nextState){
    // console.log('Button - shouldComponentUpdate');
    // console.log('Button - nextProps', nextProps);
    // console.log('Button - nextState', nextState);
    return true;
  }
  componentWillUnmount() {
  	// console.log('componentWillUnmount')
  }
  handleClick() {
    // console.log('Button - click')
    console.log(this.state.txtbox);
    this.props.data.onClick(this.state.txtbox);
  }
  handleInput(e) {
  	console.log(e.target.value);
  	this.setState({
  		txtbox: e.target.value
  	})
  }
  render() {
    // console.log('Button - render', this.props);
    return (
      	<div>

        <button type="button" onClick={this.handleClick} >{this.props.data.value}</button>
        <input type='text' onChange={this.handleInput} />
        </div>
    );
  }
}