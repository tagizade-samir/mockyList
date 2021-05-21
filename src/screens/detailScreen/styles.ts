import { StyleSheet } from 'react-native';

export const getStyles = () => {
	return StyleSheet.create({
		container: {
			flex: 1,
		},
		user_container: {
			flex: 1,
			padding: 20,
		},
		img_container: {
			alignSelf: 'center',
			marginBottom: 20,
		},
		image: {
			width: 150,
			height: 150,
			alignSelf: 'center',
		},
		desc_container: {
			flex: 1,
		},
		status: {
			fontSize: 26,
			fontStyle: 'italic',
		},
		work: {
			fontSize: 16,
			fontStyle: 'italic',
		},
		description: {
			fontSize: 16,
			color: 'black',
		},
		separator: {
			width: '95%',
			alignSelf: 'center',
			height: 1,
			backgroundColor: 'black',
			marginVertical: 25,
		},
		info_container: {
			flex: 1,
		},
		info_row: {
			flexDirection: 'row',
		},
		info_row_text: {
			textDecorationLine: 'underline',
		},
	});
};
