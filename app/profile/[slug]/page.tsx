"use client"

import Button from "@/components/Button"
import Title from "@/components/Title"
import Typography from "@/components/Typography"
import styles from "@/styles/Profile.module.css"
import Link from "next/link"
import LogoutIcon from "@/public/assets/icons/logout.svg"
import EditProfileModal from "@/layout/EditProfileModal"
import ProfileCover from "./ProfileCover"
import ProfileAvatar from "./ProfileAvatar"

export default function Profile() {
	return <div>
		<ProfileCover/>
		<main className={styles.profileContent}>
			<ProfileAvatar />
			<div className={styles.profileHeader}>
				<div className={styles.profileUserInfo}>
					<Title className={styles.profileName}>Владислав</Title>
					<Link className={styles.profileEmail} href="mailto:example@gmail.com">
						<Typography>example@gmail.com</Typography>
					</Link>
				</div>
				<EditProfileModal/>
			</div>
			<div className={styles.profileDescription}>
				<Typography>
					Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.
				</Typography>

				<Button LeftIcon={LogoutIcon} className={styles.logoutButton}>Выйти</Button>
			</div>
		</main>
	</div>
}

