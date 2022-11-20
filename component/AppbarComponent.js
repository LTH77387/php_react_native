import * as React from 'react';
import { Appbar } from 'react-native-paper';
import theme from '../theme/theme';

const AppBarComponent = () => (
  <Appbar.Header style={{backgroundColor:theme.colors.primary}}>
    <Appbar.BackAction onPress={() => {}} />
    <Appbar.Content title="Login" />
  </Appbar.Header>
);

export default AppBarComponent;