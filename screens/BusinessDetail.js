import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {ChartComponent} from './components';
import moment from 'moment';

export default function BusinessDetail({route}) {
  const {name, location, revenue} = route.params.details;
  const getValues = (type) => {
    let values = [];
    for (let rev of revenue) {
      if (type === 'date') {
        values.push(moment(rev.date).format('L'));
      } else {
        values.push(rev[type]);
      }
    }
    return values;
  };

  return (
    <View style={styles.chartContainer}>
      <ChartComponent
        xValues={getValues('date')}
        yValues={getValues('value')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  chartContainer: {
    flex: 0.5,
  },
});
