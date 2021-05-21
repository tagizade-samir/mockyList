import React, { useMemo } from 'react';
import { Pressable, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { setSort } from '../../../modules/redux/app/actions';
import { getStyles } from './styles';

interface ModalButtonProps {
	text: string;
	setIsModalShown: Function;
}

const ModalButton: React.FC<ModalButtonProps> = ({ text, setIsModalShown }) => {
	const styles = useMemo(() => getStyles(), []);
	const dispatch = useDispatch();

	return (
		<Pressable
			style={styles.container}
			onPress={() => {
				setIsModalShown(false);
				dispatch(setSort(text));
			}}>
			<Text style={styles.text}>{text}</Text>
		</Pressable>
	);
};

export default ModalButton;
