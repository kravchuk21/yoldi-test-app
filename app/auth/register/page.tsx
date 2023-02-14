import Title from "@/components/Title"
import { Routes } from "@/constants/routes"
import AuthFooter from "@/layout/auth/Footer"
import AuthFormBlock from "@/layout/auth/Form"
import styles from "@/styles/Auth.module.css"
import RegisterForm from "./RegisterForm"

export default function RegisterPage() {
	return <div className={styles.authPage}>
		<main className={styles.authContent}>
			<AuthFormBlock>
				<Title className={styles.authFormTitle}>Регистрация в Yoldi Agency</Title>
				<RegisterForm/>
			</AuthFormBlock>
		</main>
		<RegisterPageFooter/>
	</div>;
}

const RegisterPageFooter = () => <AuthFooter
	title="Уже есть аккаунт?" 
	link={{
		path: Routes.LOGIN,
		title: "Войти"
	}}
/>
