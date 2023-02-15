"use client"

import React, { DetailedHTMLProps, memo, Ref, forwardRef, PropsWithChildren, InputHTMLAttributes, SVGProps } from "react"
import styles from "./Input.module.css"
import cn from "classnames"

export type IconType = React.ComponentType<SVGProps<SVGElement>>

export interface IInput extends PropsWithChildren<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> {
	error?: boolean
	LeftIcon?: IconType
	RightIcon?: IconType 
	fullWidth?: boolean
}

export interface IInputWithRef extends IInput {
	inputRef: Ref<HTMLInputElement>
}

const Input: React.FC<IInputWithRef> = ({ fullWidth = false, LeftIcon, RightIcon, inputRef, error, disabled, className, ...props }) => {

	const inputStyle = {
		paddingLeft: !!LeftIcon ? 55 : 20,
		paddingRight: !!RightIcon ? 55 : 20,
	}

	return (
		<div className={cn(styles.inputBlock, { [styles.disabled]: disabled, [styles.fullWidth]: fullWidth })}>
			{!!LeftIcon && <InputIcon Icon={LeftIcon}/> }
			<input style={inputStyle} className={cn(styles.input, { [styles.error]: error }, className)} ref={inputRef} {...props} />
			{!!RightIcon && <InputIcon Icon={RightIcon}/>}
		</div>
	)
}

const InputIcon: React.FC<{Icon: IconType}> = memo(({Icon}) => <Icon />)

export default forwardRef<HTMLInputElement, IInput>((props, ref) => <Input {...props} inputRef={ref}/>)
