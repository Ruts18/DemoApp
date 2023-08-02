import React from 'react';
import { Image, StatusBar, Text, View } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar hidden={true} />
      <Image
        source={require('../assets/img/logo.jpg')}
        style={{ height: 100, width: 100, backgroundColor: 'white' }}
      />
      <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}>ToDoList</Text>
      <Text style={{ position: 'absolute', bottom: 20, color: 'gray' }}>
        Made with me
      </Text>
    </View>
  );
};

export default SplashScreen;
