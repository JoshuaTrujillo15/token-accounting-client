import Utils from './Utils'
import styles from '../styles/SideBar.module.css'

type Props = {
	swapAddress: (address: string) => void
	registry: Array<string>
}

export default function SideBar({ swapAddress, registry }: Props) {
	return (
		<div className={styles.sideBar}>
			<h2>Address Registry</h2>
			<ul className={styles.registry}>
				{registry &&
					registry.map(address => (
						<li
							className={styles.address}
							key={address}
							onClick={() => swapAddress(address)}
						>
							{address}
						</li>
					))}
			</ul>
			<div className={styles.divider} />
			<Utils />
		</div>
	)
}
