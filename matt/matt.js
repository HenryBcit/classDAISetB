import React from 'react';
import {View, Image, Text} from 'react-native';

function Matt(){
    return(
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Text>sk8 or die</Text>
            <Image
            style={{width: 100, height: 100, padding:100}}
            source={require('../ramin.jpg')}
            />
        </View>
    )
}

export default Matt;