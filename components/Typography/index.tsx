import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren, memo } from "react"
import cn from "classnames"

import styles from "./Typography.module.css"

interface ITypography extends PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>> {
	color?: string
	fontWeight? : 500 | 400
}

const Typography: React.FC<ITypography> = ({children, className, ...props}) => {
	const TypographyStyles = {
		color: props.color,
		fontWeight: props.fontWeight,
	}

	return (
		<p 
			className={cn(styles.typography, className)} 
			style={TypographyStyles}
			{...props}
		>
			{children}
		</p>
	)
}

export default memo(Typography)
