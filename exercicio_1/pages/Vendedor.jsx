import { View, Text } from 'react-native';

export default function Vendedor({ route }) {
    const dados = route.params;
    const item = dados.dado.vendedor

    return (
        <View>
            <Text>{item.nome}</Text>
            <Text>{item.telefone}</Text>
            <Text>{item.email}</Text>
            <Text>{item.avaliacao.toString()}</Text>
        </View>
    );
}