import { useState } from 'react'
import { isSuperTokenMetadata, OutputTransfer } from '../types'
import styles from '../styles/Row.module.css'

const shortAddr = (address: string) => {
	const start = address.substring(0, 5)
	const end = address.substring(address.length - 5, address.length)
	return `${start}..${end}`
}

const dateFormatter = (date: number): string => {
	return new Date(date * 1000).toLocaleDateString('en-US')
}

const shortAmount = (amount: string) => {
	const idx = amount.search('.') + 8
	return amount.substring(0, idx)
}

export default function Row(props: { data: OutputTransfer }) {
	const [expanded, setExpanded] = useState(false)
	const {
		date,
		sender,
		recipient,
		txHash,
		networkId,
		amountToken,
		amountFiat,
		exchangeRate,
		token
	} = props.data

	const address = isSuperTokenMetadata(token)
		? token.underlyingAddress
		: token.id

	return (
		<>
			<tr onClick={() => setExpanded(!expanded)} key={txHash}>
				<td>{dateFormatter(date)}</td>
				<td>{shortAddr(sender)}</td>
				<td>{shortAddr(recipient)}</td>
				<td>{networkId}</td>
				<td>{shortAmount(amountToken)}</td>
				<td>{shortAmount(amountFiat)}</td>
				<td>{shortAmount(exchangeRate)}</td>
				<td>{token.symbol}</td>
			</tr>
			{expanded ? (
				<td
					colSpan={8}
					className={expanded ? styles.selectedData : undefined}
				>
					<table className={styles.miniTable}>
						<tr>
							<th className={styles.miniHeader}>Date:</th>
							<td className={styles.miniData}>
								{dateFormatter(date)}
							</td>
						</tr>
						<tr>
							<th className={styles.miniHeader}>Sender:</th>
							<td className={styles.miniData}>{sender}</td>
						</tr>
						<tr>
							<th className={styles.miniHeader}>Recipient:</th>
							<td className={styles.miniData}>{recipient}</td>
						</tr>
						<tr>
							<th className={styles.miniHeader}>
								Transaction Hash:
							</th>
							<td className={styles.miniData}>{txHash}</td>
						</tr>
						<tr>
							<th className={styles.miniHeader}>Network ID:</th>
							<td className={styles.miniData}>{networkId}</td>
						</tr>
						<tr>
							<th className={styles.miniHeader}>
								Amount (Token):
							</th>
							<td className={styles.miniData}>{amountToken}</td>
						</tr>
						<tr>
							<th className={styles.miniHeader}>
								Amount (Fiat):
							</th>
							<td className={styles.miniData}>{amountFiat}</td>
						</tr>
						<tr>
							<th className={styles.miniHeader}>
								Exchange Rate:
							</th>
							<td className={styles.miniData}>{exchangeRate}</td>
						</tr>
						<tr>
							<th className={styles.miniHeader}>
								Token Address:
							</th>
							<td className={styles.miniData}>{address}</td>
						</tr>
						<tr>
							<th className={styles.miniHeader}>Token Name:</th>
							<td className={styles.miniData}>{token.name}</td>
						</tr>
						<tr>
							<th className={styles.miniHeader}>Token Symbol:</th>
							<td className={styles.miniData}>{token.symbol}</td>
						</tr>
					</table>
				</td>
			) : null}
		</>
	)
}
