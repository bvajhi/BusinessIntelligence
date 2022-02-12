import * as React from 'react';
import {Text} from 'react-native';
import BaseTileComponent from './BaseTileComponent';
import RowComponent from './RowComponent';

export default function BusinessTileComponent(props) {
  const {data} = props;
  return (
    <BaseTileComponent>
      <RowComponent left="Name: " right={data.name}/>
    </BaseTileComponent>
  );
}
