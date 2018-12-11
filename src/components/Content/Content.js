import React, { Component } from 'react';
import { Flex, Box, Heading } from 'rebass';
import cx from 'classnames';
import './ProgressBar.css';

const ProgressBar = ({ value }) => (
	<div className={cx('ProgressBar')}>
		<div className={cx('ProgressBar-bar')} style={{ transform: `scaleX(${value / 100})` }} />
	</div>
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
			</Flex>
		);
	}
}

Content.defaultProps = {};

Content.propTypes = {};

export default Content;
