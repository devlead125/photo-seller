import React, { Component } from 'react';
import Card from './Card';
import View from './View';
import Text from './Text';

export class Detail extends Component {
  render() {
    const { name, detail, extra } = this.props;
    return (
      <Card px={25} py={17} flexDirection="row" alignItems="center" {...this.props}>
        <View>
          <Text>{name}</Text>
          <Text fontSize={12} color="grey">
            {detail}
          </Text>
        </View>
        {extra}
      </Card>
    );
  }
}

export default Card;
