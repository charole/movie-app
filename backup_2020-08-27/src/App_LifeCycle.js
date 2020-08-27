import React from 'react';

class App extends React.Component{
  state = {
    count: 0
  }

  add = () => {
    console.log('add');
    this.setState(current => ({count: current.count + 1}));
  }

  remove = () => {
    console.log('remove');
    this.setState(current => ({count: current.count - 1}));
  }

  constructor(props){
    super(props);
    console.log('constructor!');
  };

  componentDidMount(){
    console.log('componentDidMount!');
  };

  componentDidUpdate(){
    console.log('componentDidUpdate!');
  };

  componentWillUnmount(){
    console.log('componentWillUnmount!');
  };

  render() {
    console.log('render!');
    const {count} = this.state;
    
    return (
      <>
        <div>count is : {count}</div>
        <button type='button' onClick={this.add}>add</button>
        <button type='button' onClick={this.remove}>remove</button>
      </>
    );
  };
};

export default App;