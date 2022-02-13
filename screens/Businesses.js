import * as React from 'react';
import {FlatList, Text} from 'react-native';
import {BusinessTileComponent} from './components';

import businessJSON from '../data.json';

export default function Businesses(props) {
  return (
    <FlatList
      data={businessJSON}
      renderItem={(element) => {
        return (
          <BusinessTileComponent
            data={element.item}
            onPress={() => {
              props.navigation.push('Profile', {details: element.item});
            }}
          />
        );
      }}
      keyExtractor={(item) => {
        return item.name + item.id;
      }}
      showsVerticalScrollIndicator={false}
    />
  );
}
