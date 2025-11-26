import { Platform, StyleSheet, Text } from 'react-native';
import PokemonCard from './components/PokemonCard';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PokemonCard/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS ==="android"? 25 :0
  },
});
