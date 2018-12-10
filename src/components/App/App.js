import React, { Fragment } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Content from '../Content';
import theme from './theme';

const GlobalStyle = createGlobalStyle({
	body: {
		margin: 0,
		padding: 0,
	},
});

const App = () => (
	<ThemeProvider theme={theme}>
		<Fragment>
			<Content />
			<GlobalStyle />
		</Fragment>
	</ThemeProvider>
);

export default App;
