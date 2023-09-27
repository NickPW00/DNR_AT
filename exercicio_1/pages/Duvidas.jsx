import { View, Text } from 'react-native';

export default function Duvidas({ route }) {
    const dados = route.params;
    const item = dados.dado.duvidas
    return (
        <>
            {item.map((item, index) =>
                <View key={index}>
                    <Text>{item.usuario}</Text>
                    <Text>{item.data_publicacao}</Text>
                    <Text>{item.duvida}</Text>
                    <Text>{item.resposta}</Text>
                </View>
            )}
        </>
    );
}
