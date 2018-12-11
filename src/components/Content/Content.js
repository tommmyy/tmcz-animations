import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Button, Text } from 'rebass';
import CSSTransition from 'react-transition-group/CSSTransition';
import './Collapsible.css';

const Collapsible = ({ children, onToggleVisibility, open, ...rest }) => (
	<Box bg="lightgray" {...rest}>
		<Button onClick={() => onToggleVisibility(open)}>Toggle</Button>
		{open && children}
	</Box>
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
			<Box {...rest}>
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
