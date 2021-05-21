import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectIsSplashShown } from '../redux/app/selectors';
import MainTab from './mainTab';
import SplashScreen from '../../screens/splashScreen';

interface RootNavigationProps {}

const RootNavigation: React.FC<{}> = () => {
	const isSplashShown = useSelector(selectIsSplashShown);
	console.log(`isSplashShown`, isSplashShown)

	return (
		<>
			{isSplashShown ? (
				<SplashScreen />
			) : (
				<NavigationContainer>
					<MainTab />
				</NavigationContainer>
			)}
		</>
	);
};

export default RootNavigation;
