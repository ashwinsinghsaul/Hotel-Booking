import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed'
import SearchResultsScreen from './src/screens/SearchResults'
import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestsScreen from './src/screens/Guests'
import Router from './src/navigation/Router'


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      <Router />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});
