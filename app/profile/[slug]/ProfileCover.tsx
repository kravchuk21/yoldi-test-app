"use client"

import useHover from "@/hooks/useHover";
import styles from "@/styles/Profile.module.css"
import ImageIcon from "@/public/assets/icons/image.svg"
import TrashIcon from "@/public/assets/icons/trash.svg"
import Button from "@/components/Button";

const ProfileCover = () => {
	const [coverRef, coverHovered] = useHover<HTMLDivElement>();

	return (
		<div className={styles.profileCover} ref={coverRef}>
			<img src="https://yoldi.agency/_next/static/media/roadmap.88364db1.svg" alt="Владислав cover profile page"/>
			{ coverHovered && <Button LeftIcon={TrashIcon} RightIcon={ImageIcon} className={styles.changeCoverButton}>Удалить</Button>}
		</div>
	)
}

export default ProfileCover
