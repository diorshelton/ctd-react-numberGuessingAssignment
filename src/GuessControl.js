import React from "react";
import Button from "./Button";
import { useState } from "react";

const GuessControl = (props) => {
	const [currentGuess, setCurrentGuess] = useState("");

	const handleInputChange = (e) => {
		setCurrentGuess(e.target.value);
	};

	const onSubmitGuess = () => {
		props.onGuess(Number(currentGuess));
		setCurrentGuess("");
	};

	return (
		<div>
			<input
				value={currentGuess}
				type="number"
				onChange={handleInputChange}
			></input>
			<Button onClick={onSubmitGuess}>Submit Guess </Button>
		</div>
	);
};

export default GuessControl;
