import React from 'react';
import { Provider } from 'react-redux';
import RootNavigation from './modules/navigation/rootNav';
import { store } from './modules/redux/store';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);

const App: React.FC<{}> = () => {
	return (
		<Provider store={store}>
			<RootNavigation />
		</Provider>
	);
};

export default App;
