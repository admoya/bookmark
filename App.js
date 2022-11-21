import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const books = [
    {
      title: 'test1',
      page: 34,
    },
    {
      title: 'test2',
      page: 36,
    }
  ]
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{fontSize: 48, position: 'absolute', top: 50}}>Bookmark</Text>
      <ScrollView>
        {books.map(({ title, page }) => (
          <View key={title} style={styles.listItem}>
            <Text>{title}: {page}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    padding: 10,
    height: 44,
  },
});
