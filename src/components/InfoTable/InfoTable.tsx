import React from 'react';
import './InfoTable.css';

export type InfoTableData = {
	property: string;
	value: string | number;
};

type Props = {
	data: InfoTableData[];
};

export function InfoTable(props: Props): JSX.Element {
	return (
		<table className="infotable">
			<tbody>
				{props.data.map((row) => (
					<tr key={row.property}>
						<td>{row.property}</td>
						<td>{row.value}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
