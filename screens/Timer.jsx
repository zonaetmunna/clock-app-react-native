import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useDarkMode from '../src/hooks/useDarkMode';

const Timer = () => {
	const { isDarkMode } = useDarkMode();
	const [time, setTime] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		let interval;

		if (isRunning) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 1);
			}, 1000);
		}

		return () => clearInterval(interval);
	}, [isRunning]);

	const startTimer = () => {
		setIsRunning(true);
	};

	const pauseTimer = () => {
		setIsRunning(false);
	};

	const resetTimer = () => {
		setTime(0);
		setIsRunning(false);
	};

	const formatTime = (timeInSeconds) => {
		const minutes = Math.floor(timeInSeconds / 60);
		const seconds = timeInSeconds % 60;

		const formattedMinutes = String(minutes).padStart(2, '0');
		const formattedSeconds = String(seconds).padStart(2, '0');

		return `${formattedMinutes}:${formattedSeconds}`;
	};

	return (
		<View style={[styles.container, isDarkMode && styles.darkContainer]}>
			<Text style={[styles.timer, isDarkMode && styles.darkTimer]}>{formatTime(time)}</Text>

			<View style={styles.buttonsContainer}>
				{isRunning ? (
					<TouchableOpacity style={styles.button} onPress={pauseTimer}>
						<Text style={styles.buttonText}>Pause</Text>
					</TouchableOpacity>
				) : (
					<TouchableOpacity style={styles.button} onPress={startTimer}>
						<Text style={styles.buttonText}>Start</Text>
					</TouchableOpacity>
				)}

				<TouchableOpacity style={styles.button} onPress={resetTimer}>
					<Text style={styles.buttonText}>Reset</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Timer;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f2f2f2',
	},
	darkContainer: {
		backgroundColor: '#121212',
	},
	timer: {
		fontSize: 72,
		fontWeight: 'bold',
		color: '#333',
		marginBottom: 40,
	},
	darkTimer: {
		color: '#ffffff',
	},
	buttonsContainer: {
		flexDirection: 'row',
	},
	button: {
		backgroundColor: '#007AFF',
		borderRadius: 8,
		paddingVertical: 12,
		paddingHorizontal: 20,
		marginHorizontal: 8,
	},
	buttonText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'white',
	},
});
