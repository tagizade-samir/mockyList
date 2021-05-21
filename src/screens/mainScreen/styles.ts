import { Dimensions, StatusBar, StyleSheet } from 'react-native';

export const getStyles = () => {
	return StyleSheet.create({
		container: {
			height: Dimensions.get('window').height - Number(StatusBar?.currentHeight),
		},
		content_container: {
			paddingHorizontal: 10,
			flexWrap: 'wrap',
			flexDirection: 'row',
			justifyContent: 'center',
			paddingVertical: 20,
		},
		buttons_containers: {
			width: '90%',
			justifyContent: 'center',
			alignItems: 'center',
			height: 40,
			marginTop: 20,
		},
		button: {
			borderWidth: 1,
			borderRadius: 5,
			paddingHorizontal: 40,
			paddingVertical: 10,
			backgroundColor: 'white',
			width: '100%',
			justifyContent: 'center',
			alignItems: 'center',
		}
	});
};
