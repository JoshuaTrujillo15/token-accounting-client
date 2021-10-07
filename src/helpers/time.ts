export const getSecondsIn = (
	unit: 'hour' | 'day' | 'week' | 'year'
): number => {
	switch (unit) {
		case 'hour':
			return 60
		case 'day':
			return 86400
		case 'week':
			return 604800
		case 'year':
			return 3.154e7
	}
}

export const unixToEthTime = (timestamp: number): number => {
	return Math.floor(timestamp / 1000)
}

export const ethToUnixTime = (timestamp: number): number => {
	return timestamp * 1000
}

export const roundDownToDay = (timestamp: number): number => {
	return new Date(timestamp).setUTCHours(0, 0, 0, 0)
}

export const ethNow = () => unixToEthTime(Date.now())

export const ethToday = () => unixToEthTime(roundDownToDay(Date.now()))

export const ethereumLaunch = 1438214400

// hacks because html dates are trash.
const dateHelper = (dateString: string) => {
	let split = dateString.split('/')
	split = split.map(s => {
		if (s.length < 2) return '0' + s
		return s
	})
	return `${split[2]}-${split[1]}-${split[0]}`
}

export const timestampToDate = (timestamp: number) => {
	const r = dateHelper(
		new Date(ethToUnixTime(timestamp)).toLocaleDateString('en-US')
	)
	console.log({ r })
	return r
}

export const dateToTimestamp = (dateString: string) => {
	return unixToEthTime(new Date(dateHelper(dateString)).getTime())
}
