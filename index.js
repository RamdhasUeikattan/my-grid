import React, { Component } from 'react';
import { Grid } from './src/base/grid';
import ReactDOM from 'react-dom';
import { data, employeeData } from './src/base/data';
import { getObject } from './src/base/util';

export class App extends Component {

	constructor() {
		super();
		this.columns = [
			// { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
			// { field: 'ShipCity', headerText: 'City', width: 150 },
			// { field: 'OrderDate', headerText: 'Order Date', width: 130, customAttributes: { class: 'Edittemplate' },
			// 	textAlign: 'Right'
			// },
			// {
			// 	field: 'ShipName', headerText: 'Ship Name', width: 150
			// },
			// { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
			// { field: 'Verified', headerText: 'Verified', width: 150 }
			{
				headerText: 'Employee Image', textAlign: 'center',
				width: 180, cellRender: ImageCellRender
			},
			{ field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'right', width: 125 },
			{ field: 'FirstName', headerText: 'Name', width: 120 },
			{ field: 'Title', headerText: 'Title', width: 130 },
			{
				field: 'HireDate', headerText: 'Hire Date', textAlign: 'right',
				width: 135, cellRender: DateCellRender 
			},
			{ field: 'ReportsTo', headerText: 'Reports To', width: 120, textAlign: 'right' }
		];
	}

	render() {
		return (
			<div className="App">
				<Grid dataSource={employeeData} columns={this.columns}></Grid>
			</div>
		);
	}
}
ReactDOM.render(<App />, document.getElementById('index'));

function ImageCellRender(props) {
	let EmployeeID = getObject('EmployeeID', props.cell.row.data);
	return (
		<td className='my-cell my-center-align'>
			<div className='image'>
				<img src={`dist/images/${EmployeeID}.png`} alt={`${EmployeeID}`} />
			</div> 
		</td>
	);
}

function DateCellRender(props) {
	let HireDate = getObject('HireDate', props.cell.row.data);
	return (
		<td className='my-cell my-right-align'>
			{HireDate.toLocaleDateString()}
		</td>
	);
}
