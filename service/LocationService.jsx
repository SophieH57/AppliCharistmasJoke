import Geolocation from 'react-native-geolocation-service';

export function locationService(setLocation) {

    let result;
    // Function to get permission for location
    async function requestLocationPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Geolocation Permission',
                    message: 'Can we access your location?',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            console.log('granted', granted);
            if (granted === 'granted') {
                console.log('You can use Geolocation');
                return true;
            } else {
                console.log('You cannot use Geolocation');
                return false;
            }
        } catch (err) {
            return false;
        }
    }

    result = requestLocationPermission();
    console.log('result : ', result);
    result.then(res => {
        console.log('res is:', res);
        if (res) {
            Geolocation.getCurrentPosition(
                position => {
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
    });
};
