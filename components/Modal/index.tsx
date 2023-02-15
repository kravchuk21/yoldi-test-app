import React, {useEffect, useCallback} from "react"
import ReactFocusLock from "react-focus-lock"
import Portal from "../Portal"
import styles from "./Modal.module.css"

interface IModal {
	children: React.ReactNode
	onClose: () => void
	isOpened: boolean
}

const Modal: React.FC<IModal> = ({children, isOpened, onClose}) => {
	const escFunction = useCallback((event: KeyboardEvent) => {
		if (event.key === "Escape") {
			onClose()
		}
	}, []);

	useEffect(() => {
		document.addEventListener("keydown", escFunction, false);

	    return () => {
			document.removeEventListener("keydown", escFunction, false);
		};
	}, [escFunction]);

	if (!isOpened) {
		return null
	}
		
	return (
		<Portal>
			<ReactFocusLock>
				<div className={styles.modal} role="dialog">
					<div className={styles.overlay}
						role="button"
						tabIndex={0}
						onClick={onClose}
					/>	
					<div className={styles.modalContent}>
						{ children }
					</div>
				</div>	
			</ReactFocusLock>
		</Portal>
	)
}

export default Modal
