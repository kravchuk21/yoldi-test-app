import {memo} from "react"
import cn from "classnames"
import Image from "next/image"
import Typography from "../Typography"
import styles from "./Avatar.module.css"

interface IAvatar {
	size?: "small" | "large"
	fullName: string
	image?: string | null
}

const Avatar: React.FC<IAvatar> = ({size = "small", fullName, image = null}) => {
	const title = fullName[0].toUpperCase()
	const className = cn(styles.avatar, styles[size])
	const preloadImageSize = size === "small" ? 50 : 100;
	
	return (
		<div className={className} title={fullName}>
			{ image && <Image className={styles.avatarImage} src={image} alt={fullName} height={preloadImageSize} width={preloadImageSize}/> }
			{ !image && <Typography className={styles.avatarTitle}>{title}</Typography> }	
		</div>
	)
}

export default memo(Avatar)
