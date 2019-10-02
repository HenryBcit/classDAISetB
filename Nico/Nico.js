import React from 'react';
import {View, Text, Image} from 'react-native';

function Nico(){
  return (
    <View>
      <Text>Hello, I am Nico</Text>
      <Image
        style={{width:100,height:100}}
        source={{uri: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiVysyB-v3kAhWlHTQIHUyJCgsQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fbridge-clouds-cloudy-dark-clouds-556416%2F&psig=AOvVaw0M27a4bjIqIPQCMSWUlZlX&ust=1570118666031632'}}
      />
    </View>
  )
}

export default Nico;
