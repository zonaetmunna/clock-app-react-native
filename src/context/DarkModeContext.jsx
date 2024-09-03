import React, { createContext, useEffect, useState } from 'react';

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const loadDarkModeSetting = () => {
			try {
				const storedValue = localStorage.getItem('darkMode');
				if (storedValue !== null) {
					setIsDarkMode(JSON.parse(storedValue));
				}
			} catch (error) {
				console.error('Failed to load dark mode setting:', error);
			}
		};
		loadDarkModeSetting();
	}, []);

	const toggleDarkMode = () => {
		try {
			const newValue = !isDarkMode;
			setIsDarkMode(newValue);
			localStorage.setItem('darkMode', JSON.stringify(newValue));
		} catch (error) {
			console.error('Failed to save dark mode setting:', error);
		}
	};

	return (
		<DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
};
