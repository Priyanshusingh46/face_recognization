import React from 'react';
import {
  AppRegistry,
  Component,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
const Button = ()=> {
    return (
      <View>
        <TouchableHighlight underlayColor={"#E8E8E8"} onPress={this.props.onpress} style={this.props.button_styles}>
          <View>
              <Text style={this.props.button_text_styles}>{this.props.text}</Text> 
          </View> 
        </TouchableHighlight> 
      </View> 
    );
  }
AppRegistry.registerComponent('Button', () => Button);