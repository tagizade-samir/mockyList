import { StyleSheet } from 'react-native';

export const getStyles = () => {
	return StyleSheet.create({
		container: {
			width: '100%',
			height: 180,
            marginTop: 20,
            borderRadius: 25,
            padding: 10,
            maxWidth: 400,
		},
        image: {
            height: 90,
            width: 90,
            marginBottom: 10,
        },
        top_part: {
            flex: 0.9,
            flexDirection: 'row',
        },
        bottom_part: {
            flex: 0.1,
            paddingHorizontal: 20,
            paddingBottom: 5,
        },
        address: {
            fontSize: 12,
            fontStyle: 'italic',
        },
        rating: {
            fontSize: 30,
            position: 'absolute',
            right: 20,
            bottom: 0
        },
        name_container: {
            flex: 1,
        },
        full_name: {
            fontSize: 18,
            fontWeight: 'bold',
        },
        username: {
            color: 'gray',
        },
        status: {
            lineHeight: 30,
            fontSize: 16,
        }
	});
};
