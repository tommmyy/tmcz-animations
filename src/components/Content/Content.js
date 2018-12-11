import React, { Component } from 'react';
import { Box, Heading, Button } from 'rebass';
import styled from 'styled-components';

const Animation = styled.div`
	opacity: ${(ps) => (ps.checked ? 1 : 0)};
	transition: opacity 0.3s ease-in;

	background-color: lime;
	width: 50px;
	height: 50px;
`;

class Content extends Component {
	state = { checked: false };

	handleClick = () => this.setState(({ checked }) => ({ checked: !checked }));

	render() {
		const { checked } = this.state;
		return (
			<Box p={8}>
				<Heading>Basic animation</Heading>
				<Box my={4}>
					<Animation checked={checked} />
				</Box>
				<Button onClick={this.handleClick}>Toggle</Button>
			</Box>
		);
	}
}

Content.defaultProps = {};

Content.propTypes = {};

export default Content;
