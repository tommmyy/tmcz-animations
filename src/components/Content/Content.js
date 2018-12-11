import React, { Component } from 'react';
import { Flex, Box, Heading } from 'rebass';
import styled, { css, keyframes } from 'styled-components';

const ProgressBarWrapper = styled.div`
	background-color: lightgray;
	overflow: hidden;
`;
const inter = keyframes`
  from {
    transform: translateX(0) scaleX(0.2);
  }

  to {
	    transform: translateX(100%) scaleX(0.2);
	}
`;

const ProgressBarBar = styled.div`
	background-color: lime;
	height: 4px;
	transform-origin: left;
	transform: scaleX(${(ps) => ps.value / 100});
	transition: transform 0.3s ease;
	${(ps) =>
		ps.intermediate &&
		css`
			transition-property: none;
			animation: ${inter} 1s linear infinite;
		`};
`;

const ProgressBar = ({ value, intermediate }) => (
	<ProgressBarWrapper>
		{intermediate && <ProgressBarBar intermediate />}
		{!intermediate && <ProgressBarBar value={value} />}
	</ProgressBarWrapper>
);

class Content extends Component {
	state = {
		completed: 0,
	};

	componentDidMount() {
		this.timer = setInterval(this.progress, 300);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	progress = () => {
		const { completed } = this.state;
		if (completed === 100) {
			this.setState({ completed: 0 });
		} else {
			const diff = Math.random() * 10;
			this.setState({ completed: Math.min(completed + diff, 100) });
		}
	};

	render() {
		return (
			<Flex m={8} flexDirection="column">
				<Heading>ProgressBar demo</Heading>
				<Box my={4} width={1 / 2}>
					<ProgressBar value={this.state.completed} />
				</Box>
				<Box my={4} width={1 / 2}>
					<ProgressBar intermediate />
				</Box>
			</Flex>
		);
	}
}

Content.defaultProps = {};

Content.propTypes = {};

export default Content;
