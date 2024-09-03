import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useDarkMode from '../hooks/useDarkMode';

const Settings = () => {
	const { isDarkMode, toggleDarkMode } = useDarkMode();

	const handleLogout = () => {
		// Implement logout functionality
	};

	const handleNotificationToggle = () => {
		// Implement notification toggle functionality
	};

	const handleDarkModeToggle = () => {
		toggleDarkMode();
	};

	return (
		<View style={[styles.container, isDarkMode && styles.darkContainer]}>
			{/* Profile Section */}
			<View style={styles.profileSection}>
				<Image
					source={{ uri: 'https://example.com/profile-picture.jpg' }} // Replace with actual image source
					style={styles.profileImage}
				/>
				<Text style={[styles.profileName, isDarkMode && styles.darkProfileText]}>John Doe</Text>
				<Text style={[styles.profileEmail, isDarkMode && styles.darkProfileText]}>
					johndoe@example.com
				</Text>
			</View>

			{/* Settings Items */}
			<TouchableOpacity style={styles.item} onPress={handleNotificationToggle}>
				<Text style={[styles.itemText, isDarkMode && styles.darkItemText]}>
					Enable Notifications
				</Text>
				<Ionicons
					name='ios-notifications'
					size={24}
					color={isDarkMode ? '#fff' : '#333'}
					style={styles.itemIcon}
				/>
			</TouchableOpacity>

			<TouchableOpacity style={styles.item} onPress={handleDarkModeToggle}>
				<Text style={[styles.itemText, isDarkMode && styles.darkItemText]}>Dark Mode</Text>
				<Ionicons
					name='ios-moon'
					size={24}
					color={isDarkMode ? '#fff' : '#333'}
					style={styles.itemIcon}
				/>
			</TouchableOpacity>

			<TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
				<Text style={styles.logoutButtonText}>Logout</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Settings;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f2f2f2',
		paddingVertical: 10,
		paddingHorizontal: 20,
	},
	darkContainer: {
		backgroundColor: '#333',
	},
	profileSection: {
		alignItems: 'center',
		marginBottom: 32,
	},
	profileImage: {
		width: 80,
		height: 80,
		borderRadius: 40,
		marginBottom: 16,
	},
	profileName: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#333',
	},
	profileEmail: {
		fontSize: 16,
		color: '#666',
	},
	darkProfileText: {
		color: '#fff',
	},
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 16,
	},
	itemText: {
		fontSize: 18,
		color: '#333',
		flex: 1,
	},
	darkItemText: {
		color: '#fff',
	},
	itemIcon: {
		marginLeft: 16,
	},
	logoutButton: {
		backgroundColor: '#007AFF',
		borderRadius: 8,
		padding: 12,
		alignSelf: 'center',
		marginTop: 40,
	},
	logoutButtonText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
	},
});
