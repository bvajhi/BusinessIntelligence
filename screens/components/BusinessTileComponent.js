import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import BaseTileComponent from './BaseTileComponent';
import RowComponent from './RowComponent';

export default function BusinessTileComponent(props) {
  const {data} = props;
  return (
    <BaseTileComponent>
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>{data.name}</Text>
          <RowComponent label="City" value={data.location.city} />
          <RowComponent
            label="Latest Revenue"
            value={
              '$' +
              data.revenue[0].value
                .toFixed(2)
                .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,')
            }
          />
        </View>
      </View>
    </BaseTileComponent>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  header: {
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 'bold',
  },
  icon: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
