import * as React from 'react';
import {FlatList, Text} from 'react-native';
import {BusinessTileComponent} from './components';

import businessJSON from '../data.json';

export default class Businesses extends React.Component {
  render() {
    return (
      <FlatList
        data={businessJSON}
        renderItem={(element) => {
          console.log(element);
          return <BusinessTileComponent data={element.item}/>;
        }}
        keyExtractor={(item) => {
          return item.name + item.id;
        }}
        showsVerticalScrollIndicator={false}
      />
    );
  }
}
