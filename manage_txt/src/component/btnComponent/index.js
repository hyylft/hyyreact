import React from 'react';
import './btnComponentStyle.css';

class BtnComponent extends React.Component {
	render() {
		return (
			<div>
				<div className="pageMessage">
					<div className="searchBtn">
						<ul className="btnBox cf">
							<li>
								<input className="button" type="button" value="查询"/>
							</li>
							<li>
								<input className="button" type="button" value="重置"/>
							</li>
						</ul>
					</div>
					<div className="clearfix"></div>
					<div className="messageRight fr">查询到<em id="rowCount">426</em>条信息，当前是第<span id="currentPage">1</span>页，共<span id="totalPages">15</span>页
					</div>
				</div>
			</div>
		)
	}
}

export default BtnComponent;