import { View, Text } from 'react-native';

export default function Detalhes({ route }) {
    const dados = route.params;
    const item = dados.dado.especificacoes
    const nome = dados.dado.nome
    return (
        <View>
            <Text>{nome}</Text>
            {Object.entries(item).map(([key, value], index) =>
                <Text key={index}>{key} {value}</Text>
            )}
        </View>
    );
}