import {
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Alarms from "../screens/Alarms";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import StopWatch from "../screens/StopWatch";
import Timer from "../screens/Timer";
import { colors } from "../theme";
const THEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
    primary: "#007AFF",
  },
};

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const settingsStack = createNativeStackNavigator();
const AlarmsStack = createNativeStackNavigator();
const TimerStack = createNativeStackNavigator();
const StopWatchStack = createNativeStackNavigator();

function HomeStackScreens() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.primary },
        headerTitleAlign: "center",
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

function settingsStackScreens() {
  return (
    <settingsStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.primary },
        headerTitleAlign: "center",
      }}
    >
      <settingsStack.Screen name="Settings" component={Settings} />
    </settingsStack.Navigator>
  );
}

function AlarmsStackScreens() {
  return (
    <AlarmsStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.primary },
        headerTitleAlign: "center",
      }}
    >
      <AlarmsStack.Screen name="Alarms" component={Alarms} />
    </AlarmsStack.Navigator>
  );
}

function TimerStackScreens() {
  return (
    <TimerStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.primary },
        headerTitleAlign: "center",
      }}
    >
      <TimerStack.Screen name="Timer" component={Timer} />
    </TimerStack.Navigator>
  );
}

function StopWatchStackScreens() {
  return (
    <StopWatchStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.primary },
        headerTitleAlign: "center",
      }}
    >
      <StopWatchStack.Screen name="StopWatch" component={StopWatch} />
    </StopWatchStack.Navigator>
  );
}

function TabBarIcon({ fontFamily, name, color }) {
  if (fontFamily === "MaterialCommunityIcons") {
    return <MaterialCommunityIcons name={name} size={24} color={color} />;
  } else if (fontFamily === "Ionicons") {
    return <Ionicons name={name} size={24} color={color} />;
  } else if (fontFamily === "SimpleLineIcons") {
    return <SimpleLineIcons name={name} size={24} color={color} />;
  }
}

export default function Navigation() {
  return (
    <NavigationContainer theme={THEME}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.primary,
        }}
      >
        <Tab.Screen
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily={"MaterialCommunityIcons"}
                name="home"
                color={color}
              />
            ),
          }}
          name="HomeTab"
          component={HomeStackScreens}
        />
        <Tab.Screen
          options={{
            title: "Alarms",
            tabBarIcon: ({ color }) => (
              <TabBarIcon fontFamily={"Ionicons"} name="alarm" color={color} />
            ),
          }}
          name="AlarmsTab"
          component={AlarmsStackScreens}
        />

        <Tab.Screen
          options={{
            title: "Timer",
            tabBarIcon: ({ color }) => (
              <TabBarIcon fontFamily={"Ionicons"} name="timer" color={color} />
            ),
          }}
          name="TimerTab"
          component={TimerStackScreens}
        />

        <Tab.Screen
          options={{
            title: "StopWatch",
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily={"Ionicons"}
                name="stopwatch"
                color={color}
              />
            ),
          }}
          name="StopWatchTab"
          component={StopWatchStackScreens}
        />

        <Tab.Screen
          options={{
            title: "Settings",
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily={"Ionicons"}
                name="settings"
                color={color}
              />
            ),
          }}
          name="SettingsTab"
          component={settingsStackScreens}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
