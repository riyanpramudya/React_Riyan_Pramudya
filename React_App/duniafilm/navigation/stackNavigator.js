import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import About from '../screens/about';


const Stack = createNativeStackNavigator();


const StackNavigator = () => {
    const { toggleDrawer,closeDrawer,openDrawer } = useNavigation();
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Group>
                <Stack.Screen name='Home' component={Home} options={{headerLeft: () => (<MaterialIcons name="menu" size={28} color='white' onPress={toggleDrawer} />), title: 'Dunia Film', headerTitleAlign: 'center',headerStyle: { backgroundColor: 'coral' }, headerTintColor: '#fff' }}/>
                <Stack.Screen name='ReviewDetails' component={ReviewDetails} options={{ title: 'Review Details', headerTitleAlign: 'center',    headerStyle: { backgroundColor: 'coral' }, headerTintColor: '#fff' }} />
            </Stack.Group>
        </Stack.Navigator>
    );
}

const AboutStackNavigator = () => {
    const { toggleDrawer,closeDrawer,openDrawer } = useNavigation();
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name="About" component={About} options={{headerLeft: () => (<MaterialIcons name="menu" size={28} color='white' onPress={toggleDrawer} />), title: 'About Dunia Film', headerTitleAlign: 'center',headerStyle: { backgroundColor: 'coral' }, headerTintColor: '#fff' }} />
        </Stack.Navigator>
    )
}

export {StackNavigator, AboutStackNavigator};