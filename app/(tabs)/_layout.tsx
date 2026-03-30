import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#4f46e5", // colore tab attiva
        tabBarInactiveTintColor: "#888", // colore tab inattiva
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0.5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: "Prodotti", tabBarIcon: () => <Text>🛍️</Text> }}
      />
      <Tabs.Screen
        name="preferiti"
        options={{
          title: "Preferiti",
          tabBarIcon: () => <Text>⭐</Text>,
        }}
      />
      <Tabs.Screen
        name="profilo"
        options={{
          title: "Profilo",
          tabBarIcon: () => <Text>👤</Text>,
        }}
      />
    </Tabs>
  );
}
