import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import MainModal from '../../components/mainModal';
import UserItemCard from '../../components/userItem';
import { selectSort } from '../../modules/redux/app/selectors';
import { selectUsersData } from '../../modules/redux/users/selectors';
import { getStyles } from './styles';

interface MainScreenProps {}

const MainScreen: React.FC<MainScreenProps> = props => {
	const styles = useMemo(() => getStyles(), []);
	const data = useSelector(selectUsersData);
	const [isShown, setIsModalShown] = useState(false);
	const showModal = () => {
		setIsModalShown(true);
	};
	const sort = useSelector(selectSort);
	const content = useMemo(() => {
		if (sort.includes('from high to low')) {
			return data.sort((a, b) => b.rating - a.rating);
		} else if (sort.includes('from low to high')) {
			return data.sort((a, b) => a.rating - b.rating);
		} else {
			return data;
		}
	}, [sort]);
	const sortedContent = useMemo(() => {
		return content.map((user, index) => {
			return <UserItemCard key={user.id} {...user} index={index} />;
		});
	}, [data, sort]);

	return (
		<SafeAreaView style={{ alignItems: 'center', flex: 1 }}>
			<View style={styles.buttons_containers}>
				<Pressable style={styles.button} onPress={showModal}>
					<Text>Sort by</Text>
				</Pressable>
			</View>
			<ScrollView
				style={styles.container}
				contentContainerStyle={styles.content_container}>
				{data?.length ? sortedContent : <Text>EMPTY YET</Text>}
			</ScrollView>
			<MainModal
				isShown={isShown}
				setIsModalShown={setIsModalShown}
			/>
		</SafeAreaView>
	);
};

export default MainScreen;
