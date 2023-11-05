import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Welcome,
  CustomerHome,
  CultivationHome,
  InventoryHome,
  DriverHome,
  OrderPage,
  StockHome,
  WareHouses,
  ViewDetails,
  AddDamge,
  UpdateItem,
} from "./screens";

import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CustomerHome"
          component={CustomerHome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CultivationHome"
          component={CultivationHome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="InventoryHome"
          component={InventoryHome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DriverHome"
          component={DriverHome}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="OrderPage"
          component={OrderPage}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="StockHome"
          component={StockHome}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="WareHouses"
          component={WareHouses}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="ViewDetails"
          component={ViewDetails}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="AddDamge"
          component={AddDamge}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="UpdateItem"
          component={UpdateItem}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
