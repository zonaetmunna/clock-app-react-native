import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Alarms = () => {
  const [alarms, setAlarms] = useState([
    { time: "08:00 AM", label: "Wake Up", repeat: "Everyday" },
    { time: "12:30 PM", label: "Lunch Time", repeat: "Weekdays" },
    { time: "06:00 PM", label: "Workout", repeat: "Never" },
  ]);

  const [isModalVisible, setModalVisible] = useState(false);
  const [newAlarm, setNewAlarm] = useState({ time: "", label: "", repeat: "" });

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const addAlarm = () => {
    setAlarms([...alarms, newAlarm]);
    setNewAlarm({ time: "", label: "", repeat: "" });
    toggleModal();
  };

  const removeAlarm = (index) => {
    const updatedAlarms = [...alarms];
    updatedAlarms.splice(index, 1);
    setAlarms(updatedAlarms);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Alarms</Text>
        <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.alarmContainer}>
        {alarms.map((alarm, index) => (
          <TouchableOpacity
            style={styles.alarmItem}
            key={index}
            onPress={() => removeAlarm(index)}
          >
            <View style={styles.alarmInfo}>
              <Text style={styles.alarmTime}>{alarm.time}</Text>
              <Text style={styles.alarmLabel}>{alarm.label}</Text>
            </View>
            <Text style={styles.alarmRepeat}>{alarm.repeat}</Text>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removeAlarm(index)}
            >
              <Ionicons name="trash" size={24} color="red" />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>

      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Add Alarm</Text>
          <TextInput
            style={styles.input}
            placeholder="Time"
            value={newAlarm.time}
            onChangeText={(text) => setNewAlarm({ ...newAlarm, time: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Label"
            value={newAlarm.label}
            onChangeText={(text) => setNewAlarm({ ...newAlarm, label: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Repeat"
            value={newAlarm.repeat}
            onChangeText={(text) => setNewAlarm({ ...newAlarm, repeat: text })}
          />
          <TouchableOpacity style={styles.addButton} onPress={addAlarm}>
            <Text style={styles.addButtonLabel}>Add</Text>
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
    backgroundColor: "#f2f2f2",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  addButton: {
    backgroundColor: "#007AFF",
    borderRadius: 20,
    padding: 8,
  },
  alarmContainer: {
    flex: 1,
  },
  alarmItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    elevation: 2,
  },
  alarmInfo: {
    flex: 1,
  },
  alarmTime: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginRight: 8,
  },
  alarmLabel: {
    fontSize: 16,
    color: "#666",
  },
  alarmRepeat: {
    fontSize: 16,
    color: "#999",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 16,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    color: "#333",
  },
  addButtonLabel: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  cancelButton: {
    backgroundColor: "red",
    borderRadius: 8,
    padding: 12,
  },
  cancelButtonLabel: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  removeButton: {
    marginLeft: 8,
  },
});

export default Alarms;
