import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Cards = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex:1, flexDirection: 'row',backgroundColor:'#000' }}>
    <TouchableOpacity onPress={() => {
      navigation.navigate('AddList');
    }}>
      <LinearGradient
        colors={[
          '#4ca6f7',
          '#4ca6f7',
        ]}
        style={{
          paddingHorizontal: 10,
          paddingVertical: 20,
          marginLeft: 7,
          borderRadius: 10,
          width: 180,
          height:200,
          marginTop: 200,
          opacity: 0.6,
          shadowColor: "#000000",
          shadowOffset: {
            width: 10,
            height: 71,
          },
          shadowOpacity: 0.57,
          shadowRadius: 15.19,
          justifyContent:'center',
          alignItems:'center',
          elevation: 23,
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}     
      >
        <Text style={{ fontSize: 20 ,color:'white',justifyContent:'center'}}>Add ToDoList</Text>
      </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity>
      <LinearGradient
        colors={['#5ef2c8', '#5ef2c8']}
        style={{
          paddingHorizontal: 10,
          paddingVertical: 20,
          marginLeft: 7,
          borderRadius: 10, 
          width: 180,
          height:200,
          marginTop: 200,
          opacity: 0.6,
          shadowColor: "#000000",
          justifyContent:'center',
          alignItems:'center',
shadowOffset: {
	width: 10,
	height: 71,
},
shadowOpacity: 0.57,
shadowRadius: 15.19,

elevation: 23,
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={{ fontSize: 20,color:'white' }}>Edit ToDooList</Text>
      </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Cards;
