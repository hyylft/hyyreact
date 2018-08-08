import React from 'react';
import ReactDOM from 'react-dom';
import {
	Link
}
from 'react-router';

export default React.createClass({
	render() {
		return (
			<div>
		        <ul role="nav">
					<li><Link to="/">App</Link></li> 
					<li><Link to="/hooloo">HooLoo</Link></li>
					<li><Link to="/website">WebSite</Link></li>
					<li><Link to="/likebtn">LikeBtn</Link></li>
					<li><Link to="/webprops">Webprops</Link></li>
					<li><Link to="/reactajax">Reactajax</Link></li>
		        </ul>
		    </div>
		)
	}
})