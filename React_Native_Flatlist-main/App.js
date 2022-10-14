import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople]= useState([
  {name:'Cr prvz', key:"1"},
  {name:'Karim', key:"2"},
  {name:'Rahim', key:"3"},
  {name:'Zabbar', key:"4"},
  {name:'Liam', key:"5"},
  {name:'Noah', key:"6"},
  {name:'Oliver', key:"7"},
  {name:'Elijah', key:"8"},
  {name:'James', key:"9"},
  {name:'William', key:"10"},
  {name:'Benjamin', key:"11"},
  {name:'Lucas', key:"12"},
  {name:'Henry', key:"13"},
  {name:'Theodore', key:"14"},
  {name:'Olivia', key:"15"},
  {name:'Emma', key:"16"},
  {name:'Charlotte', key:"17"},
  {name:'Amelia', key:"18"},
  {name:'Ava', key:"19"},
  {name:'Sophia', key:"20"},
  {name:'Isabella', key:"21"},
  {name:'Mia', key:"22"},
  {name:'Evelyn', key:"23"},
  {name:'Harper', key:"24"},
  {name:'Jack', key:"25"},
  {name:'Theodore', key:"26"},
  {name:'Alexander', key:"27"},
  {name:'Jackson', key:"28"},
  {name:'Mateo', key:"29"},
  {name:'Daniel', key:"30"},
  {name:'Michael', key:"31"},
  {name:'Mason', key:"32"},
  {name:'Logan', key:"33"},
  {name:'Samuel', key:"34"},
  {name:'Jacob', key:"35"},
  {name:'Wyatt', key:"36"},
  {name:'Hudson', key:"37"},
  {name:'Grayson', key:"38"},
  {name:'Matthew', key:"39"},
  {name:'Jayden', key:"40"},
  {name:'uganda', key:"41"},
  {name:'Declan', key:"42"},
  {name:'Emmett', key:"43"},
  {name:'Dominic', key:"44"},
  {name:'Connor', key:"45"},
  {name:'Nicholas', key:"46"},
  {name:'Everett', key:"47"},
  {name:'Colton', key:"48"},
  {name:'Santiago', key:"49"},
  {name:'Nolan', key:"50"},
  {name:'Nathan', key:"51"},
  {name:'Miles', key:"52"},
  {name:'Jaxon', key:"53"},
  {name:'Charles', key:"54"},
  {name:'uganda', key:"55"},
  {name:'Maverick', key:"56"},
  {name:'Dylan', key:"57"},
  {name:'Anthony', key:"58"},

  
  ]);
  return(
    <View style={styles.container}>
      <FlatList
      // numColumns={2}
      data={people}
      renderItem={({item})=>(
        <Text style={styles.item}>My name is {item.name} & My Id is {item.key}</Text>
        
      )}
      />
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f18973',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:40,
    paddingHorizontal:20,
    fontColor:"white"
  },
  item:{
    marginTop:10,
    padding: 50,
    backgroundColor:"#92a8d1",
    fontSize: 14,
    fontColor:"white"
  }
});
