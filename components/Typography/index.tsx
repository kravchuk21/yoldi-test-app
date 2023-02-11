import { InterFontCyrillic } from "@/fonts"
import { NextFont } from "@next/font"
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren, memo } from "react"
import cn from "classnames"

import styles from "./Typography.module.css"

interface ITypography extends PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>> {
	font?: NextFont
	color?: string
	fontWeight? : 500 | 400
}

const Typography: React.FC<ITypography> = ({children, font = InterFontCyrillic, ...props}) => {
	const TypographyStyles = {
		color: props.color,
		fontWeight: props.fontWeight,
	}

	return (
		<p 
			className={cn(styles.typography, font.className)} 
			style={TypographyStyles}
			{...props}
		>
			{children}
		</p>
	)
}

export default memo(Typography)
