import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Text } from 'rebass';

const Content = ({ ...rest }) => (
	<Box>
		<Heading>Hello</Heading>
		<Text>World</Text>
	</Box>
);

Content.defaultProps = {};

Content.propTypes = {};

export default Content;
