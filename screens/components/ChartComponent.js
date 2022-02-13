import * as React from 'react';
import {requireNativeComponent} from 'react-native';

const MODULE_NAME = 'RNChartView';
const Chart = requireNativeComponent(MODULE_NAME, null);

export default function ChartComponent(props) {
  const {xValues, yValues} = props;
  return <Chart xValues={xValues} yValues={yValues} style={{flex: 1}} />;
}
