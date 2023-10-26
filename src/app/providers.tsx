'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemeProvider, useTheme } from 'next-themes';
import {useEffect} from 'react'

const Providers = ({ children }: { children: React.ReactNode }) => {
    const {theme, setTheme} = useTheme()
	useEffect(() => {
		window.matchMedia('(prefers-color-scheme: dark)').matches
			? setTheme('light')
			: setTheme('dark');
	}, []);
    
	return (
        <NextThemeProvider attribute="class" defaultTheme={theme}>
            {children}
        </NextThemeProvider>
	);
};
export default Providers;
