import { StyleSheet } from 'react-native';

export const getStyles = () => {
	return StyleSheet.create({
		container: {
			alignItems: 'center',
			width: '70%',
			paddingVertical: 5,
			marginBottom: 10,
			borderWidth: 1,
		},
		text: {
			fontSize: 18,
			fontStyle: 'italic',
		},
	});
};
