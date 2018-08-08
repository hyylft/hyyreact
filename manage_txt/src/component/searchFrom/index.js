import React from 'react';
import './searchStyle.css';

class SearchFrom extends React.Component {
	render() {
		return (
			<div>
				<div className="searchBox" id="searchCondition">
					<ul className="searchUl searchUlNone cf">
						<li>
							<label>数据渠道：</label>
							<select id="" name="">
								<option value="">请选择</option>
								<option value="1">点击商家入驻</option>
								<option value="2">完成入驻申请</option>
							</select>
						</li>
						<li>
							<label>联系人：</label>
							<input type="text"/>
						</li>
						<li>
							<label>注册手机号：</label>
							<input id="" name=""/>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default SearchFrom;