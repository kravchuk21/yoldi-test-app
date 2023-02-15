import styles from "./Title.module.css"
import cn from "classnames"
import { memo } from "react"

interface ITitle {
	tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	children: React.ReactNode
	className?: string
}

const Title: React.FC<ITitle> = ({children, tag = 'h1', className, ...props}) => {
	switch (tag) {
		case 'h1':
			return <h1 className={cn(styles.title, className)} {...props}>{children}</h1>
		case 'h2':
			return <h2 className={cn(styles.title, className)} {...props}>{children}</h2>
		case 'h3':
			return <h3 className={cn(styles.title, className)} {...props}>{children}</h3>
		case 'h4':
			return <h4 className={cn(styles.title, className)} {...props}>{children}</h4>
		case 'h5':
			return <h5 className={cn(styles.title, className)} {...props}>{children}</h5>
		case 'h6':
			return <h6 className={cn(styles.title, className)} {...props}>{children}</h6>
		default:
			return <h1 className={cn(styles.title, className)} {...props}>{children}</h1>
	}
}

export default memo(Title) 
