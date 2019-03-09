import React, { Component } from 'react';
import Card from './Card';
import View from './View';
import Text from './Text';

export class TitleDetailCard extends Component {
  render() {
    const { title, detail, extra, ...props } = this.props;
    return (
      <Card px={25} py={17} flexDirection="row" alignItems="center" {...props}>
        <View>
          <Text>{title}</Text>
          <Text fontSize={12} color="grey">
            {detail}
          </Text>
        </View>
        {extra}
      </Card>
    );
  }
}

export default TitleDetailCard;
