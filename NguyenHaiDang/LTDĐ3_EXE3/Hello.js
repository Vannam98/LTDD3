import React, { Component } from 'react';
import { Text, View, Button,TextInput, Alert , style} from 'react-native';

export default class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''}; 
      }
      _onPress = ()=> {Alert.alert((this.state.text1)+" "+(this.state.text2))};
    
  render() {
   
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center', marginHorizontal:10}}>
        <Text>Nhap ho:</Text>
        <TextInput
          style={{height: 40, marginBottom:30, paddingHorizontal:50}}
          onChangeText={(text1) => this.setState({text1})}
          value={this.state.text1}
        />
      
        <Text>Nhap ten:</Text>
        <TextInput
          style={{height: 40, marginBottom:30, paddingHorizontal:50}}
          onChangeText={(text2) => this.setState({text2})}
          value={this.state.text2}
        />
        
        <Button onPress = {this._onPress} title="full name" color='red' />
      </View>
    );
  }
}
