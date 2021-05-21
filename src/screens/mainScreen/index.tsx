import React, { useMemo } from 'react';
import { ScrollView, Text } from 'react-native';
import { useSelector } from 'react-redux';
import UserItemCard from '../../components/userItem';
import { selectUsersData } from '../../modules/redux/users/selectors';
import { getStyles } from './styles';

interface MainScreenProps {}

const MainScreen: React.FC<MainScreenProps> = props => {
	const styles = useMemo(() => getStyles(), []);
	const data = useSelector(selectUsersData);
	const content = useMemo(() => {
		return data.map(user => {
			return <UserItemCard key={user.id} {...user} />;
		});
	}, [data]);

	return (
		<ScrollView contentContainerStyle={styles.container}>
			{data?.length ? content : <Text>EMPTY YET</Text>}
		</ScrollView>
	);
};

export default MainScreen;
