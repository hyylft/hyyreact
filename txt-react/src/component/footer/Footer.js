import React, { Component } from 'react';
import '../public/style.css';

class Footer extends Component {
	render(){
		return (
			<div>
				<h2 className="footerBox">{this.props.title}</h2>
			</div>
		)
	}
}
export default Footer;