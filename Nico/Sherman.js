import React from 'react';
import {View, Text, Button, Image} from 'react-native';

function Sherman(){
    return(
        <View>
            <Text>Hi I'm Sherman</Text>
            <Image style={{width:50, height:50}}
            source={{uri:'https://www.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg'}}
            />
        </View>
    )

};

export default Sherman;