import React, { useMemo, useState } from 'react';
import { GestureResponderEvent, Pressable, Text, View } from 'react-native';
import BackIcon from '../../assets/svg/backIcon';
import { getStyles } from './styles';

interface MainHeaderProps {
	fullname: string;
	username: string;
	rating: number;
    onPress: (event: GestureResponderEvent) => void;
}

const MainHeader: React.FC<MainHeaderProps> = ({
	fullname,
	username,
	rating,
    onPress,
}) => {
	const styles = useMemo(() => getStyles(), []);
	const [pressColor, setPressColor] = useState('#000');

	return (
		<View style={styles.container}>
			<Pressable
                onPress={onPress}
				onPressIn={() => setPressColor('gray')}
				onPressOut={() => setPressColor('#000')}
				style={styles.button_container}>
				<BackIcon color={pressColor} />
			</Pressable>
			<View style={styles.center_container}>
				<Text style={styles.fullname}>{fullname}</Text>
				<Text style={styles.username}>@{username}</Text>
			</View>
			<View style={styles.button_container}>
				<Text style={styles.rating}>{rating}</Text>
			</View>
		</View>
	);
};

export default MainHeader;
