import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MainScreen from '../../screens/mainScreen';
import Utils from '../../utils';
import DetailScreen from '../../screens/detailScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MainTab: React.FC<{}> = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={Utils.ROUTES.MAIN_SCREEN} component={MainScreen} />
            <Stack.Screen name={Utils.ROUTES.DETAIL_SCREEN} component={DetailScreen} />
        </Stack.Navigator>
    )
};
// const Tab = createMaterialTopTabNavigator();

// const MainTab: React.FC<{}> = () => {
//     return(
//         <Tab.Navigator tabBarOptions={{tabStyle: {display: 'none'}}} swipeEnabled={false} lazy={false}>
//             <Tab.Screen name={Utils.ROUTES.MAIN_SCREEN} component={MainScreen} />
//             <Tab.Screen name={Utils.ROUTES.DETAIL_SCREEN} component={DetailScreen} />
//         </Tab.Navigator>
//     )
// };

export default MainTab;
