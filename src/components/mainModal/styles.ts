import { StyleSheet } from 'react-native';

export const getStyles = () => {
	return StyleSheet.create({
		container: {
			width: '100%',
			backgroundColor: 'white',
			borderRadius: 10,
			padding: 10,
			alignItems: 'center',
		},
		header: {
			fontSize: 20,
			marginBottom: 10,
			fontWeight: 'bold',
		},
		cancel_button: {
			fontSize: 22,
		},
	});
};
