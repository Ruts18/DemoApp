import React from 'react';
import {Text, View} from 'react-native';

const Task = props => {
  return (
    <View
      style={{
        backgroundColor: '#0b3455',
        padding: 15,
        borderRadius: 7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginLeft: 15,
        marginRight: 15,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 9,
        },
        shadowOpacity: 0.22,
        shadowRadius: 10.24,
        elevation: 12,
      }}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
          
          }}>
      
          <Text style={ {fontSize: 17, maxWidth: '100%',color:'#b3d1ea'}}>{props.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default Task;
