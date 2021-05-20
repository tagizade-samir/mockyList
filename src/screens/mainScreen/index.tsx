import * as React from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { selectUsersData } from '../../modules/redux/users/selectors';

interface MainScreenProps {}

const MainScreen: React.FC<MainScreenProps> = props => {
	const data = useSelector(selectUsersData);

	return <Text>Main screen</Text>;
};

export default MainScreen;
