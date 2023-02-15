import React, { DetailedHTMLProps, forwardRef, PropsWithChildren, Ref, InputHTMLAttributes } from "react"
import styles from "./Textarea.module.css"
import cn from "classnames"

export interface ITextarea extends PropsWithChildren<DetailedHTMLProps<InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>> {
	error?: boolean
	fullWidth?: boolean
}

export interface ITextareaWithRef extends ITextarea {
	textareaRef: Ref<HTMLTextAreaElement>
}

const Textarea: React.FC<ITextareaWithRef> = ({className, textareaRef, error, fullWidth, ...props}) => {

	return (
		<textarea className={cn(styles.textarea, { [styles.error]: error, [styles.fullWidth]: fullWidth }, className)} ref={textareaRef} {...props} />
	)
}

export default forwardRef<HTMLTextAreaElement, ITextarea>((props, ref) => <Textarea {...props} textareaRef={ref}/>)

