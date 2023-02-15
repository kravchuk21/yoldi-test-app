"use client"

import CameraIcon from "@/public/assets/icons/camera.svg"
import useHover from "@/hooks/useHover"
import Avatar from "@/components/Avatar"
import styles from "@/styles/Profile.module.css"

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

export default ProfileAvatar
