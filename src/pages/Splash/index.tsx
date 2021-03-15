import React, { useEffect } from 'react';
import {StyleSheet, View, Image} from 'react-native';
import { ImgLogo } from '../../assets';
import { colors } from '../../utils';

interface Props {
  navigation: any;
}

const Splash: React.FC<Props> = (props) => {

  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('Login');
    }, 2000);
  }, [])

  return (
    <View style={styles.page}>
        <ImgLogo width={100} height={100} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.page,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
