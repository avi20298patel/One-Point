import { SafeAreaView } from 'react-native';
import Navigation from './src/navigation';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 3 }}>
      <StatusBar
        backgroundColor={'#fff'}
        barStyle={'dark-content'}
        className="p-2"
      />
      <Navigation />
    </SafeAreaView>
    // <Navigation />
  );
}