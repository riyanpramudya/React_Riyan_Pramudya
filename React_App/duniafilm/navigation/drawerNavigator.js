import { createDrawerNavigator } from "@react-navigation/drawer";
import { StackNavigator, AboutStackNavigator } from "./stackNavigator";
import Home from "../screens/home";
import About from "../screens/about";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Home Page" component={StackNavigator} />
            <Drawer.Screen name="About Page" component={AboutStackNavigator} options={{ title: 'About Dunia Film', headerStyle: { backgroundColor: 'coral' }, headerTintColor: '#fff' }}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;