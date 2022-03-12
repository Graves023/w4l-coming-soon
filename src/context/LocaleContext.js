import React from 'react';

const LocaleContext = React.createContext({
	locale: {
		lang: 'en',
		label: 'English',
		icon: 'us',
	},
	setLocale: () => {},
})

export default LocaleContext;