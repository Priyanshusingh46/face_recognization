import React from 'react';
import {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Detector from "./Components/Detector";
const image_picker_options = {
  title: 'Select Photo', 
  takePhotoButtonTitle: 'Take Photo...', 
  chooseFromLibraryButtonTitle: 'Choose from Library...',
  cameraType: 'back', 
  mediaType: 'photo',
  maxWidth: 480,
  quality: 1, 
  noData: false, 
  path: 'images'
};
const api_key = 'YOUR FACE DETECTION API KEY';
const FaceDetector =()=>{
    return (
      <View style={styles.container}>
        <Detector imagePickerOptions={image_picker_options} apiKey={api_key} /> 
      </View> 
    );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
AppRegistry.registerComponent('FaceDetector', () => FaceDetector);