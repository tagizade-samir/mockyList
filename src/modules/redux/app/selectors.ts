import { AppStore } from '../types';

export const selectIsSplashShown = (state: AppStore): boolean => state.app.isSplashShown;