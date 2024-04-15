import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return(
    <View styles={styles.container} >
      <Text>Hello World</Text>
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