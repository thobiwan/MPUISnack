import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ThemeContext } from '@/ThemeContext';

export default function AboutScreen() {
  const [text, onChangeText] = React.useState('Search');
  const context = React.useContext(ThemeContext);
  return (
    <View style={{...styles.container, borderBottomColor: context.tertiaryColor}}>
      <View style={{...styles.searchbar, borderColor: context.primaryColor, backgroundColor: context.tertiaryColor}} >
      <Ionicons name="search" color={context.primaryColor} size={28} />
       <TextInput
          style={{...styles.input, color: context.primaryColor}}
          onChangeText={onChangeText}
          placeholder={text}
          placeholderTextColor={context.primaryColor}
        />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignContent: 'center',
    borderBottomWidth:1
  },
  text: {
    color: '#fff',
  },
  searchbar: {
    backgroundColor: '#f00',
    flexDirection:'row',
    alignItems:'center',
    borderColor: '#503156',
    borderRadius: 20,
    borderWidth: 2,
    margin: 20,
    marginTop: 50,
    padding: 3
   
  },
  input: {
    height: '100%',
    width: '100%',
    color: '#a477ad',
    marginStart: 5,
    borderStartEndRadius: 20,
    borderEndEndRadius: 20,   
    fontSize: 16,
  },
});