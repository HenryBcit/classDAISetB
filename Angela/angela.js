import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';


function angela(){
  return (
    <View>
      <Text>Hi I'm Angela</Text>
      <Image
      style={{width: 50, height: 50}}
      source={{uri: 'https://getalife.tv/wp-content/uploads/2018/10/say-hello.jpg'}}
      />
    </View>
  )
}


export default angela;
