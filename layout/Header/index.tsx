import { memo } from "react"
import Button from "@/components/Button"
import Typography from "@/components/Typography"
import Logo from "@/public/assets/icons/logo.svg"
import styles from "./Header.module.css"

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logoBlock}>
				<Logo/>
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
