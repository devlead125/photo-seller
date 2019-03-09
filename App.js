import React from 'react';
import { Font, AppLoading, Asset } from 'expo';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ConfirmOrder from './screens/ConfirmOrder';
import SelectPackages from './screens/SelectPackages';
import theme from './theme';

const rootNavigator = createStackNavigator(
  {
    ConfirmOrder,
    SelectPackages
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: theme.colors.primary
      },
      headerTitleStyle: {
        color: '#ffffff',
        textAlign: 'center',
        flex: 1
      }
    }
  }
);

const AppContainer = createAppContainer(rootNavigator);

export default class App extends React.Component {
  state = {
    loading: false
  };

  loadAssets = async () => {
    await Promise.all([
      Asset.loadAsync([require('./assets/1.png'), require('./assets/2.png')]),
      Font.loadAsync({
        lato: require('./assets/lato.ttf')
      })
    ]);
  };

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <AppLoading
          startAsync={this.loadAssets}
          onFinish={() => this.setState({ loading: false })}
          onError={console.warn}
        />
      );
    }
    return <AppContainer />;
  }
}
