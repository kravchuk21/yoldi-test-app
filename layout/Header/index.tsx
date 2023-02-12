import { memo } from "react"
import Button from "@/components/Button"
import Typography from "@/components/Typography"
import Logo from "@/public/assets/icons/logo.svg"
import Image from "next/image"
import styles from "./Header.module.css"

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logoBlock}>
				<Image src={Logo.src} height={Logo.height} width={Logo.width} alt="Yoldi logo" />
				<Typography className={styles.logoText}>
					<span>Разрабатываем и запускаем</span>
					<span>сложные веб проекты</span>
				</Typography>
			</div>
			<Button>Войти</Button>
		</header>
	)
}

export default memo(Header)
