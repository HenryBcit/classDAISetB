import React from 'react';
import {View,
        Image,
        Text
} from 'react-native';

function AComp(){
    return(
        <View>
            <Text>Hi</Text>
            <Image
            source = {{uri: 'https://cloud.istyles.com/images/Skins/DESIGN/500/DESIGN-ACRGAL.jpg'}}
            style = {{height: 300, width: 300}}
            />
        </View>
    );
};
export default AComp;