import { useState } from 'react'
import { isSuperTokenMetadata, OutputTransfer } from '../types'

const shortAddr = (address: string) => {
	const start = address.substring(0, 5)
	const end = address.substring(address.length - 5, address.length)
	return `${start}..${end}`
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
				<td>{date}</td>
				<td>{shortAddr(sender)}</td>
				<td>{shortAddr(recipient)}</td>
				<td>{networkId}</td>
				<td>{amountToken}</td>
				<td>{amountFiat}</td>
				<td>{token.symbol}</td>
			</tr>
			{expanded ? (
				<td colSpan={7}>
					<h2>Transaction Data</h2>
					<table className="mini-table">
						<tr>
							<th className="mini-th">Date:</th>
							<td>{date}</td>
						</tr>
						<tr>
							<th className="mini-th">Sender:</th>
							<td>{sender}</td>
						</tr>
						<tr>
							<th className="mini-th">Recipient:</th>
							<td>{recipient}</td>
						</tr>
						<tr>
							<th className="mini-th">Transaction Hash:</th>
							<td>{txHash}</td>
						</tr>
						<tr>
							<th className="mini-th">Network ID:</th>
							<td>{networkId}</td>
						</tr>
						<tr>
							<th className="mini-th">Amount (Token):</th>
							<td>{amountToken}</td>
						</tr>
						<tr>
							<th className="mini-th">Amount (Fiat):</th>
							<td>{amountFiat}</td>
						</tr>
						<tr>
							<th className="mini-th">Exchange Rate:</th>
							<td>{exchangeRate}</td>
						</tr>
						<tr>
							<th className="mini-th">Token Address:</th>
							<td>{address}</td>
						</tr>
						<tr>
							<th className="mini-th">Token Name:</th>
							<td>{token.name}</td>
						</tr>
						<tr>
							<th className="mini-th">Token Symbol:</th>
							<td>{token.symbol}</td>
						</tr>
					</table>
				</td>
			) : null}
		</>
	)
}
