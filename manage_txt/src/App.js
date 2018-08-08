import React from 'react';
import ManageTitle from './component/manageTitle';
import SearchFrom from './component/searchFrom';
import BtnComponent from './component/btnComponent';
import ItemList from './component/itemlist/ItemList';
import './App.css';

class App extends React.Component {

  static defaultProps = {
    titName: ['保险业务管理', '商家入驻申请管理']
  }

  render() {
    return (
      <div className="App">
        <ManageTitle title={this.props.titName}></ManageTitle>
        <SearchFrom></SearchFrom>
        <BtnComponent></BtnComponent>
        <ItemList></ItemList>
      </div>
    );
  }

}

export default App;