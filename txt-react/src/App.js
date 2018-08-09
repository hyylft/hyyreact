import React from 'react';
// import Header from './component/header/Header';
// import ItemList from './component/itemlist/ItemList';
// import Footer from './component/footer/Footer';
import ProvinceSelect from './unit/province/ProvinceSelect';
// import './App.css';

class App extends React.Component {

  static defaultProps = {
    head: 'HEADER',
    foot: 'FOOTER',
    inpStyle: {
      display: "inline-block",
      width: "160px",
      height: "30px",
      border: "1px solid #ccc",
      padding: "0",
      margin: "0",
      fontSize: '14px'
    }
  }

  render() {
    return (
      <div className="App">
        {
          /*
          <Header title={this.props.head}></Header>
          <ItemList></ItemList>
          <Footer title={this.props.foot}></Footer>
          */
        }
        <ProvinceSelect propsStyle={this.props.inpStyle}></ProvinceSelect>
        
        <span>哈哈哈哈</span>
        <div>哈哈哈哈</div>
      </div>
    );
  }

}

export default App;