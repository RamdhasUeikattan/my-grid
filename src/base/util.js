import { CellRender } from '../render/cell-renderer';
let uid = 0;
export function getUid(prefix) {
	return prefix + uid++;
}

export function isObject(obj) {
	let newObj = {};
	return (!isNullOrUndefined(obj) && obj.constructor === newObj.constructor);
}

export function isNullOrUndefined(value) {
	return value === undefined || value === null;
}

export function extend(first) {
	let result = first || {};
	for (let i = 1, length = arguments.length; i< length; i++) {
		let obj1 = arguments[i];
		Object.keys(obj1).forEach((key) => {
			let src = result[key];
			let copy = obj1[key];
			let clone;
			if (isObject(copy)) {
				result[key] = extend({}, clone, src);
			} else {
				result[key] = copy;
			}
		});
	}
}

export function prepareColumns(columns) {
	return columns.forEach(col => {
		col.uid = getUid('grid-column');
		if(!col.headerText){
			col.headerText = col.field || '';
		} 
		if (!col.cellRender) {
			col.cellRender = CellRender;
		}
		if (!col.valueAccessor) {
			col.valueAccessor = valueAccessor;
		}
		if (!col.textAlign) {
			col.textAlign = 'left';
		}
	});
}

export function valueAccessor(cell) {
	let field = isNullOrUndefined(cell.column.field) ? '' : cell.column.field;
	return getObject(field, cell.row.data).toString();
}

export function getObject(field = '', object) {
	if (field) {
		let value = object;
		let splits = field.split('.');
		for (let i = 0; i < splits.length && !isNullOrUndefined(value); i++) {
			value = value[splits[i]];
		}
		return value;
	}
}
export function setValue(nameSpace, value, obj) {
	var keys = nameSpace.replace(/\[/g, '.').replace(/\]/g, '').split('.');
	var start = obj || {};
	var fromObj = start;
	var i;
	var length = keys.length;
	var key;
	for (i = 0; i < length; i++) {
		key = keys[i];
		if (i + 1 === length) {
			fromObj[key] = value;
		}
		else if (isNullOrUndefined(fromObj[key])) {
			fromObj[key] = {};
		}
		fromObj = fromObj[key];
	}
	return start;
}