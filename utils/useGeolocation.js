import React, { useEffect, useState } from 'react'
import { PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export default function useGeolocation() {

    const [permission, setPermission] = useState(false);
    const [location, setLocation] = useState(undefined);

    useEffect(() => {
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Geolocation Permission',
                message: 'Can we access your location?',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        ).then(() => setPermission(true)).catch(() => console.error('error'));
    }, [])

    useEffect(() => {
        if (permission) {
            Geolocation.getCurrentPosition(
                position => {
                    console.log(position);
                    setLocation(position);
                },
                error => {
                    // See error code charts below.
                    console.log(error.code, error.message);
                    setLocation(false);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
            );
        }
    },[permission]);
    return { permission, location }
}
