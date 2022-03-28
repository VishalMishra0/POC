import React, {useState} from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TextInput, Button, ImageBackground,TouchableWithoutFeedback,Keyboard} from 'react-native';
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather'

const ToDo = () => {

  //state for inputfield of additem
  const [text, setText] = useState('');

  //Default items presenst in the list
  const[ToDo, setToDo] = useState([
    {text: 'Screen', key: '1'},
    {text: 'Mouse', key: '2'},
    {text: 'Keyboard', key: '3'},
    {text: 'CPU', key: '4'},
  ])


//Delete items from the list  
const DeleteBtn = (key) => {
  setToDo((prevToDo) => {
    return prevToDo.filter(ToDo => ToDo.key != key);
  });
}

//trackvalue in additem field in todolist
const changeHandler = (val) =>{
  setText(val);
}


//add items to list from starting 
const addItemBtn = (text) =>{
  setToDo((prevToDo) => {
    return [
      {text:text, key: Math.random().toString()},
      ...prevToDo
    ];
  })
}

  return (  
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
  <ImageBackground 
                style={styles.container}
                source={{uri: "http://blog.magmalabs.io/wp-content/uploads/2017/11/EmptyBackgroundImage.png"}}
            >
 
    
      <View style={styles.List}>

            <View style = {styles.addItem}>
              <TextInput 
                multiline
                style={styles.inputItem}
                placeholder='Add Item'
                onChangeText={changeHandler}
                // keyboardType = 'visible-password'
              />

            </View>

            <Button
                title="Add Item"
                color="#00bfff"
                onPress={() => addItemBtn(text)}
              />

              <Text style={{marginTop:75,color:'#000',marginBottom:5}}>
                Your Items :-
              </Text> 
                    <FlatList
                      data={ToDo}
                      renderItem={({item}) => (
                        <TouchableOpacity onPress={()=> DeleteBtn(item.key)}>{/*taking key as an arrguments */}
                          <Text style = {styles.item}>{item.text}</Text>
                        </TouchableOpacity>

                      )}
                    />

      </View>
  
    </ImageBackground>
    </TouchableWithoutFeedback>
  )
}
const styles=StyleSheet.create({
  container:{
    flex : 1,
    backgroundColor:'#fff',
    
  },
  List:{
    flex:1,
     padding:16,
     marginTop:10,
  },
  item:{
    padding:15,
    marginTop:10,
    borderWidth:1,
    borderColor:'black',
    borderStyle:'solid',
    borderRadius:3,
  },
  inputItem:{
    // borderBottomWidth:1,
    borderColor:'#000',
    margin:5,
    // marginBottom:30,
  },
  addItem:{
    borderColor:'#000',
    borderWidth:1,
    marginBottom:10,
  },
})
export default ToDo