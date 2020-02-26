import React, { CSSProperties } from "react";

import Navbar from "./Navbar";
import ViewContainer from "./ViewContainer";

interface Props {}
interface State {
	view: 'main' | 'sky' | 'forest' | 'sea'
}

export default class Layout extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);
		this.state = {
			view: 'main'
		};
	}

	navigateToMain() {
        console.log('asfar');
	};

	render() {
		return (
			<div style={bodyStyle}>
				<Navbar onClickHeader={this.navigateToMain} />
				<ViewContainer view={this.state.view} />
			</div>
		);
	}
}

const bodyStyle: CSSProperties = {
	position: "relative",
	height: "100%",
	background: "#eca13a", // forest
	// background: "#4faca1", // sky
	// background: "#deeaf6", // sea
	color: "#333",

	overflow: "hidden"
};
