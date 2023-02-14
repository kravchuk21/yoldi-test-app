import Title from "@/components/Title"
import UserCard from "@/components/UserCard"
import { Routes } from "@/constants/routes"
import styles from "@/styles/Home.module.css"
import Link from "next/link"

const DATA = [
	{
		"name": "Владислав Кравчук",
		"email": "krauchukvlad@gmail.com",
		"slug": "string",
		"description": "string",
		"cover": {
			"id": "string",
			"url": "string",
			"width": "string",
			"height": "string"
		}
	},
	{
		"name": "string",
		"email": "string",
		"slug": "string",
		"description": "string",
		"cover": {
			"id": "string",
			"url": "string",
			"width": "string",
			"height": "string"
		}
	},
	{
		"name": "string",
		"email": "string",
		"slug": "string",
		"description": "string",
		"cover": {
			"id": "string",
			"url": "string",
			"width": "string",
			"height": "string"
		}
	},
	{
		"name": "string",
		"email": "string",
		"slug": "string",
		"description": "string",
		"cover": {
			"id": "string",
			"url": "string",
			"width": "string",
			"height": "string"
		}
	},
]

export default function Home() {
	return (
		<main className={styles.userListPage}>
			<Title className={styles.userListTitle}>Список аккаунтов</Title>
			<ul className={styles.userList}>
				{DATA.map(user => {
					return (
						<li key={user.email} >
							<Link href={Routes.PROFILE + user.slug}>
								<UserCard fullName={user.name} email={user.email} image={null}/>
							</Link>
						</li>
					)
				})}
			</ul>
		</main>
	)
}
