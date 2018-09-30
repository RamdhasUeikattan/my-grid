import React from 'react';

export function CellRender(props) {
	return (
		<td className={props.cell.cssClass} index={props.cell.index} rowindex={props.cell.row.index}>
			{props.cell.column.valueAccessor(props.cell)}
		</td>
	);
}