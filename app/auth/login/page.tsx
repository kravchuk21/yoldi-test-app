import { Routes } from "@/constants/routes"
import AuthFooter from "@/layout/auth/Footer"
import AuthFormBlock from "@/layout/auth/Form";
import styles from "@/styles/Auth.module.css"

export default function LoginPage() {
  return <div className={styles.authPage}>
		<main className={styles.authContent}>
			<LoginForm/>
		</main>
		<AuthFooter	title="Еще нет аккаунта?" link={{
			path: Routes.REGISTER,
			title: "Зарегистрироваться"
		}} />	
	</div>;
}

const LoginForm = () => {

	return (
		<AuthFormBlock>
			<form>
				form
			</form>
		</AuthFormBlock>
	)
}
