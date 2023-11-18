import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import Navigation from './src/navigation';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 3 }}>
        <StatusBar
          backgroundColor={'#fff'}
          barStyle={'dark-content'}
          className="p-2"
        />
        <Navigation />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}