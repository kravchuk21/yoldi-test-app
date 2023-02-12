import { DetailedHTMLProps, memo, PropsWithChildren, InputHTMLAttributes, SVGProps } from "react"
import styles from "./Input.module.css"
import cn from "classnames"
import { InterFontCyrillic } from "@/fonts"

interface IInput extends PropsWithChildren<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> {
	error?: boolean
	LeftIcon?: React.ComponentType<SVGProps<SVGElement>> 
	RightIcon?: React.ComponentType<SVGProps<SVGElement>>
}

const Input: React.FC<IInput> = ({LeftIcon, RightIcon, error, disabled, ...props}) => {

	const inputStyle = {
		paddingLeft: LeftIcon ? 55 : 20, 
		paddingRight: RightIcon ? 55 : 20, 
	}

	return (
		<div className={cn(styles.inputBlock, {[styles.disabled]: disabled})}>
			{LeftIcon && <LeftIcon/>}
			<input style={inputStyle} className={cn(styles.input, InterFontCyrillic.className, {[styles.error]: error})}{...props}/>
			{RightIcon && <RightIcon/>}
		</div>
	)
}

export default memo(Input)
