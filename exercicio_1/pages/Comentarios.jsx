import { View, Text } from 'react-native';

export default function Comentarios({ route }) {
    const dados = route.params;
    const item = dados.dado.comentarios
    return (
        <>
            {item.map((item, index) =>
                <View key={index}>
                    <Text>{item.usuario}</Text>
                    <Text>{item.data_publicacao}</Text>
                    <Text>{item.comentario}</Text>
                    <Text>{item.nota.toString()}</Text>
                </View>
            )}
        </>
    );
}