import React, { useState } from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  Keyboard,  ScrollView,

  TextInput,
  TouchableOpacity,
} from 'react-native';
import Task from './Task';

const AddList = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  
  const handleAddTask = () => {
    // Keyboard.dismiss();
    if (task.trim() !== '') {
      const currentTime = new Date().toLocaleTimeString(); 
      setTaskItems([(task + ' - ' + currentTime), ...taskItems]);
      setTask(null);
    }
  };

  return (
    <View style={{backgroundColor:'#0f1010',flex:1}}>
    <KeyboardAvoidingView>
    <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            padding: 10,
            marginLeft: 90,
            color: '#a9c6df',
          }}
        >
          Things to Get Done
        </Text>
    <View
      style={{
        flexDirection: 'row', // Set flexDirection to 'row'
        alignItems: 'center',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'rgba(227, 237, 255, 1) 53%',
        borderRadius: 10,
        width: '95%',
        marginBottom: 20,
        marginTop: 10,
        width: 355,
        backgroundColor: 'white',
        shadowColor: '#ffffff',
        shadowOffset: { width: 2, height: 7 },
        shadowOpacity: 0.4,
        marginLeft: 15,
        shadowRadius: 4,
        elevation: 5,
      }}
    >
      <TextInput
        style={{ fontSize: 20, flex: 1 }} // Added flex: 1 to allow the TextInput to take available space
        placeholder={'your task to do'}
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <TouchableOpacity onPress={() => handleAddTask()}>
        <View>
          <Text style={{ fontSize: 35, fontWeight: 'bold', paddingLeft: 10 }}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  </KeyboardAvoidingView>
      <View style={{}}>
        <View>
          {taskItems.map((item, index) => {
            return <Task key={index} text={item} />;
          })}
        </View>
      </View>      
    </View>
  );
};

export default AddList;

