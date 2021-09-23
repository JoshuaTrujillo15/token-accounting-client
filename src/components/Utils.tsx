import { useState } from 'react'
import { deleteAccount, forceUpdate, registerAccount } from '../api'
import styles from '../styles/Utils.module.css'
import Loader from './Loader'

export default function Utils() {
	const [newAddress, setNewAddress] = useState('')
	const [addressToRemove, setAddressToRemove] = useState('')
	const [updating, setUpdating] = useState(false)
	const [registerResult, setRegisterResult] = useState('')
	const [removeResult, setRemoveResult] = useState('')
	const [updateResult, setUpdateResult] = useState('')

	const handleRegister = () => {
		setRegisterResult('')
		if (newAddress !== '') {
			registerAccount(newAddress)
				.then(result => setRegisterResult(result))
				.catch(error => {
					console.error(error)
					setRegisterResult('Server Error')
				})
		}
	}

	const handleRemove = () => {
		removeResult !== '' && setRemoveResult('')
		if (addressToRemove !== '') {
			deleteAccount(addressToRemove)
				.then(success =>
					success
						? setRemoveResult('Removed')
						: setRemoveResult('Not Removed')
				)
				.catch(error => {
					console.error(error)
					setRemoveResult('Server Error')
				})
		}
	}

	const handleForceUpdate = () => {
		setUpdateResult('')
		setUpdating(true)
		forceUpdate()
			.then(success => {
				setUpdating(false)
				success
					? setUpdateResult('Updated')
					: setUpdateResult('Data Aggregation Failed')
			})
			.catch(error => {
				console.error(error)
				setUpdateResult('Server Error')
			})
	}

	return (
		<div className={styles.utils}>
			<h2>Utilities</h2>
			<div className={styles.group}>
				<h3>Register Address</h3>
				<input
					onChange={e => setNewAddress(e.target.value)}
					value={newAddress}
					className={styles.input}
					placeholder="0x00000000000000000000000000000000"
				/>
				<button className={styles.button} onClick={handleRegister}>
					Register
				</button>
				<p>{registerResult}</p>
			</div>
			<div className={styles.group}>
				<h3>Force Update</h3>
				<p className={styles.warning}>This may take several minutes</p>
				{updating ? (
					<>
						<p
							style={{
								textAlign: 'center',
								marginTop: 8
							}}
						>
							Updating ...
						</p>
						<Loader />
					</>
				) : (
					<button
						className={styles.button}
						onClick={handleForceUpdate}
					>
						Force Update
					</button>
				)}
				<p>{updateResult}</p>
			</div>
			<div className={styles.group}>
				<h3>Remove Address</h3>
				<input
					onChange={e => setAddressToRemove(e.target.value)}
					value={addressToRemove}
					className={styles.input}
					placeholder="0x00000000000000000000000000000000"
				/>
				<button className={styles.removeButton} onClick={handleRemove}>
					Remove
				</button>
				<p>{removeResult}</p>
			</div>
		</div>
	)
}
