export type ChainName = 'xdai' | 'polygon-pos' | 'ethereum'
export type ChainId = '0x64' | '0x89' | '0x01'

export interface ERC20Metadata {
	id: string
	name: string
	symbol: string
}

export interface SuperTokenMetadata {
	id: string
	name: string
	symbol: string
	underlyingAddress: string
}

export type TokenMetadata = ERC20Metadata | SuperTokenMetadata

export function isERC20TokenMetadata(
	token: TokenMetadata
): token is ERC20Metadata {
	return !token.hasOwnProperty('underlyingAddress')
}

export function isSuperTokenMetadata(
	token: TokenMetadata
): token is SuperTokenMetadata {
	return token.hasOwnProperty('underlyingAddress')
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

export interface GradeEvent {
	id: string
	networkId: ChainName
	transaction: {
		id: string
		timestamp: number
	}
	token: SuperTokenMetadata
	amount: string
}

export interface AccountDocumentType {
	address: string
	flowState: OutputFlow[]
	transfers: OutputTransfer[]
	gradeEvents: GradeEvent[]
}
