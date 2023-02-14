import Title from "@/components/Title"
import UserCard from "@/components/UserCard"

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
		<div>
			<Title>Список аккаунтов</Title>
			{DATA.map(user => {
				return (
					<UserCard fullName={user.name} email={user.email} image={null} key={user.email}/>
				)
			})}
		</div>
	)
}
