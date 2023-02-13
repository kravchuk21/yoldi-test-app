import styles from "@/styles/Auth.module.css"

const AuthFormBlock = ({children}: {children: React.ReactNode}) => {

	return (
		<div className={styles.authFormBlock}>
			{children}
		</div>
	)
}

export default AuthFormBlock
