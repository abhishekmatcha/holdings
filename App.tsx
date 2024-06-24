import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Routes from './src/routes';

const App = () => {

  return (
      <SafeAreaView style={styles.flex1}>
        <Routes />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
});

export default App;
