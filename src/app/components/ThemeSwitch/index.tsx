'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeSwitch = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
			swicth to {theme === 'dark' ? 'light' : 'dark'} theme
		</button>
	);
};
export default ThemeSwitch;
