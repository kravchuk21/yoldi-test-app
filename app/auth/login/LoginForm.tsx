"use client"

import Button from "@/components/Button"
import { useForm, SubmitHandler } from "react-hook-form"
import { LoginFormSchema } from "@/utils/validation"
import {yupResolver,} from '@hookform/resolvers/yup'
import Input from "@/components/Input"
import MailIcon from "@/public/assets/icons/mail.svg"
import PasswordIcon from "@/public/assets/icons/password.svg"
import styles from "@/styles/Auth.module.css"
import PasswordInput from "@/layout/auth/PasswordInput"

interface IFormInput {
	email: string
	password: string
}

const LoginForm: React.FC = () => {
	const { handleSubmit, formState: { isSubmitting, errors, isValid,}, register} = useForm<IFormInput>({
		mode: 'onBlur',
		resolver: yupResolver(LoginFormSchema),
	});

	const onSubmit: SubmitHandler<IFormInput> = data => {
		console.log(data)
	};

	return (
		<form className={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
			<Input 
				fullWidth 
				LeftIcon={MailIcon} 
				placeholder="E-mail"
				type="email"
				error={!!errors.email?.message}
				{...register('email')}/>
			<PasswordInput 
				fullWidth 
				LeftIcon={PasswordIcon} 
				placeholder="Пароль"
				error={!!errors.password?.message}
				{...register('password')}/>
			<Button className={styles.authFormButton} fullWidth type="submit" buttonType="primary" disabled={!isValid || isSubmitting}>Войти</Button>
		</form>
	)
}

export default LoginForm
