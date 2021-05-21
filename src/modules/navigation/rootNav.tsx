import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectIsSplashShown } from '../redux/app/selectors';
import SplashScreen from '../../screens/splashScreen';
import MainStack from './mainStack';

interface RootNavigationProps {}

const RootNavigation: React.FC<{}> = () => {
	const isSplashShown = useSelector(selectIsSplashShown);

	return (
		<>
			{isSplashShown ? (
				<SplashScreen />
			) : (
				<NavigationContainer>
					<MainStack />
				</NavigationContainer>
			)}
		</>
	);
};

export default RootNavigation;
