import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { useSelector } from 'react-redux';
import { IconDownload, IconDownloadActive, IconHome, IconHomeActive, IconInbox, IconInboxActive, IconListFavorite, IconListFavoriteActive, IconProfile, IconProfileActive, JSONDataLangEN, JSONDataLangID } from '../../../assets';
import { colors } from '../../../utils';

interface Props {
    title: string;
    active: boolean;
    onPress(): any;
    onLongPress(): any;
}

const TabItem: React.FC<Props> = ({title, active, onPress, onLongPress}) => {
    
    const Icon = () => {
        switch (title) {
            case 'Home':
                return active ? <IconHomeActive /> : <IconHome />
                break;
            case 'Search':
                return active ? <IconInboxActive /> : <IconInbox />
                break;
            case 'Portofolio':
                return active ? <IconListFavoriteActive /> : <IconListFavorite />
                break;
            case 'Transaction':
                return active ? <IconDownloadActive /> : <IconDownload />
                break;
            case 'News':
                return active ? <IconProfileActive /> : <IconProfile />
                break;
            default:
                return <IconHome />
                break;
        }
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon />
            <Text style={active ? styles.textActive : styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: {
        fontSize: 11,
        color: colors.text.menuInactive,
        marginTop: 4
    },
    textActive: {
        fontSize: 11,
        color: colors.text.menuActive,
        marginTop: 4
    }
})
