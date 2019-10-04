import React from 'react';
import {View, Text, Button, Image} from 'react-native';

function Bin(){
    return(

        <View>

            <Text>Hi I'm Bin</Text>
            <Image 
                source={{uri:"https://www.google.com/search?q=image&tbm=isch&source=iu&ictx=1&fir=fV9_uqNL-WZZyM%253A%252CQooZsUX3wOLfLM%252C_&vet=1&usg=AI4_-kSXN1XxdsXQNOFwnNVe8N71w5hMFA&sa=X&ved=2ahUKEwjm1eX-k_7kAhWVjp4KHTc2Cx4Q9QEwAXoECAUQBg#imgrc=fV9_uqNL-WZZyM:"}}
            />

        </View>

    )
}

export default Bin;