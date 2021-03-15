import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../../utils';
import { TabItem } from '../../atoms';

export interface Props {
    state: any;
    descriptors: any;
    navigation: any;
}

const BottomNavigator: React.FC<Props> = (props) => {
    return (
    <View style={styles.container}>
        {props.state.routes.map((route: any, index: number) => {
            const { options } = props.descriptors[route.key];
            const label =
            options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = props.state.index === index;

            const onPress = () => {
                const event = props.navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                    props.navigation.navigate(route.name);
                }
            };

            const onLongPress = () => {
                props.navigation.emit({
                    type: 'tabLongPress',
                    target: route.key,
                });
            };

            return (
                <TabItem
                    key={index}
                    title={label} 
                    active={isFocused} 
                    onPress={onPress} 
                    onLongPress={onLongPress} 
                />
            );
        })}
    </View>
    )
}

export default BottomNavigator

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: colors.white,
        borderTopWidth: 1,
        borderColor: colors.border
    }
})
