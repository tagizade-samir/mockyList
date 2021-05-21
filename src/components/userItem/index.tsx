import { useNavigation } from '@react-navigation/core';
import React, { useMemo } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import UserIcon from '../../assets/svg/userIcon';
import { UserItem } from '../../modules/redux/users/types';
import { getColorByRating } from '../../services/UI';
import Utils from '../../utils';
import { getStyles } from './styles';

interface UserItemProps extends UserItem {
	index: number;
}

const UserItemCard: React.FC<UserItemProps> = ({
	full_name,
	rating,
	img,
	username,
	status,
	address: { city, country },
	id,
	index,
}) => {
	const styles = useMemo(() => getStyles(index), [index]);
	const navigation = useNavigation();

	return (
		<Pressable
			onPress={() =>
				navigation.navigate(Utils.ROUTES.DETAIL_SCREEN, { id })
			}
			style={[
				styles.container,
				{ backgroundColor: getColorByRating(rating) },
			]}>
			<View style={styles.top_part}>
				{img ? (
					<Image style={styles.image} source={{ uri: img }} />
				) : (
					<UserIcon />
				)}
				<View style={styles.name_container}>
					<Text style={styles.full_name}>{full_name}</Text>
					<Text style={styles.username}>@{username}</Text>
					<Text
						ellipsizeMode={'tail'}
						numberOfLines={1}
						style={styles.status}>
						{status}
					</Text>
				</View>
			</View>
			<View style={styles.bottom_part}>
				<Text style={styles.address}>
					{country}, {city}
				</Text>
				<Text style={styles.rating}>{rating}</Text>
			</View>
		</Pressable>
	);
};

export default UserItemCard;
