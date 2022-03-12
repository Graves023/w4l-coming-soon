import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import LocaleContext from '../context/LocaleContext';

export default function useLocales() {
	const router = useRouter();
	const { locale, setLocale } = useContext(LocaleContext)
	const handleLanguageSwitch = (newLang) => {
		console.log('newLang')
	}
	return {
		route: router.locale,
		handleLanguageSwitch,
	}
}