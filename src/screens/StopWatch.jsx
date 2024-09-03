import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useDarkMode from '../hooks/useDarkMode';

const StopWatch = () => {
	const { isDarkMode } = useDarkMode();
	const [time, setTime] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		let interval;

		if (isRunning) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 1);
			}, 10);
		}

		return () => clearInterval(interval);
	}, [isRunning]);

	const startStopwatch = () => {
		setIsRunning(true);
	};

	const pauseStopwatch = () => {
		setIsRunning(false);
	};

	const resetStopwatch = () => {
		setTime(0);
		setIsRunning(false);
	};

	const formatTime = (timeInMilliseconds) => {
		const minutes = Math.floor(timeInMilliseconds / 6000);
		const seconds = Math.floor((timeInMilliseconds % 6000) / 100);
		const milliseconds = (timeInMilliseconds % 6000) % 100;

		const formattedMinutes = String(minutes).padStart(2, '0');
		const formattedSeconds = String(seconds).padStart(2, '0');
		const formattedMilliseconds = String(milliseconds).padStart(2, '0');

		return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
	};

	return (
		<View style={[styles.container, isDarkMode && styles.darkContainer]}>
			<Text style={[styles.stopwatch, isDarkMode && styles.darkStopwatch]}>{formatTime(time)}</Text>

			<View style={styles.buttonsContainer}>
				{isRunning ? (
					<TouchableOpacity style={styles.button} onPress={pauseStopwatch}>
						<Text style={styles.buttonText}>Pause</Text>
					</TouchableOpacity>
				) : (
					<TouchableOpacity style={styles.button} onPress={startStopwatch}>
						<Text style={styles.buttonText}>Start</Text>
					</TouchableOpacity>
				)}

				<TouchableOpacity style={styles.button} onPress={resetStopwatch}>
					<Text style={styles.buttonText}>Reset</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default StopWatch;

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
	stopwatch: {
		fontSize: 72,
		fontWeight: 'bold',
		color: '#333',
		marginBottom: 40,
	},
	darkStopwatch: {
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
