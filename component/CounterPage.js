import { View, Text, Button } from "react-native";

export function CounterPage({navigation}){
    return(
        <View>
            <Text>Nb de jours avant Noël</Text>
            <Button title='Retour' onPress={()=> navigation.navigate('Home')} ></Button>
        </View>
    )
}