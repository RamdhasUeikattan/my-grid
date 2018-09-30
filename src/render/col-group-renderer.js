import React from 'react';

export function ColGroup(props) {
	return (
		<colgroup>
			{props.parent.props.columns.map((col) => {
				return (<col key={col.uid} style={{width: col.width + 'px'}} />);
			})}
		</colgroup>
	);
}