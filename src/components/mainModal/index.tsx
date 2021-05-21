import React, { useMemo } from 'react';
import { Pressable, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import ModalButton from './modalButton';
import { getStyles } from './styles';

interface MainModalProps {
	isShown: boolean;
	setIsModalShown: Function;
}

const MainModal: React.FC<MainModalProps> = ({
	isShown,
	setIsModalShown,
}) => {
	const styles = useMemo(() => getStyles(), []);

	return (
		<View>
			<Modal
				isVisible={isShown}
				onBackdropPress={() => setIsModalShown(false)}>
				<View style={styles.container}>
					<>
						<Text style={styles.header}>Sort by: </Text>
                        <ModalButton text={'Rating from high to low'} setIsModalShown={setIsModalShown} />
                        <ModalButton text={'Rating from low to high'} setIsModalShown={setIsModalShown} />
					</>
					<Pressable onPress={() => setIsModalShown(false)}>
						<Text style={styles.cancel_button}>Cancel</Text>
					</Pressable>
				</View>
			</Modal>
		</View>
	);
};

export default MainModal;
