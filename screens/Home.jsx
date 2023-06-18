import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateClock = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      setCurrentTime(
        `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`
      );
    }, 1000);

    return () => clearInterval(updateClock);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };
  return (
    <View style={styles.container}>
      <View style={styles.clockContainer}>
        <View style={styles.clock}>
          <Text style={styles.clockText}>{currentTime}</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  clockContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
  },
  clock: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
  },
  clockText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#ffffff",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
