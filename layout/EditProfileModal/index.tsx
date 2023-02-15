"use client"

import Button from "@/components/Button"
import Input from "@/components/Input"
import Modal from "@/components/Modal"
import Textarea from "@/components/Textarea"
import Title from "@/components/Title"
import Typography from "@/components/Typography"
import { useState } from "react"
import styles from "./EditProfileModal.module.css"
import EditIcon from "@/public/assets/icons/edit.svg"

const EditProfileModal = () => {		
	const host = window.location.host;

	const [visible, setVisible] = useState(false)

	const onClose = () => {
		setVisible(false)
	}

	const onToggle = () => {
		setVisible(v => !v)
	}

	return (
		<>
			<Button className={styles.editProfileButton} onClick={onToggle} LeftIcon={EditIcon} buttonType="secondary">Редактировать</Button>
			<Modal onClose={onClose} isOpened={visible}>
				<Title className={styles.editFormTitle}>Редактировать профиль</Title>
				<form className={styles.editForm}>
					<div className={styles.field}>
						<Typography className={styles.fieldLabel}>Имя</Typography>
						<Input fullWidth/>
					</div>				
					<div className={styles.field}>
						<Typography className={styles.fieldLabel}>Адрес профиля</Typography>
						<div className={styles.fieldUrl}>
							<div className={styles.fieldUrlLabel}>
								<Typography>{host}</Typography>
							</div>
							<Input className={styles.fieldUrlInput} fullWidth/>
						</div>
					</div>			
					<div className={styles.field}>
						<Typography className={styles.fieldLabel}>Описание</Typography>
						<Textarea fullWidth/>
					</div>				
				</form>
				<div className={styles.buttonGroup}>
					<Button fullWidth onClick={onClose}>Отмена</Button>
					<Button buttonType="primary" fullWidth>Сохранить</Button>
				</div>
			</Modal>
		</>
	)
}

export default EditProfileModal
