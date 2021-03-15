import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Splash, Login, Register } from '../pages'
// import { BottomNavigator } from '../components'; 

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

// const MainApp = () => {
//     return (
//         <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
//             <Tab.Screen name="Home" component={Home} />
//             <Tab.Screen name="Search" component={Search} />
//             <Tab.Screen name="Portofolio" component={Portofolio} />
//             <Tab.Screen name="Transaction" component={Transaction} />
//             <Tab.Screen name="News" component={News} />
//         </Tab.Navigator>
//     )
// }

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash}  options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={Login}  options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={Register}  options={{headerShown: false}}/>
            {/* <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}}/> */}
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
