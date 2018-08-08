import React from 'react';
import { Table } from 'antd';
import fetchComponent from '../../fetch/fetchService.js';
import tytTool from '../../unit/custom.js';
import 'antd/lib/table/style/index.css';
import 'antd/lib/pagination/style/index.css';

class Item extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data:[]
    }
  }
  componentDidMount(){
    this.fetchComponent()
  }
  fetchComponent(){
    fetchComponent.getpath(
      this.props.fetch,{'q': 'react','sort': 'starts'}
    ).then((json)=>{
      this.setState({data:json.items})
    })
  }
  thisClick(_url){
    console.log(_url)
    tytTool.openWinAuto(_url,_url,1100,600)
  }
  render(){
    console.log(this.state.data.id)
    var that = this
    const columns = [{
      // key:
      title: 'GitLink',
      dataIndex: 'name',
      render(text, record, index) {
        return <a style={{cursor: 'pointer',color:'#428bca'}} onClick={()=>{that.thisClick(record.html_url)}} >{text}</a>;
      }
    }, {
      title: '星星',
      className: 'stargazers_count',
      dataIndex: 'stargazers_count'
    }, {
      title: '简介',
      className: 'description',
      dataIndex: 'description'
    }];

    return(
      <div>
        <Table columns={columns} dataSource={this.state.data} rowKey={record => record.id} bordered />
      </div>
    )
  }
}

export default Item;
