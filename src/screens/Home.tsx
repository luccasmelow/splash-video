import { View, Text} from "react-native";


export function Home(){
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#407744' }}>
            <Text style={{fontSize: 22, fontWeight: '600', color: '#fff'}}>
                Home
            </Text>
        </View>
    );
}