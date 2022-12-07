import { Button, View, Text } from "react-native";

export function Home({navigation}){
    return(
        <View>
            <Text>Blague</Text>
            <Button title='Cadeau' onPress={()=> navigation.navigate('CounterPage')}></Button>
        </View>
    )
}