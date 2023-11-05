import Shop from "../CustomerNavigation/Shop";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

const Tab = createBottomTabNavigator();

export default function BusHomePage() {
  return (
    <Tab.Navigator
      initialRouteName="CustomerHome"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          title: "Shop",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="store" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
