import { Routes } from "@/constants/routes"
import AuthFooter from "@/layout/auth/Footer"
import styles from "@/styles/Auth.module.css"

export default function RegisterPage() {
  return <div className={styles.authPage}>
		<main className={styles.authContent}>
		  Register, Next.js!
		</main>
		<AuthFooter	title="Уже есть аккаунт?" link={{
			path: Routes.LOGIN,
			title: "Войти"
		}} />	
	</div>;
}
