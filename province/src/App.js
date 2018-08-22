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
  
  render() {
    return (
      <div>
        <HashRouter hository = "hashHistory">
          <RouteComponent>
            <Route exact path="/" component={Home}></Route>
            <Route path="/list" component={List}></Route>
          </RouteComponent>
        </HashRouter>
        <div className="App">
            <ProvinceSelect childBackFather={ childData=>{console.log(childData)} } />
        </div> 
      </div>
    );
  }

}

export default App;