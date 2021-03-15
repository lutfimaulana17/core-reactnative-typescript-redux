import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import { ImgLogo } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import { colors } from '../../utils';

interface Props {
  navigation: any;
}

const Login: React.FC<Props> = (props) => {
  return (
    <ScrollView style={styles.page}>
      <Gap height={30} />
      <ImgLogo width={120} height={120}/>
      <Text style={styles.title}>Register create new account</Text>
      <Gap height={40} />
      <Input label="Full Name" />
      <Gap height={24} />
      <Input label="Last Name" />
      <Gap height={24} />
      <Input label="Email" />
      <Gap height={24} />
      <Input label="Password" secureTextEntry={true} />
      <Gap height={24} />
      <Input label="Re-Password" secureTextEntry={true} />
      <Gap height={40} />
      <Button label="Register" />
      <Gap height={30} />
      <Link label="I already have an account Login" onPress={() => props.navigation.goBack()} />
      <Gap height={40} />
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.page,
    paddingHorizontal: 40
  },
  title: {
    fontSize: 20,
    maxWidth: 190,
    color: colors.text.primary
  }
});
