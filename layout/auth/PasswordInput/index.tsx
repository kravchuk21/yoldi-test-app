"use client"

import Input, { IInput, IInputWithRef } from "@/components/Input"
import LockIcon from "@/public/assets/icons/eye.svg"
import styles from "./PasswordInput.module.css"
import { forwardRef, useState, memo, useCallback } from "react"

interface IPasswordInput extends Omit<IInput, "RightIcon" | "type"> {
}

const PasswordInput: React.FC<IInputWithRef> = ({inputRef, ...props}) => {

	const [passwordVisible, setPasswordVisible] = useState(false)

	const onTogglePasswordVisibleHandler = useCallback(() => {
		setPasswordVisible(v => !v)	
	}, [setPasswordVisible])

	return (
		<div className={styles.passwordInputBlock}>
			<Input type={passwordVisible ? "text" : "password"} {...props} className={styles.passwordInput} ref={inputRef}/>
			<TogglePasswordVisibleButton onClick={onTogglePasswordVisibleHandler}/>
		</div>
	)
}

const TogglePasswordVisibleButton = memo(({onClick}: {onClick: () => void}) => {
	return (
		<button className={styles.passwordInputToggleButton} onClick={onClick}>
			<LockIcon/>
		</button>
	)
})

export default forwardRef<HTMLInputElement, IPasswordInput>((props, ref) => {
	return <PasswordInput {...props} inputRef={ref}/>
})
