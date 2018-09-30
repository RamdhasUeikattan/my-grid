import React, { Component } from 'react';
import { Header } from '../render/header-render';
import { Content } from '../render/content-render';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { grid } from '../redux/reducers/gridreducer';
import { prepareColumns } from './util';
import { ColGroup } from '../render/col-group-renderer';

export let GridDefaultProps = {
	dataSource: [],
	columns: [],
	sort: {columns: []}
};

const store = createStore(grid);

export class Grid extends Component {
	constructor(props) {
		super(props);
		this.refreshGrid = true;
		let columns = prepareColumns(props.columns);
		this.setState = {dataSource: props.dataSource, columns: columns};
	}
	render() {
		return (
			<Provider store={store}>
				<table className="my-grid table">
					<ColGroup parent={this}></ColGroup>
					<Header parent={this}></Header>
					<Content parent={this}></Content>
				</table>
			</Provider>
		);
	}
}
