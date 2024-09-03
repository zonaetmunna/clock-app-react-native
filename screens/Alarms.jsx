import { Ionicons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';

import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import useDarkMode from '../src/hooks/useDarkMode'; // Adjust the import path as necessary

const Alarms = () => {
	const { isDarkMode } = useDarkMode();
	const [alarms, setAlarms] = useState([
		{ time: '08:00 AM', label: 'Wake Up', repeat: 'Everyday' },
		{ time: '12:30 PM', label: 'Lunch Time', repeat: 'Weekdays' },
		{ time: '06:00 PM', label: 'Workout', repeat: 'Never' },
	]);

	const [isModalVisible, setModalVisible] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [editIndex, setEditIndex] = useState(null);
	const [newAlarm, setNewAlarm] = useState({ time: '', label: '', repeat: '' });

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	const addAlarm = () => {
		if (isEditing && editIndex !== null) {
			const updatedAlarms = [...alarms];
			updatedAlarms[editIndex] = newAlarm;
			setAlarms(updatedAlarms);
		} else {
			setAlarms([...alarms, newAlarm]);
		}
		setNewAlarm({ time: '', label: '', repeat: '' });
		setIsEditing(false);
		setEditIndex(null);
		toggleModal();
	};

	const removeAlarm = (index) => {
		const updatedAlarms = [...alarms];
		updatedAlarms.splice(index, 1);
		setAlarms(updatedAlarms);
	};

	const editAlarm = (index) => {
		const alarmToEdit = alarms[index];
		setNewAlarm(alarmToEdit);
		setEditIndex(index);
		setIsEditing(true);
		toggleModal();
	};

	return (
		<View style={[styles.container, isDarkMode && styles.darkContainer]}>
			<View style={styles.header}>
				<Text style={[styles.title, isDarkMode && styles.darkTitle]}>Alarms</Text>
				<TouchableOpacity style={styles.addButton} onPress={toggleModal}>
					<Ionicons name='add' size={24} color='white' />
				</TouchableOpacity>
			</View>

			<View style={styles.alarmContainer}>
				{alarms.map((alarm, index) => (
					<View style={[styles.alarmItem, isDarkMode && styles.darkAlarmItem]} key={index}>
						<View style={styles.alarmInfo}>
							<Text style={[styles.alarmTime, isDarkMode && styles.darkAlarmTime]}>
								{alarm.time}
							</Text>
							<Text style={[styles.alarmLabel, isDarkMode && styles.darkAlarmLabel]}>
								{alarm.label}
							</Text>
						</View>
						<Text style={[styles.alarmRepeat, isDarkMode && styles.darkAlarmRepeat]}>
							{alarm.repeat}
						</Text>
						<View style={styles.iconContainer}>
							<TouchableOpacity style={styles.editButton} onPress={() => editAlarm(index)}>
								<Feather name='edit' size={24} color={isDarkMode ? 'white' : '#007AFF'} />
							</TouchableOpacity>
							<TouchableOpacity style={styles.removeButton} onPress={() => removeAlarm(index)}>
								<Ionicons name='trash' size={24} color='red' />
							</TouchableOpacity>
						</View>
					</View>
				))}
			</View>

			<Modal visible={isModalVisible} animationType='slide'>
				<View style={[styles.modalContainer, isDarkMode && styles.darkModalContainer]}>
					<Text style={[styles.modalTitle, isDarkMode && styles.darkModalTitle]}>
						{isEditing ? 'Edit Alarm' : 'Add Alarm'}
					</Text>
					<TextInput
						style={[styles.input, isDarkMode && styles.darkInput]}
						placeholder='Time'
						placeholderTextColor={isDarkMode ? '#aaa' : '#666'}
						value={newAlarm.time}
						onChangeText={(text) => setNewAlarm({ ...newAlarm, time: text })}
					/>
					<TextInput
						style={[styles.input, isDarkMode && styles.darkInput]}
						placeholder='Label'
						placeholderTextColor={isDarkMode ? '#aaa' : '#666'}
						value={newAlarm.label}
						onChangeText={(text) => setNewAlarm({ ...newAlarm, label: text })}
					/>
					<TextInput
						style={[styles.input, isDarkMode && styles.darkInput]}
						placeholder='Repeat'
						placeholderTextColor={isDarkMode ? '#aaa' : '#666'}
						value={newAlarm.repeat}
						onChangeText={(text) => setNewAlarm({ ...newAlarm, repeat: text })}
					/>
					<TouchableOpacity style={styles.addButton} onPress={addAlarm}>
						<Text style={styles.addButtonLabel}>{isEditing ? 'Save Changes' : 'Add'}</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.cancelButton} onPress={toggleModal}>
						<Text style={styles.cancelButtonLabel}>Cancel</Text>
					</TouchableOpacity>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f2f2f2',
		padding: 16,
	},
	darkContainer: {
		backgroundColor: '#121212',
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 24,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#333',
	},
	darkTitle: {
		color: '#ffffff',
	},
	addButton: {
		backgroundColor: '#007AFF',
		borderRadius: 20,
		padding: 8,
	},
	alarmContainer: {
		flex: 1,
	},
	alarmItem: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',
		borderRadius: 8,
		padding: 12,
		marginBottom: 16,
		elevation: 2,
	},
	darkAlarmItem: {
		backgroundColor: '#1f1f1f',
	},
	alarmInfo: {
		flex: 1,
	},
	alarmTime: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#333',
		marginRight: 8,
	},
	darkAlarmTime: {
		color: '#ffffff',
	},
	alarmLabel: {
		fontSize: 16,
		color: '#666',
	},
	darkAlarmLabel: {
		color: '#aaaaaa',
	},
	alarmRepeat: {
		fontSize: 16,
		color: '#999',
	},
	darkAlarmRepeat: {
		color: '#bbbbbb',
	},
	iconContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	editButton: {
		marginRight: 8,
	},
	modalContainer: {
		flex: 1,
		backgroundColor: '#f2f2f2',
		padding: 16,
	},
	darkModalContainer: {
		backgroundColor: '#121212',
	},
	modalTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#333',
		marginBottom: 16,
	},
	darkModalTitle: {
		color: '#ffffff',
	},
	input: {
		backgroundColor: 'white',
		borderRadius: 8,
		padding: 12,
		marginBottom: 16,
		fontSize: 16,
		color: '#333',
	},
	darkInput: {
		backgroundColor: '#1f1f1f',
		color: '#ffffff',
	},
	addButtonLabel: {
		fontSize: 16,
		color: 'white',
		textAlign: 'center',
	},
	cancelButton: {
		backgroundColor: 'red',
		borderRadius: 8,
		padding: 12,
	},
	cancelButtonLabel: {
		fontSize: 16,
		color: 'white',
		textAlign: 'center',
	},
	removeButton: {
		marginLeft: 8,
	},
});

export default Alarms;
