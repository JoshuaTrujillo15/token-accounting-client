export type ChainName = 'xdai' | 'polygon-pos' | 'ethereum'
export type ChainId = '0x64' | '0x89' | '0x01'

export interface TokenMetadata {
	id: string
	name: string
	symbol: string
}

export interface OutputFlow {
	date: number
	start: number
	end: number
	sender: string
	recipient: string
	networkId: string
	txHash: string
	amountToken: string
	amountFiat: string
	exchangeRate: string
	token: TokenMetadata
}

export interface OutputTransfer {
	date: number
	sender: string
	recipient: string
	txHash: string
	networkId: ChainName
	amountToken: string
	amountFiat: string
	exchangeRate: string
	token: TokenMetadata
}
