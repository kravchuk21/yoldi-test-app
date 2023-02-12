import {memo} from "react"
import Typography from "@/components/Typography"
import Link from "next/link"
import styles from "./Footer.module.css"

interface IAuthFooter {
	title: string
	link: {
		title: string
		path: string
	}
}

const AuthFooter: React.FC<IAuthFooter> = ({title, link}) => {
	return (
		<footer className={styles.footer}>
			<Typography className={styles.footerTitle}>{title}</Typography>
			&nbsp;
			<Link href={link.path} className={styles.footerLink}>
				<Typography>{link.title}</Typography>
			</Link>
		</footer>
	)
}

export default memo(AuthFooter)
