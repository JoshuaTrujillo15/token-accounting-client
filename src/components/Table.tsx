import { OutputTransfer } from '../types'

const dummyData: Array<OutputTransfer> = [
	{
		date: 1623986746,
		sender: '0xb6909b960dbbe7392d405429eb2b3649752b4838',
		recipient: '0xb47a9b6f062c33ed78630478dff9056687f840f2',
		txHash: '0xffdd807dcc4249738ddc7a8689d194734f02b4601c5cfa1cc6f13229687cf713',
		networkId: 'ethereum',
		amountToken: '29499492877449636980',
		amountFiat: '__TODO__',
		exchangeRate: '__TODO__',
		token: {
			id: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
			name: 'BAT',
			symbol: 'BAT'
		}
	},
	{
		date: 1623987828,
		sender: '0xb47a9b6f062c33ed78630478dff9056687f840f2',
		recipient: '0xb6e993890722ab326a8819b6d48c1efd8886930a',
		txHash: '0x37433f77d66e15a7fadb48e30ad58af4ceff806a80662aa14d754ba86a4a59a4',
		networkId: 'ethereum',
		amountToken: '15000000000000000000',
		amountFiat: '__TODO__',
		exchangeRate: '__TODO__',
		token: {
			id: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
			name: 'BAT',
			symbol: 'BAT'
		}
	},
	{
		date: 1623989230,
		sender: '0xb47a9b6f062c33ed78630478dff9056687f840f2',
		recipient: '0xb6e993890722ab326a8819b6d48c1efd8886930a',
		txHash: '0xf68cfaaaa8f08e0f609ffb41be6663940f9d355d1f1d629047b2bad6b493c00a',
		networkId: 'ethereum',
		amountToken: '5000000000000000000',
		amountFiat: '__TODO__',
		exchangeRate: '__TODO__',
		token: {
			id: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
			name: 'BAT',
			symbol: 'BAT'
		}
	},
	{
		date: 1624765417,
		sender: '0xc491405d542a393d8d202a72f0fb076447e61891',
		recipient: '0xb47a9b6f062c33ed78630478dff9056687f840f2',
		txHash: '0xf099da09119b7118a81672270cf45bb5e61cb6e4c0dd72297802fdfe2d053600',
		networkId: 'ethereum',
		amountToken: '93177414184540587788',
		amountFiat: '__TODO__',
		exchangeRate: '__TODO__',
		token: {
			id: '0xcf8335727b776d190f9d15a54e6b9b9348439eee',
			name: 'Whackd',
			symbol: 'WHACKD'
		}
	},
	{
		date: 1627859368,
		sender: '0x94e4b2e24523cf9b3e631a6943c346df9687c723',
		recipient: '0xb47a9b6f062c33ed78630478dff9056687f840f2',
		txHash: '0xe8503d5ca7f35fd8689f149546a1cb4d46bf582a607050bff7ae16e6db16c1e1',
		networkId: 'ethereum',
		amountToken: '4160638362638582583038871',
		amountFiat: '__TODO__',
		exchangeRate: '__TODO__',
		token: {
			id: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
			name: 'SHIBA INU',
			symbol: 'SHIB'
		}
	},
	{
		date: 1627859570,
		sender: '0xb47a9b6f062c33ed78630478dff9056687f840f2',
		recipient: '0x006e9091276c5a5a87eedad6264c668d5c8e5009',
		txHash: '0x0f16e032928b59005c65489529013337b160f46e68909c3693fb4535852cb252',
		networkId: 'ethereum',
		amountToken: '4160638362638582583038871',
		amountFiat: '__TODO__',
		exchangeRate: '__TODO__',
		token: {
			id: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
			name: 'SHIBA INU',
			symbol: 'SHIB'
		}
	},
	{
		date: 1627996990,
		sender: '0xc465c0a16228ef6fe1bf29c04fdb04bb797fd537',
		recipient: '0xb47a9b6f062c33ed78630478dff9056687f840f2',
		txHash: '0x6d2a95b9a46232dd1e6d3e55feb8608703bb637062f006a7cf439c8e083d60d9',
		networkId: 'ethereum',
		amountToken: '48484600000000000000',
		amountFiat: '__TODO__',
		exchangeRate: '__TODO__',
		token: {
			id: '0x73968b9a57c6e53d41345fd57a6e6ae27d6cdb2f',
			name: 'Stake DAO Token',
			symbol: 'SDT'
		}
	},
	{
		date: 1627997458,
		sender: '0xb47a9b6f062c33ed78630478dff9056687f840f2',
		recipient: '0xc465c0a16228ef6fe1bf29c04fdb04bb797fd537',
		txHash: '0xa073f4e4af8785195ecf5cab6fde8db7d4fa142254350d5f75b660fa80a83173',
		networkId: 'ethereum',
		amountToken: '48484600000000000000',
		amountFiat: '__TODO__',
		exchangeRate: '__TODO__',
		token: {
			id: '0x73968b9a57c6e53d41345fd57a6e6ae27d6cdb2f',
			name: 'Stake DAO Token',
			symbol: 'SDT'
		}
	},
	{
		date: 1627997458,
		sender: '0x0000000000000000000000000000000000000000',
		recipient: '0xb47a9b6f062c33ed78630478dff9056687f840f2',
		txHash: '0xa073f4e4af8785195ecf5cab6fde8db7d4fa142254350d5f75b660fa80a83173',
		networkId: 'ethereum',
		amountToken: '986195719620498104',
		amountFiat: '__TODO__',
		exchangeRate: '__TODO__',
		token: {
			id: '0xc465c0a16228ef6fe1bf29c04fdb04bb797fd537',
			name: 'Uniswap V2',
			symbol: 'UNI-V2'
		}
	},
	{
		date: 1627997729,
		sender: '0xb47a9b6f062c33ed78630478dff9056687f840f2',
		recipient: '0xfea5e213bbd81a8a94d0e1edb09dbd7ceab61e1c',
		txHash: '0x88d225195d8eb158ea2538bb896ba6ff2f19b0375343413d882c70a1651d917d',
		networkId: 'ethereum',
		amountToken: '986195719620498104',
		amountFiat: '__TODO__',
		exchangeRate: '__TODO__',
		token: {
			id: '0xc465c0a16228ef6fe1bf29c04fdb04bb797fd537',
			name: 'Uniswap V2',
			symbol: 'UNI-V2'
		}
	}
]

const shortAddr = (address: string) => {
	const start = address.substring(0, 5)
	const end = address.substring(address.length - 5, address.length)
	return `${start}..${end}`
}

export default function Table() {
	return (
		<table>
			<tr>
				<th>Date</th>
				<th>Sender</th>
				<th>Recipient</th>
				<th>Hash</th>
				<th>Network ID</th>
				<th>Amount (Token)</th>
				<th>Amount (Fiat)</th>
				<th>Exchange Rate</th>
				<th>Contract Address</th>
				<th>Symbol</th>
			</tr>
			{dummyData.map(data => {
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
				} = data
				return (
					<tr key={txHash}>
						<td>{date}</td>
						<td>{shortAddr(sender)}</td>
						<td>{shortAddr(recipient)}</td>
						<td>{shortAddr(txHash)}</td>
						<td>{networkId}</td>
						<td>{amountToken}</td>
						<td>{amountFiat}</td>
						<td>{exchangeRate}</td>
						<td>{shortAddr(token.id)}</td>
						<td>{token.symbol}</td>
					</tr>
				)
			})}
		</table>
	)
}
