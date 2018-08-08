import React from 'react';
import ReactDOM from 'react-dom';

var MyComponent = React.createClass({
  handleClick: function() {
    // 使用原生的 DOM API 获取焦点
    this.refs.myInput.focus();
  },
  render: function() {
    //  当组件插入到 DOM 后，ref 属性添加一个组件的引用于到 this.refs
    return (
      <div>
    <label style={{color:"red"}} onClick={this.handleClick}>点我输入框获取焦点</label>
        <input type="text" ref="myInput" value={this.props.name}/>
      </div>
    );
  }
});
class App extends React.Component {
  render() {
    var i = 21;
    var arr = [
      <h3>可以当做变量的形式写进去</h3>,
      <h2>react写法就是这么任性,react的写法就是这么随意</h2>,
    ];
    return (
      <div>
      <MyComponent />
		    Hello World!!!<br />
		    这里会自动改变值哟<br />
		    {1+1+1+i}<br />
		    {/*arr*/}
		 </div>

    );
  }
}

export default App;