 import React, {useEffect, useState} from 'react';
 import styled from "styled-components";

export default function HelloWorld(props) {
	const [name, setName] = useState(props.name);

	// onMounted
	useEffect(() => {
		document.title = 'Hello World';
	}, []);

	// watch
	useEffect(() => {
		console.log('name changed to', name);
	}, [name]);

    const MainDiv = styled.div`
        padding: 12px;
        border-radius: 12px;
        border: thin solid #BBB;
		background-color: ${props => props.backgroundColor || 'transparent'};
	`

	return (
		<MainDiv {...props}>
			<h1>Hello {name}!</h1>
			<input defaultValue={name} onChange={(event) => {
				setName(event.target.value);
			}} />
		</MainDiv>
	);
}