import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, Image } from 'react-native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View  style={{backgroundColor:'#0f1010',flex:1}}>
      <Image
        source={require('../assets/img/wall7.jpg')}
        style={{ height: 400, width: 400 }}
        imageStyle={{
          opacity: 0.6,
          backgroundColor: 'black',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      />
      <Text style={{ fontSize: 30, color: '#a9c6df' }}>
        The best to-do list apps at a glance ; Habitica.
        Gamification of task management ...
      </Text>
      <View
        style={{
          backgroundColor: 'white',
          shadowColor: '#000',
          width: '70%',
          margin:70,
          borderRadius: 20, 
    overflow: 'hidden',
        }}
      >
        <Button
          title="Get Started"
          color="#2e939f"
          onPress={() => {
            navigation.navigate('Cards');
          }}
        
        />
      </View>
    </View>
  );
};

export default Home;
//install dimentions
//install linear gradient
//behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{}}