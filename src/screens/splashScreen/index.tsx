import React, { useEffect, useMemo, useRef } from 'react';
import { Animated, View } from 'react-native';
import { AppDispatch } from '../../modules/redux/store';
import { useDispatch } from 'react-redux';
import { setIsSplashShown } from '../../modules/redux/app/actions';
import { getMainDataSaga } from '../../modules/saga/getMainData/actions';
import { getStyles } from './styles';
import Utils from '../../utils';

interface SplashScreenProps {}

const SplashScreen: React.FC<SplashScreenProps> = props => {
	const dispatch: AppDispatch = useDispatch();
	const styles = useMemo(() => getStyles(), []);

	const animations = [
		useRef(new Animated.Value(0)).current,
		useRef(new Animated.Value(0)).current,
		useRef(new Animated.Value(0)).current,
		useRef(new Animated.Value(0)).current,
		useRef(new Animated.Value(0)).current,
	];

	const fadeIn = (animations: any) => {
		Animated.sequence(
			animations.map((anim: any) => {
				return Animated.timing(anim, {
					toValue: 1,
					duration: 500,
					useNativeDriver: true,
				});
			}),
		).start(() => {
			dispatch(setIsSplashShown(false));
		});
	};

	useEffect(() => {
		fadeIn(animations);
	}, []);

	const colors = [
		Utils.COLORS.rating_lowest,
		Utils.COLORS.rating_low,
		Utils.COLORS.rating_medium,
		Utils.COLORS.rating_high,
		Utils.COLORS.rating_highest,
	];

	useEffect(() => {
		dispatch(getMainDataSaga());
	}, []);

	return (
		<View style={styles.main_container}>
			{colors.map((color, index) => {
				return (
					<Animated.View
						key={color}
						style={[
							styles.row_container,
							{
								backgroundColor: color,
								opacity: animations[index],
							},
						]}
					/>
				);
			})}
		</View>
	);
};

export default SplashScreen;
