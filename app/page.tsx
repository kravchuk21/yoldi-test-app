"use client"

import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Typography from "@/components/Typography";
import AuthFooter from "@/layout/auth/Footer";
import React from "react";
import Svg from "@/public/assets/icons/user.svg"

export default function Home() {
	const [value, setValue] = React.useState('');
	return (
		<div>
				<h1>Yoldi test app</h1>
				<Typography color="red">Привет</Typography>
				<input value={value} onChange={e => setValue(e.target.value)}/>
				<Button>hello</Button>
				<Button disabled>hello</Button>
				<Button buttonType="primary">hello</Button>
				<Button buttonType="primary" disabled>hello</Button>
				<Button RightIcon={Svg} LeftIcon={Svg}>hello</Button>
				<Input value={value} onChange={e => setValue(e.target.value)} placeholder="hello"/>
				<Input  value={value} onChange={e => setValue(e.target.value)} disabled placeholder="hello"/>
				<Input  value={value} onChange={e => setValue(e.target.value)} RightIcon={Svg} LeftIcon={Svg} disabled placeholder="hello"/>
				<Input LeftIcon={Svg} error placeholder="hello"/>
				<Input LeftIcon={Svg} error placeholder="hello"/>
				<br/>
				<Input fullWidth RightIcon={Svg} LeftIcon={Svg} error placeholder="hello"/>
				<Avatar fullName="Владислав" size="small" image={null}/>
				<Avatar fullName="Владислав" image={"https://yoldi.agency/static/assets/yoldi-social.jpg"}/>
				<Avatar fullName="Владислав" size="large" image={"https://yoldi.agency/static/assets/yoldi-social.jpg"}/>
				<Avatar fullName="Владислав" size="large" image={null}/>
				<AuthFooter title="Еще нет аккаунта?" link={{title: "Зарегистрироваться", path: "#"}}/>
		</div>
	)
}
