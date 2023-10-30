import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Firstpage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.splash}>
                <Image
                    style={styles.gettyImage}
                    source={{ uri: 'https://via.placeholder.com/783x617' }}
                />
                <Image
                    style={styles.logo1}
                    source={{ uri: 'https://via.placeholder.com/28x27' }}
                />
                <Image
                    style={styles.logo2}
                    source={{ uri: 'https://via.placeholder.com/220x176' }}
                />
                <View style={styles.rectangle33} />
                <Text style={styles.partner}>Partner</Text>
                <Text style={styles.partnerCompanionApp}>Partner companion app</Text>
                <Image
                    style={styles.image1}
                    source={{ uri: 'https://via.placeholder.com/389x15' }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    splash: {
        width: 96,
        height: 96,
        backgroundColor: '#E5E7EB',
        position: 'relative',
    },
    gettyImage: {
        width: 96,
        height: 96,
        position: 'absolute',
        left: -355,
        top: 309,
    },
    logo1: {
        width: 7,
        height: 7,
        position: 'absolute',
        left: 268,
        top: 648,
    },
    logo2: {
        width: 56,
        height: 44,
        position: 'absolute',
        left: 109,
        top: 66,
    },
    rectangle33: {
        width: 96,
        height: 28,
        position: 'absolute',
        top: 254,
        backgroundColor: '#E5E7EB',
    },
    partner: {
        width: 96,
        height: 20,
        position: 'absolute',
        top: 242,
        textAlign: 'center',
        color: '#DC2626',
        fontSize: 30,
        fontFamily: 'Hubballi',
        textTransform: 'uppercase',
    },
    partnerCompanionApp: {
        width: 96,
        height: 7,
        position: 'absolute',
        top: 291,
        textAlign: 'center',
        color: '#DC2626',
        fontSize: 12,
        fontFamily: 'Josefin Sans',
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
    image1: {
        width: 96,
        height: 3.5,
        position: 'absolute',
        left: 23,
        top: 19,
    },
});

export default Firstpage;
