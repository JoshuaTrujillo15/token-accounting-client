import { useEffect, useState } from 'react'
import SideBar from './SideBar'
import Table from './Table'
import styles from '../styles/Dashboard.module.css'
import { getData } from '../api'
import { AccountDocumentType } from '../types'

export default function Dashboard() {
	const [address, setAddress] = useState<string>('')
	const [accounts, setAccounts] = useState<Array<AccountDocumentType>>([])
	const [selectedAccount, setSelectedAccount] =
		useState<AccountDocumentType | null>(null)

	useEffect(() => {
		getData().then(result => setAccounts(result))
	}, [])

	useEffect(() => {
		setSelectedAccount(
			accounts.filter(account => account.address === address)[0]
		)
	}, [address, accounts])

	const swapAddress = (addr: string) => setAddress(addr)

	return (
		<div className={styles.dashboard}>
			<SideBar
				swapAddress={swapAddress}
				registry={accounts.map(account => account.address)}
			/>
			{selectedAccount ? (
				<div className={styles.tableWrapper}>
					<header className={styles.header}>
						<h3 style={{ paddingBottom: 4 }}>Selected Address:</h3>
						<h4>{address}</h4>
					</header>
					<Table
						flows={selectedAccount.flowState}
						transfers={selectedAccount.transfers}
						address={address}
					/>
				</div>
			) : (
				<div className={styles.placeHolder}>
					{accounts.length > 0 ? (
						<h2>Please Select An Address</h2>
					) : (
						<h2>Please Add An Address</h2>
					)}
				</div>
			)}
		</div>
	)
}
