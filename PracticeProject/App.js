import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, Button, StyleSheet } from 'react-native';
import {usestate} from 'react';

const App = () => {
  const handlePress = () => {
    console.log('Button Pressed');
  }


  return(
    //View 
    <View styles={styles.container} >

      //Text
      <Text onPress={handlePress}>Hello World</Text>

      //TouchableWithoutFeedback
      <TouchableWithoutFeedback onPress={() => {console.log("image tapped")} }>

      //images
      <image source={require("./.bundle")}></image>
      <image source={require("./.bundle")}/>
      //Network images
      <image source={{uri: "http...."}}></image>

      </TouchableWithoutFeedback>

      //Button
      <button
      title="click me"
      />

    </View>
  )

}


const styles=StyleSheet.create({

  container:{
    flex:1,
    justifyContent: "center",
    alginitems: 'center'
  }

});

export default App;