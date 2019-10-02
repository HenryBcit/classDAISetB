import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import Page1 from './Page1';
import Siya from '../Siya/Siya'

function Main(){
  const [showMenu, setShowMenu] = useState(false);
  const [showPage1, setShowPage1] = useState(false);

  var page1 = null;
  if(showPage1 === true){
    page1 = (<Page1 />);
  }

  var menu = null;
  if(showMenu === true){
    menu = (
      <View>
        <Button
          title="Page 1"
          onPress={()=>{
            setShowPage1(!showPage1);
          }}
        />
        <Button
          title="Page 2"
          onPress={()=>{}}
        />
      </View>
    );
  }

  return (
    <View>

      <Text>Main Comp</Text>
      <Button
        title="Show Menu"
        onPress={()=>{
          setShowMenu(!showMenu);
        }}
      />

      <Button
        title="Show Page 1"
        onPress={()=>{
          setShowPage1(!showPage1);
        }}
      />
      {menu}
      {page1}
      <Siya />
    </View>
  )
}

export default Main;
