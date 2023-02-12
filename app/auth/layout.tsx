import Header from "@/layout/Header"
import styles from "@/styles/Auth.module.css"

export default function AuthLayout({ children }: {children: React.ReactNode}) {
	return (
		<div className={styles.auth}>
			<Header/>
			<main className={styles.authMain}>
				{children}
			</main>
		</div>
	)
}
