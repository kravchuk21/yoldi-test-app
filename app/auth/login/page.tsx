import { Routes } from "@/constants/routes"
import AuthFooter from "@/layout/auth/Footer"
import styles from "@/styles/Auth.module.css"

export default function LoginPage() {
  return <div className={styles.authPage}>
		<main className={styles.authContent}>
		  Login, Next.js!
		</main>
		<AuthFooter	title="Еще нет аккаунта?" link={{
			path: Routes.REGISTER,
			title: "Зарегистрироваться"
		}} />	
	</div>;
}
