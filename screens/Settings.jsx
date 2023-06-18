import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Settings = () => {
  const handleLogout = () => {
    // Implement logout functionality
  };

  const handleNotificationToggle = () => {
    // Implement notification toggle functionality
  };

  const handleDarkModeToggle = () => {
    // Implement dark mode toggle functionality
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={handleNotificationToggle}>
        <Text style={styles.itemText}>Enable Notifications</Text>
        <Ionicons
          name="ios-notifications"
          size={24}
          color="#333"
          style={styles.itemIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={handleDarkModeToggle}>
        <Text style={styles.itemText}>Dark Mode</Text>
        <Ionicons
          name="ios-moon"
          size={24}
          color="#333"
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
    backgroundColor: "#f2f2f2",
    padding: 16,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  itemText: {
    fontSize: 18,
    color: "#333",
    flex: 1,
  },
  itemIcon: {
    marginLeft: 16,
  },
  logoutButton: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    padding: 12,
    alignSelf: "center",
    marginTop: 40,
  },
  logoutButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
