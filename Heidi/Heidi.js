import React from 'react';
import {View, Text, Image} from 'react-native';


function Heidi(){
    return (
        <View>
            <Text> Hi I'm Heidi</Text>
            <Image 
                style={{width: 100, height: 100}}
                source={{
                uri:'https://i.kym-cdn.com/photos/images/original/001/431/201/40f.png'}}
                />
        </View>
    )

}

export default Heidi;