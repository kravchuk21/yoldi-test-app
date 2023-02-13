import { memo, ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren, SVGProps } from "react"
import cn from "classnames"
import styles from "./Button.module.css"
import Typography from "../Typography"

interface IButton extends PropsWithChildren<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> {
	buttonType?: 'primary' | 'secondary'
	LeftIcon?: React.ComponentType<SVGProps<SVGElement>> 
	RightIcon?: React.ComponentType<SVGProps<SVGElement>>
	fullWidth?: boolean
}

const Button: React.FC<IButton> = ({ fullWidth = false, children, buttonType = 'secondary', LeftIcon, RightIcon, className, ...props }) => {
	const classNameByType = buttonType

	return (
		<button className={cn(styles.button, styles[classNameByType], {[styles.fullWidth]: fullWidth}, className)} {...props}>
			{LeftIcon && <LeftIcon/>}
			<Typography fontWeight={500}>{children}</Typography>
			{RightIcon && <RightIcon/>}
		</button>
	)
}

export default memo(Button)
