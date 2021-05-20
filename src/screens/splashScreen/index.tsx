import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import Utils from '../../utils';
import { AppDispatch } from '../../modules/redux/store';
import { useDispatch } from 'react-redux';
import { setIsSplashShown } from '../../modules/redux/app/actions';
import { getMainDataSaga } from '../../modules/saga/getMainData/actions';

interface SplashScreenProps {}

const SplashScreen: React.FC<SplashScreenProps> = props => {
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(getMainDataSaga());
        setTimeout(() => {
            dispatch(setIsSplashShown(false));
        }, 1000);
    }, []);

	return(
        <View>
            <Text>
                THIS IS SPLASH SCREEN
            </Text>
            {/* <LottieView source={require('../../assets/animations/splash.json')} autoPlay loop style={{width: 100, height: 100}} /> */}
        </View>
    );
};

export default SplashScreen;
