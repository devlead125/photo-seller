import React from 'react';
import { Font, AppLoading, Asset } from 'expo';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { ThemeProvider } from 'styled-components';
import FlagPhotos from './screens/FlagPhotos';
import ConfirmOrder from './screens/ConfirmOrder';
import SelectPackages from './screens/SelectPackages';
import EditPhoto from './screens/EditPhoto';
import theme from './theme';

const rootNavigator = createStackNavigator(
  {
    EditPhoto,
    FlagPhotos,
    SelectPackages,
    ConfirmOrder
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
    loading: true
  };

  loadAssets = async () => {
    await Promise.all([
      Asset.loadAsync([
        require('./assets/apple-pay.png'),
        require('./assets/card-pay.png'),
        require('./assets/1.png'),
        require('./assets/2.png'),
        require('./assets/3.png')
      ]),
      Font.loadAsync({
        lato: require('./assets/lato.ttf'),
        nunito: require('./assets/nunito.ttf')
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
    return (
      <ThemeProvider theme={theme}>
        <AppContainer />
      </ThemeProvider>
    );
  }
}
