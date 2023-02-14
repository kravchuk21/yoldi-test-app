"use client"

import Avatar from "@/components/Avatar"
import Button from "@/components/Button"
import Title from "@/components/Title"
import Typography from "@/components/Typography"
import styles from "@/styles/Profile.module.css"
import Link from "next/link"
import EditIcon from "@/public/assets/icons/edit.svg"
import LogoutIcon from "@/public/assets/icons/logout.svg"
import ImageIcon from "@/public/assets/icons/image.svg"
import TrashIcon from "@/public/assets/icons/trash.svg"
import CameraIcon from "@/public/assets/icons/camera.svg"
import useHover from "@/hooks/useHover"

export default function Profile({params}) {
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
				<Button className={styles.editProfileButton} LeftIcon={EditIcon} buttonType="secondary">Редактировать</Button>
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

const ProfileAvatar = () => {
	const [avatarRef, avatarHovered] = useHover<HTMLDivElement>();

	return (
		<div ref={avatarRef}>
			{avatarHovered 
				? <button className={styles.changeAvatarButton}><CameraIcon/></button>
				: <Avatar size="large" fullName="Владислав"/>
			}
		</div>
	)
}

const ProfileCover = () => {
	const [coverRef, coverHovered] = useHover<HTMLDivElement>();

	return (
		<div className={styles.profileCover} ref={coverRef}>
			<img src="https://yoldi.agency/_next/static/media/roadmap.88364db1.svg" alt="Владислав cover profile page"/>
			{ coverHovered && <Button LeftIcon={TrashIcon} RightIcon={ImageIcon} className={styles.changeCoverButton}>Удалить</Button>}
		</div>
	)
}
