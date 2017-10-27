// Created by using Expo XDE and Genymotion as an Android simulator

import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import ImageList from './src/components/ImageList';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Photo Gallery'} />
        <ImageList />
      </View>
    );
  }
}

AppRegistry.registerComponent('gallery', () => App);
