import { StyleSheet } from 'react-native';

export const getStyles = () => {
	return StyleSheet.create({
		container: {
			padding: 5,
			flexDirection: 'row',
		},
		center_container: {
			flex: 0.7,
			justifyContent: 'center',
			alignItems: 'center',
		},
		button_container: {
			flex: 0.15,
			justifyContent: 'center',
			alignItems: 'center',
		},
		fullname: {
			fontSize: 18,
			fontWeight: 'bold',
		},
		username: {
			color: 'black',
			textDecorationLine: 'underline',
		},
		rating: {
			fontSize: 34,
		},
	});
};
