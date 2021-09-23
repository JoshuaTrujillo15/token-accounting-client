import { AccountDocumentType } from '../types'

export const baseUrl = 'http://localhost:5000'

export const apiHelper = async (
	endpoint: string,
	method: string
): Promise<any> => {
	try {
		const response = await fetch(`${baseUrl}${endpoint}`, {
			method,
			mode: 'cors'
		})
		return response
	} catch (error) {
		throw error
	}
}

export const registerAccount = async (address: string): Promise<string> => {
	try {
		const url = `/accounts/address/${address}`
		const response = await apiHelper(url, 'POST')
		if (response.status === 403) return 'Duplicate Account'
		return 'Added Account'
	} catch (error) {
		throw error
	}
}

export const deleteAccount = async (address: string): Promise<boolean> => {
	try {
		const url = `/accounts/address/${address}`
		const response = await apiHelper(url, 'DELETE')
		return response.status === 200 ? true : false
	} catch (error) {
		throw error
	}
}

export const forceUpdate = async () => {
	try {
		const url = '/accounts/force_update'
		const response = await apiHelper(url, 'PUT')
		return response.status === 200 ? true : false
	} catch (error) {
		throw error
	}
}

export const getData = async (): Promise<Array<AccountDocumentType>> => {
	try {
		const url = '/accounts/data'
		const response = await apiHelper(url, 'GET')
		return await response.json()
	} catch (error) {
		throw error
	}
}

export const getDataByAddress = async (address: string) => {
	try {
		const url = `/accounts/data/${address}`
		const response = await apiHelper(url, 'GET')
		return await response.json()
	} catch (error) {
		throw error
	}
}

export const accountRegistry = async () => {
	try {
		const url = '/accounts/registry'
		const response = await apiHelper(url, 'GET')
		return await response.json()
	} catch (error) {
		throw error
	}
}

export const getTransfersCsvByAddress = async (address: string) => {
	try {
		const url = `/accounts/csv/transfers/${address}`
		const response = await apiHelper(url, 'GET')
		return await response.json()
	} catch (error) {
		throw error
	}
}

export const getFlowStateCsvByAddress = async (address: string) => {
	try {
		const url = `/accounts/csv/flowstate/${address}`
		const response = await apiHelper(url, 'GET')
		return await response.json()
	} catch (error) {
		throw error
	}
}
