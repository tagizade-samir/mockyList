import React from 'react';
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

export default MainTab;
