import React from 'react';
import { textAlignCss } from '../base/constants';
export function HeaderCellRender(props) {
	let cssClass = ['my-cell', textAlignCss[props.column.textAlign]];
	return (
		<th className={cssClass.join(' ')}>
			{props.column.headerText}
		</th>
	);
}