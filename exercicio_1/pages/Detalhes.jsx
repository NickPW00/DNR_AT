import { View, Text, ActivityIndicator } from 'react-native';

export default function Detalhes({ route }) {
    const dados = route.params;
    const item = dados.dado.especificacoes
    const nome = dados.dado.nome
    return (
        <View>
            <Text>{nome}</Text>
            {
                item ? 
                Object.entries(item).map(([key, value], index) =>
                    <Text key={index}>{key} {value}</Text>
                )
                :
                <ActivityIndicator />
            }
        </View>
    );
}