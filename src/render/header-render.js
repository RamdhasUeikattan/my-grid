import React, { Component } from 'react';
import { HeaderCellRender } from './header-cell-renderer';

export class Header extends Component {
	constructor(props) {
		super(props);
		this.parent = props.parent;
	}
	render() {
		return (
			<thead>
				<tr className='my-row my-headerrow'>
					{this.parent.props.columns.map((col) => <HeaderCellRender key={col.uid} column={col}/>)}
				</tr>
			</thead>);
	}
}
