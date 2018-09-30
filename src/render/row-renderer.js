import React, { Component } from 'react';

export class RowRenderer extends Component {
	constructor(props) {
		super(props);
		this.row = props.row;
	}
	render() {
		return (
			<tr className={this.row.cssClass} index={this.row.index}>
				{this.row.cells.map((cell) => {
					let CellRender = cell.column.cellRender;
					return <CellRender key={cell.uid} cell={cell}></CellRender>;})}
			</tr>);
	}
}