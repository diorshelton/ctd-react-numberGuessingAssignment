import React, { Component } from "react";
import "./App.css";
import NumberGuessingGame from "./NumberGuessingGame";

class App extends Component {
	render() {
		return (
			<div className="App">
				<NumberGuessingGame />
			</div>
		);
	}
}

export default App;
