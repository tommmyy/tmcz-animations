import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Card, Heading, Button, Text } from 'rebass';
import CSSTransition from 'react-transition-group/CSSTransition';
import './Collapsible.css';

const Collapsible = ({ children, onToggleVisibility, open, ...rest }) => (
	<Card boxShadow="0 0 6px rgba(0, 0, 0, .25)" p={16} {...rest}>
		<Box>
			<Button onClick={() => onToggleVisibility(open)}>Toggle</Button>
		</Box>
		<CSSTransition in={open} classNames="Collapsible" unmountOnExit timeout={300}>
			{children}
		</CSSTransition>
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
			<Box width={1 / 2} {...rest}>
				<Heading>Collapsible demo</Heading>

				<Collapsible my={8} open={open} onToggleVisibility={this.onToggleVisibility}>
					<Box>
						<Heading color="magenta">Heading</Heading>
						<Text>Content</Text>
					</Box>
				</Collapsible>
			</Box>
		);
	}
}

export default Content;
