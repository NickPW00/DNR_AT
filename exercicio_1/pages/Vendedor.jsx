import { View, Text, ActivityIndicator } from 'react-native';

export default function Vendedor({ route }) {
    const dados = route.params;
    const item = dados.dado.vendedor

    return (
        <View>
            {
                item ?
                <>
                    <Text>{item.nome}</Text>
                    <Text>{item.telefone}</Text>
                    <Text>{item.email}</Text>
                    <Text>{item.avaliacao.toString()}</Text>
                </>
                :
                <ActivityIndicator />
            }
        </View>
    );
}