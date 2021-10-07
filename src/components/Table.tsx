import { useState } from 'react'
import { OutputTransfer, OutputFlow } from '../types'
import TransferRow from './TransferRow'
import FlowRow from './FlowRow'
import styles from '../styles/Table.module.css'
import { baseUrl } from '../api'
import {
	timestampToDate,
	dateToTimestamp,
	ethNow,
	getSecondsIn
} from '../helpers/time'

type Props = {
	transfers: Array<OutputTransfer>
	flows: Array<OutputFlow>
	address: string
}

export default function Table({ transfers, flows, address }: Props) {
	const [startTime, setStartTime] = useState(ethNow() - getSecondsIn('year'))
	const [endTime, setEndTime] = useState(ethNow())

	return (
		<div>
			<div className={styles.datePickerBar}>
				<div className={styles.datePickerWrapper}>
					<input
						className={styles.datePicker}
						type="date"
						value={timestampToDate(startTime)}
						onChange={e => {
							const dateString = e.target.value
							console.log({ dateString })
							setStartTime(dateToTimestamp(dateString))
						}}
					/>
				</div>
				<div className={styles.datePickerWrapper}>
					<input
						className={styles.datePicker}
						type="date"
						value={timestampToDate(endTime)}
						onChange={e => {
							const ISOString = e.target.value
							setEndTime(dateToTimestamp(ISOString))
						}}
					/>
				</div>
			</div>
			<header className={styles.linkHeader}>
				<h3>Transfers</h3>
				<a
					href={`${baseUrl}/accounts/csv/transfers?id=${address}&start=${startTime}&end=${endTime}`}
					className={styles.link}
				>
					Download CSV
				</a>
			</header>
			<table className={styles.table}>
				<thead>
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
				</thead>
				<tbody>
					{transfers &&
						transfers
							.filter(t => startTime < t.date && t.date < endTime)
							.map((data, idx) => (
								<TransferRow key={idx} data={data} />
							))}
				</tbody>
			</table>
			<header className={styles.linkHeader}>
				<h3>Flows</h3>
				<a
					href={`${baseUrl}/accounts/csv/flowstate?id=${address}&start=${startTime}&end=${endTime}`}
					className={styles.link}
				>
					Download CSV
				</a>
			</header>
			<table className={styles.table}>
				<thead>
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
				</thead>
				<tbody>
					{flows &&
						flows
							.filter(
								flow =>
									startTime < flow.date && flow.date < endTime
							)
							.map((data, idx) => (
								<FlowRow key={idx} data={data} />
							))}
				</tbody>
			</table>
		</div>
	)
}
