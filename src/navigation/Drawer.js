import React,{component} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feeds from '../screens/Drawers/Feed';
import Artical from '../screens/Drawers/Artical';
import { NavigationContainer, useNavigation , CommonActions} from '@react-navigation/native';



const Drawer = createDrawerNavigator();

export const Logout =() => {
    
}

export const  MyDrawer = (props) =>  {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Feed" component={Feeds} />
      <Drawer.Screen name="Article" component={Artical} />
      <Drawer.Screen name="Logout" component={Logout} />

    </Drawer.Navigator>
  );
}

const DrawerRouting = (props, navigation) => {
  
  return (
    <NavigationContainer independent={true}>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default DrawerRouting;