import React from 'react';
import Item from './Item';

class ItemList extends React.Component {

	static defaultProps  = {
	  listfetch:'https://api.github.com/search/repositories'
	  // listfetch:'http://release.teyuntong.cn/manage_new/carManage/list?currentPage=1&pageSize=5&menuId=401'
	}

	render(){
		return (
			<div id="ItemList" style={{marginTop:'40px'}}>
			<div></div>
				<Item fetch={this.props.listfetch}></Item>
			</div>
		)
	}
}
export default ItemList;