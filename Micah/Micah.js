import React from 'react';
import { View, Text, Image } from 'react-native';

const Micah = () => {
  return (
    <View>
      <Text>Hi it's Micah :)</Text>
      <Image
        style={{ width: 200, height: 200 }}
        source={{ uri: 'https://i.pinimg.com/originals/6b/8c/70/6b8c70082f8c16342c0d25fca3ccfc76.jpg' }}
      />
    </View>
  )
}

export default Micah;