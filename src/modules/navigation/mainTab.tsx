import React from 'react';
import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MainScreen from '../../screens/mainScreen';

const Tab = createMaterialTopTabNavigator();

const MainTab: React.FC<{}> = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name={'MainScreen'} component={MainScreen} />
        </Tab.Navigator>
    )
};

export default MainTab;
