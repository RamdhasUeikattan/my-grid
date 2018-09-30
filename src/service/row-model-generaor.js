import {getUid} from '../base/util';
import { textAlignCss } from '../base/constants';

export class RowModelGenerator {

	constructor(parent) {
		this.parent = parent;
	}

	generateRows(datas = []) {
		return datas.map(((data, index) => {
			return this.generateRow(data, index);
		}));
	}

	generateRow(data = {}, index) {
		let isAltRow = index % 2 ? true : false;
		let cssClass = ['my-row'];
		if (isAltRow) {
			cssClass.push('my-altrow');
		}
		let row = {
			uid: getUid('grid-row'),
			index,
			cssClass: cssClass.join(' '),
			data,
			isAltRow
			// isSelected: this.parent.state.selectedIndex.contains(index)
		};
		row.cells = this.generateCells(row);
		return row;
	}

	generateCells(row) {
		return this.parent.props.columns.map((colum, index) => {
			return this.generateCell(row, colum, index);
		});
	}

	generateCell(row, column, index) {
		let textAlign = column.textAlign;
		let cssClass = ['my-cell'];
		if (column.customAttribute && column.customAttribute.class) {
			cssClass.push(column.customAttribute.class);
		}
		let cell = {
			column,
			row,
			textAlign,
			index,
			isVisible: column.isVisible,
			cellType: column.type,
			colSpan: 1,
			uid: getUid(row.uid + '-cell' + index),
			cssClass: cssClass.join(' ')
		};
		cell.cssClass += ' ' + textAlignCss[textAlign];  
		return cell;
	}
}