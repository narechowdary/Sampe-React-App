import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import './App.css';
import Routes from './router';

class App extends Component {
  constructor() {
    super();
    // console.log('constructor');
    this.handleClick = this.handleClick.bind(this);
    this.remove = this.remove.bind(this);
    
    this.state = {
      param: 'hello',
      show: true,
      buttonProps: {
        value: 'Click me',
        onClick: this.handleClick
      },
      buttonProps1: {
        value: 'Remove',
        onClick: this.remove
      }
    }
  }
  componentWillMount() {
    // console.log('componentWillMount');
  }
  componentDidMount(){
    // console.log('componentDidMount');
  }
  componentWillReceiveProps(nextProps){
    // console.log('componentWillReceiveProps');
    // console.log('nextProps', nextProps);
  }
  remove() {
    // console.log('remove');
    this.setState({
      show: false
    })
  }

  handleClick(data) {
    // console.log('app- click', data)
    this.setState({
      param: data,
      buttonProps: {
        value: 'Click me2',
        onClick: this.handleClick
      }
    });
  }
  render() {
    // console.log('render');
    return (
      <div>
        <h1>Hello World - {this.state.param}</h1>
        <Router>
          <React.Fragment>
            <NavLink to='button' exact > Go to Button </NavLink><br/>
            <NavLink to='button' exact > Go to Button2 </NavLink><br/>
            <NavLink to='button1' exact > Go to Button1 </NavLink><br/>
            <NavLink to='contacts' exact > Contacts </NavLink>
            <Routes />
          </React.Fragment>
        </Router>
        {/*<Button 
          data={this.state.buttonProps1}
          paramValue={this.state.param} />
        {this.state.show && <Button data={this.state.buttonProps} paramValue={this.state.param} />}<div>Footercontent</div>*/}
        
      </div>
    );
  }
}

export default App;
