import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Active from "../screens/Tabs/Active";
import Chat from "../screens/Tabs/Chat";
import Albumb from "../screens/Tabs/Albumb";
import Contact from "../screens/Tabs/Contact";
import  DrawerRouting  from "./Drawer";

const Tab = createBottomTabNavigator();

export const MyTabs=() => {
  return (
    <Tab.Navigator   screenOptions=
    {{ headerShown: true,
      tabBarShowLabel:false,
      tabBarActiveTintColor:'#2e3652',
      tabBarInactiveTintColor:'#909090'

    }}>
      <Tab.Screen name="MyDrawer" component={DrawerRouting} />
      <Tab.Screen name="Albumb" component={Albumb} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Contact" component={Contact} />
    </Tab.Navigator>
  );
}
