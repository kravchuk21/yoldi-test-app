"use client"

import { memo, ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren, SVGProps } from "react"
import cn from "classnames"
import styles from "./Button.module.css"
import Typography from "../Typography"

export type IconType = React.ComponentType<SVGProps<SVGElement>>

interface IButton extends PropsWithChildren<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> {
	buttonType?: 'primary' | 'secondary'
	LeftIcon?: IconType 
	RightIcon?: IconType
	fullWidth?: boolean
}

const Button: React.FC<IButton> = ({ fullWidth = false, children, buttonType = 'secondary', LeftIcon, RightIcon, className, ...props }) => {
	const classNameByType = buttonType

	return (
		<button className={cn(styles.button, styles[classNameByType], {[styles.fullWidth]: fullWidth}, className)} {...props}>
			{!!LeftIcon && <ButtonIcon Icon={LeftIcon}/> }
			<Typography fontWeight={500}>{children}</Typography>
			{!!RightIcon && <ButtonIcon Icon={RightIcon}/>}
		</button>
	)
}

const ButtonIcon: React.FC<{Icon: IconType}> = memo(({Icon}) => <Icon />)

export default memo(Button)
