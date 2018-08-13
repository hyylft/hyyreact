import React from 'react';
import ProvinceSelect from './unit/province/ProvinceSelect';
import {
  BrowerRouter, Router, HashRouter, Macth, Route, Link, hashHistory, IndexLink
}
from 'react-router-dom';
import RouteComponent from './router/index';
import Home from './component/Home/index';
import List from './component/List/index';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  static defaultProps = {
    inpStyle: {
      display: "inline-block",
      width: "160px",
      height: "30px",
      lineHeight: "30px",
      border: "1px solid #ccc",
      padding: "0 0 0 4px",
      margin: "0",
      fontSize: '14px'
    },
    checkPlace: ['city', 'county']
  }

  childBackFather(state) {
    this.setState(state, () => {
      this.state = state;
    })
  }


  render() {
    return (
      <div>
        <HashRouter hository = "hashHistory">
          <RouteComponent>
            <Route exact path="/" component={Home}></Route>
            <Route path="/list" component={List}></Route>
          </RouteComponent>
        </HashRouter>
        <div className="App" style={{height:"60px"}}>
            <ProvinceSelect 
            propsStyle={this.props.inpStyle}  
            childBackFather={ this.childBackFather.bind(this) } 
            checkPlace="county">
            </ProvinceSelect>
        </div> 
      </div>
    );
  }

}

export default App;