import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import Page1 from './Page1';

import Siya from '../Siya/Siya'

import Heidi from '../Heidi/Heidi';
import Deriqs from '../Deriq/deriq';
import Bin from '../bin/Bin';
import Upasana from '../Upasana/Upasana';  
import Nico from '../Nico/Nico';
import Matt from '../matt/matt';
import Micah from '../Micah/Micah';
import aComp from '../andrew/andrewComp';
import AComp from '../andrew/andrewComp';



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

 
      <Matt/>

      <Micah />


      <Text>Main Comp</Text>
      <Tasha/>

      <Button
        title="Show Menu"
        onPress={()=>{
          setShowMenu(!showMenu);
        }}
      />

=======
      <AComp />


      <Button
        title="Show Page 1"
        onPress={()=>{
          setShowPage1(!showPage1);
        }}
      />
      {menu}
      {page1}

      <Siya />


      <Deriqs />
     

      <Bin />


    </View>
  )
}

export default Main;
