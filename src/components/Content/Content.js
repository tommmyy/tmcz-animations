import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Card, Flex, Heading, Text } from 'rebass';
import styled from 'styled-components';

import CSSTransition from 'react-transition-group/CSSTransition';
import './Fade.css';
import './Collapse.css';

const Fade = ({ children, ...rest }) => (
	<CSSTransition classNames="Fade" unmountOnExit {...rest}>
		{children}
	</CSSTransition>
);

Fade.defaultProps = { timeout: 300 };

const Collapse = ({ children, ...rest }) => (
	<CSSTransition className="Collapse" unmountOnExit classNames="Collapse" {...rest}>
		{children}
	</CSSTransition>
);

Collapse.defaultProps = { timeout: 300 };

const Triangle = styled.div`
	display: inline-block;
	width: 0;
	height: 0;
	border-left: ${(ps) => ps.size}px solid transparent;
	border-right: ${(ps) => ps.size}px solid transparent;
	border-top: ${(ps) => ps.size * 2}px solid ${(ps) => ps.color};
	transform: ${(ps) => (ps.direction === 'top' ? 'rotate(180deg)' : 'rotate(0deg)')};
	transition: transform 0.3s ease-in;
	cursor: pointer;
`;
const Collapsible = ({ children, onToggleVisibility, open, ...rest }) => (
	<Card borderRadius={8} p={8} boxShadow="0 2px 6px rgba(0, 0, 0, 0.25)">
		<Flex flexDirection="column">
			<Box p={16} onClick={() => onToggleVisibility(open)} alignSelf="flex-end">
				<Triangle size={8} color="rgba(0, 0, 0, 0.25)" direction={open ? 'top' : 'bottom'} />
			</Box>
			<Collapse in={open}>
				{(state) => (
					<div>
						<Fade in={state === 'entered'}>
							<Box p={8}>{children}</Box>
						</Fade>
					</div>
				)}
			</Collapse>
		</Flex>
	</Card>
);

class Content extends Component {
	static propTypes = {
		children: PropTypes.node,
		className: PropTypes.string,
	};
	state = { open: false };

	onToggleVisibility = (isVisible) => this.setState({ open: !isVisible });

	render() {
		const { ...rest } = this.props;
		const { open } = this.state;

		return (
			<Card {...rest} borderColor="gray" borderRadius={8} width={1 / 2} p={16}>
				<Heading>Collapsible demo</Heading>

				<Collapsible m={8} open={open} onToggleVisibility={this.onToggleVisibility}>
					<Box>
						<Heading color="magenta">Heading</Heading>
						<Text>Content</Text>
					</Box>
				</Collapsible>
			</Card>
		);
	}
}

export default Content;
