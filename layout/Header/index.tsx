"use client"

import { memo } from "react"
import Button from "@/components/Button"
import Typography from "@/components/Typography"
import Logo from "@/public/assets/icons/logo.svg"
import styles from "./Header.module.css"
import { useRouter } from "next/navigation"
import { Routes } from "@/constants/routes"

const Header: React.FC = () => {
	const router = useRouter()

	const onClickRedirectToLogin = () => {
		router.push(Routes.LOGIN)
	}

	return (
		<header className={styles.header}>
			<div className={styles.logoBlock}>
				<Logo/>
				<Typography className={styles.logoText}>
					<span>Разрабатываем и запускаем</span>
					<span>сложные веб проекты</span>
				</Typography>
			</div>
			<Button onClick={onClickRedirectToLogin}>Войти</Button>
		</header>
	)
}

export default memo(Header)
