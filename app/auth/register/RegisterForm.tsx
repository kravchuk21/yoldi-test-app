"use client"

import Input from "@/components/Input"
import UserIcon from "@/public/assets/icons/user.svg"
import MailIcon from "@/public/assets/icons/mail.svg"
import PasswordIcon from "@/public/assets/icons/password.svg"
import Button from "@/components/Button"
import { useForm, SubmitHandler } from "react-hook-form"
import { RegisterFormSchema } from "@/utils/validation"
import {yupResolver,} from '@hookform/resolvers/yup'
import styles from "@/styles/Auth.module.css"
import PasswordInput from "@/layout/auth/PasswordInput"

interface IFormInput {
	fullName: string
	email: string
	password: string
}

const RegisterForm: React.FC = () => {
	const { handleSubmit, formState: { isSubmitting, errors, isValid,}, register} = useForm<IFormInput>({
		mode: 'onBlur',
		resolver: yupResolver(RegisterFormSchema),
	});

	const onSubmit: SubmitHandler<IFormInput> = data => {
		console.log(data)
	};

	return (
		<form className={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
			<Input 
				fullWidth 
				LeftIcon={UserIcon} 
				placeholder="Имя"
				error={!!errors.fullName?.message}
				{...register('fullName')}/>
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
			<Button className={styles.authFormButton} fullWidth type="submit" buttonType="primary" disabled={!isValid || isSubmitting}>Создать аккаун</Button>
		</form>
	)
}

export default RegisterForm
