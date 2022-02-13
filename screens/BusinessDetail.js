import * as React from 'react';
import {Text} from 'react-native';

export default class BusinessDetail extends React.PureComponent {
  render() {
    const {name, location} = this.props.route.params.details;
    return <Text>{name}</Text>;
  }
}
