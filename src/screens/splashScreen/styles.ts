import { StyleSheet, Dimensions } from 'react-native';

export const getStyles = () => {
	return StyleSheet.create({
		main_container: {
			flexDirection: 'column-reverse',
		},
		row_container: {
			width: '100%',
			height: Dimensions.get('window').height / 5,
		},
	});
};
