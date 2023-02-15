import Avatar from "@/components/Avatar"
import Typography from "@/components/Typography"
import styles from "./UserCard.module.css"

interface IUserCard {
	email: string
	fullName: string
	image?: string | null
}

const UserCard: React.FC<IUserCard> = ({ email, fullName, image = null }) => {	
	return (
		<div className={styles.userCard}>
			<Avatar size="small" image={image} fullName={fullName}/>
			<div className={styles.userCardInfo}>
				<Typography className={styles.userCardInfoName}>{fullName}</Typography>
				<Typography className={styles.userCardInfoEmail}>{email}</Typography>
			</div>
		</div>
	)
}

export default UserCard
