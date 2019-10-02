import React from 'react';
import {View, Text, Image} from 'react-native';

function Tasha(){
    return(
<View>
    <Text>Hi i'm Tasha</Text>
    <Image
    source={{url: "https://cdn3-www.cattime.com/assets/uploads/2011/12/file_2722_siberian-460x290.jpg"}}
    style={{width:100, height:100}}/>
</View>
    )
}

export default Tasha;