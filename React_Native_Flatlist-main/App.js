import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople]= useState([
  {name:'Zamal', key:"1"},
  {name:'Kamal', key:"2"},
  {name:'bobo', key:"3"},
  {name:'Zabbar', key:"4"},
  {name:'Liam', key:"5"},
  {name:'Noah', key:"6"},
  {name:'Oliver', key:"7"},
  {name:'Elijah', key:"8"},
  {name:'James', key:"9"},
  {name:'kamal', key:"10"},
  {name:'a', key:"11"},
  {name:'Lucas', key:"12"},
  {name:'joil', key:"13"},
  {name:'Theodore', key:"14"},
  {name:'Olivia', key:"15"},
  {name:'Emma', key:"16"},
  {name:'Charlotte', key:"17"},
  {name:'ador', key:"18"},
  {name:'Ava', key:"19"},
  {name:'Sophia', key:"20"},
  {name:'zim', key:"21"},
  {name:'Mia', key:"22"},
  {name:'Evelyn', key:"23"},
  {name:'Harper', key:"24"},
  {name:'Jack', key:"25"},
  {name:'Theodore', key:"26"},
  {name:'asik', key:"27"},
  {name:'Jackson', key:"28"},
  {name:'Mateo', key:"29"},
  {name:'Daniel', key:"30"},
 

  
  ]);
  return(
    <View style={styles.container}>
      <FlatList
       numColumns={3}
      data={people}
      renderItem={({item})=>(
        <Text style={styles.item}>I Am {item.name}</Text>
        
      )}
      />
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DC143C',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:40,
    paddingHorizontal:20,
  },
  item:{
    marginTop:10,
    padding: 50,
    backgroundColor:"#DC143C",
    fontSize: 14,
  }
});

