"use client"

import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Typography from "@/components/Typography";
import React from "react";
import Svg from "@/public/assets/icons/user.svg"
import Modal from "@/components/Modal";

export default function Home() {
	const [value, setValue] = React.useState('');
	const [visible, setVisble] = React.useState(false)
	return (
		<div>
				<h1>Yoldi test app</h1>
				<Typography color="red">Привет</Typography>
				<Button onClick={() => setVisble(true)}>Open</Button>
				<Modal isOpened={visible} onClose={() => setVisble(false)}>
					hello
					<Button onClick={() => setVisble(false)} buttonType="primary">Close</Button>
				</Modal>
				<input value={value} onChange={e => setValue(e.target.value)}/>
				<Button>hello</Button>
				<Button disabled>hello</Button>
				<Button buttonType="primary">hello</Button>
				<Button buttonType="primary" disabled>hello</Button>
				<Button RightIcon={Svg} LeftIcon={Svg}>hello</Button>
				<Input fullWidth RightIcon={Svg} LeftIcon={Svg} error placeholder="hello"/>
				<Avatar fullName="Владислав" size="small" image={null}/>
				<Avatar fullName="Владислав" image={"https://yoldi.agency/static/assets/yoldi-social.jpg"}/>
				<Avatar fullName="Владислав" size="large" image={"https://yoldi.agency/static/assets/yoldi-social.jpg"}/>
				<Avatar fullName="Владислав" size="large" image={null}/>
		</div>
	)
}
