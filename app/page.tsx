"use client"

import Typography from "@/components/Typography";
import React from "react";

export default function Home() {
	const [value, setValue] = React.useState('');
	return (
		<main>
			<h1>Yoldi test app</h1>
			<Typography color="red">Привет</Typography>
			<input value={value} onChange={e => setValue(e.target.value)}/>
		</main>
	)
}
