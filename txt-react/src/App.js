import React from 'react';
import Header from './component/header/Header';
import ItemList from './component/itemlist/ItemList';
import Footer from './component/footer/Footer';
import './App.css';

class App extends React.Component {
  static defaultProps = {
    head: 'HEADER',
    foot: 'FOOTER'
  }

  render() {
    return (
      <div className="App">
          <Header title={this.props.head}></Header>
          <ItemList></ItemList>
          <Footer title={this.props.foot}></Footer>
      </div>
    );
  }

}

export default App;