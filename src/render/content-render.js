import React, { Component } from 'react';
import { RowRenderer } from './row-renderer';
import { RowModelGenerator } from '../service/row-model-generaor';

export class Content extends Component {
	constructor(props) {
		super(props);
		this.parent = props.parent;
		this.rowModelGenerator = new RowModelGenerator(props.parent);
	}
	render() {
		if (this.parent.refreshGrid) {
			this.rows = this.rowModelGenerator.generateRows(this.parent.props.dataSource);
		}
		return (
			<tbody>
				{this.rows.map((row) => (<RowRenderer key= {row.uid} row={row}></RowRenderer>))}
			</tbody>);
	}
}

