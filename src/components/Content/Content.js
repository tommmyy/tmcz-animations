import React, { Component } from 'react';
import { Box, Heading, Button } from 'rebass';
import cx from 'classnames';
import './Animation.css';

const Animation = ({ checked }) => <div className={cx('Animation', { 'Animation--checked': checked })} />;

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
