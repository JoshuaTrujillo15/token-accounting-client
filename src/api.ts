import { OutputTransfer } from './types'

export const getTableData = async (): Promise<Array<OutputTransfer>> => {
	const query = `http://localhost:5000/accounts/data/0xb47A9B6F062c33ED78630478dFf9056687F840f2`
	return fetch(query)
		.then(res => res.json())
		.then(result => result.transfers)
		.catch(err => console.log(err))
}
