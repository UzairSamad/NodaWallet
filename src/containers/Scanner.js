import React from "react"
import { View, Text } from "react-native"
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const Scanner = () => {

    const onSuccess = e => {
        Linking.openURL(e.data).catch(err =>
            console.error('An error occured', err)
        );
    };
    return (
        <QRCodeScanner
            onRead={onSuccess}
        />
    )
}

export default Scanner