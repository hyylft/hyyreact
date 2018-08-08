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
        <ul role="navsen">
			<li><Link to="/website">WebSite</Link></li>
			<li><Link to="/likebtn">LikeBtn</Link></li>
        </ul>
      </div>
		)
	}
})