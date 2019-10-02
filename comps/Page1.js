import React from 'react';
import {View, Text, Image} from 'react-native';

function Page1(){
  return (
    <View>
      <Image
        source={{uri:"https://images.pexels.com/photos/1052150/pexels-photo-1052150.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}}
        style={{width:50, height:50}}
      />
    </View>
  )
}

export default Page1;
