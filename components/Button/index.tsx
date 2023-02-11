import { memo, ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren, SVGProps } from "react"
import cn from "classnames"
import styles from "./Button.module.css"
import Typography from "../Typography"

interface IButton extends PropsWithChildren<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> {
	buttonType?: 'primary' | 'secondary'
	LeftIcon?: React.ComponentType<SVGProps<SVGElement>> 
	RightIcon?: React.ComponentType<SVGProps<SVGElement>>
}

const Button: React.FC<IButton> = ({ children, buttonType = 'secondary', LeftIcon, RightIcon, ...props }) => {
	const className = buttonType

	return (
		<button className={cn(styles.button, styles[className])} {...props}>
			{LeftIcon && <LeftIcon/>}
			<Typography fontWeight={500}>{children}</Typography>
			{RightIcon && <RightIcon/>}
		</button>
	)
}

export default memo(Button)
