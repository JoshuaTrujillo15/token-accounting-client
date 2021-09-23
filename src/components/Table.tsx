import { OutputTransfer, OutputFlow } from '../types'
import TransferRow from './TransferRow'
import FlowRow from './FlowRow'
import styles from '../styles/Table.module.css'
import { baseUrl } from '../api'

type Props = {
	transfers: Array<OutputTransfer>
	flows: Array<OutputFlow>
	address: string
}

export default function Table({ transfers, flows, address }: Props) {
	return (
		<div>
			<header className={styles.linkHeader}>
				<h3>Transfers</h3>
				<a
					href={`${baseUrl}/accounts/csv/transfers/${address}`}
					className={styles.link}
				>
					Download CSV
				</a>
			</header>
			<table className={styles.table}>
				<tr className={styles.headerRow}>
					<th>Date</th>
					<th>Sender</th>
					<th>Recipient</th>
					<th>Network ID</th>
					<th>Amount (Token)</th>
					<th>Amount (Fiat)</th>
					<th>Exchange Rate</th>
					<th>Symbol</th>
				</tr>
				{transfers &&
					transfers.map(data => <TransferRow data={data} />)}
			</table>
			<header className={styles.linkHeader}>
				<h3>Flows</h3>
				<a
					href={`${baseUrl}/accounts/csv/flowstate/${address}`}
					className={styles.link}
				>
					Download CSV
				</a>
			</header>
			<table className={styles.table}>
				<tr className={styles.headerRow}>
					<th>Date</th>
					<th>Start</th>
					<th>End</th>
					<th>Sender</th>
					<th>Recipient</th>
					<th>Network ID</th>
					<th>Amount (Token)</th>
					<th>Amount (Fiat)</th>
					<th>Exchange Rate</th>
					<th>Symbol</th>
				</tr>
				{flows && flows.map(data => <FlowRow data={data} />)}
			</table>
		</div>
	)
}
