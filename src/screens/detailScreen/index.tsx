import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useMemo } from 'react';
import {
	Image,
	Linking,
	Pressable,
	ScrollView,
	Text,
	View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import UserIcon from '../../assets/svg/userIcon';
import MainHeader from '../../components/mainHeader';
import { selectUser } from '../../modules/redux/users/selectors';
import { getColorByRating, getDate, onPressLinking } from '../../services/UI';
import { getStyles } from './styles';

interface DetailScreenProps {}

const DetailScreen: React.FC<DetailScreenProps> = props => {
	const route = useRoute();
	const navigation = useNavigation();
	const id = route?.params?.id || 0;
	const currentUser = useSelector(selectUser(id));
	const styles = useMemo(() => getStyles(), []);
	const date = new Date(parseInt(currentUser?.work.start_date));
	const emailUrl = `mailto:${currentUser?.email}`;
	const phoneUrl = `tel:${currentUser?.phone_number}`;

	return (
		<SafeAreaView style={{flex: 1}}>
			<ScrollView
				style={[
					styles.container,
					{ backgroundColor: getColorByRating(currentUser?.rating) },
				]}>
				<MainHeader
					fullname={currentUser?.full_name}
					username={currentUser?.username}
					rating={currentUser?.rating}
					onPress={() => navigation.canGoBack() && navigation.goBack()}
				/>
				<View style={styles.user_container}>
					<View style={styles.img_container}>
						{currentUser?.img ? (
							<Image
								style={styles.image}
								source={{ uri: currentUser?.img }}
							/>
						) : (
							<UserIcon />
						)}
					</View>
					<View style={styles.desc_container}>
						<Text style={styles.status}>{currentUser?.status}</Text>
						<Text style={styles.description}>{currentUser?.desc}</Text>
						<Text style={styles.work}>
							Currently working in {currentUser?.work.company} as a{' '}
							{currentUser?.work.position} from {getDate(date)} in the{' '}
							{currentUser?.work.department} department
						</Text>
					</View>
					<View style={styles.separator} />
					<View style={styles.info_container}>
						<View style={styles.info_row}>
							<Text>Email: </Text>
							<Pressable onPress={() => onPressLinking(emailUrl)}>
								<Text style={styles.info_row_text}>{currentUser?.email}</Text>
							</Pressable>
						</View>
						<View style={styles.info_row}>
							<Text>Phone: </Text>
							<Pressable onPress={() => onPressLinking(phoneUrl)}>
								<Text style={styles.info_row_text}>{currentUser?.phone_number}</Text>
							</Pressable>
						</View>
						<Text>
							{currentUser?.address.country},{' '}
							{currentUser?.address.city} city
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default DetailScreen;
