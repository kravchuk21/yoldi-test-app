import Title from "@/components/Title"
import { Routes } from "@/constants/routes"
import AuthFooter from "@/layout/auth/Footer"
import AuthFormBlock from "@/layout/auth/Form"
import styles from "@/styles/Auth.module.css"
import LoginForm from "./LoginForm"

export default function LoginPage() {
	return <div className={styles.authPage}>
		<main className={styles.authContent}>
			<AuthFormBlock>
				<Title className={styles.authFormTitle}>Вход в Yoldi Agency</Title>
				<LoginForm/>
			</AuthFormBlock>
		</main>
		<LoginPageFooter/>
	</div>;
}


const LoginPageFooter = () => <AuthFooter
	title="Еще нет аккаунта?" 
	link={{
		path: Routes.REGISTER,
		title: "Зарегистрироваться"
	}}
/>

