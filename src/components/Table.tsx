import { useEffect, useState } from 'react'
import { OutputTransfer } from '../types'
import { getTableData } from '../api'
import Row from './Row'

export default function Table() {
	const [transfers, setTransfers] = useState<Array<OutputTransfer>>([])
	useEffect(() => {
		getTableData().then(t => setTransfers(t))
	}, [])

	return (
		<table className="main-table">
			<tr>
				<th>Date</th>
				<th>Sender</th>
				<th>Recipient</th>
				<th>Network ID</th>
				<th>Amount (Token)</th>
				<th>Amount (Fiat)</th>
				<th>Symbol</th>
			</tr>
			{transfers.map(data => (
				<Row data={data} />
			))}
		</table>
	)
}
