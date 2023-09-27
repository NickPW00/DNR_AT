import { View, Text, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    stretch: {
        width: 300,
        height: 200,
    },
});

const Tab = createBottomTabNavigator()

export default function TabDetalhes({ route }) {
    const dados = route.params;
    const item = dados.dado

    return (
        <Tab.Navigator>
            <Tab.Screen name={item.nome} component={Produto} initialParams={dados} />
            <Tab.Screen name="Vendedor" component={Vendedor} initialParams={dados} />
            <Tab.Screen name="Comentarios" component={Comentarios} initialParams={dados} />
            <Tab.Screen name="Duvidas" component={Duvidas} initialParams={dados} />
            <Tab.Screen name="Detalhes" component={Detalhes} initialParams={dados}/> 
        </Tab.Navigator>
    );
}

function Detalhes({ route }) {
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

function Comentarios({ route }) {
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

function Duvidas({ route }) {
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

function Vendedor({ route }) {
    const dados = route.params;
    const item = dados.dado.vendedor
    console.log(dados)
    return (
        <View>
            <Text>{item.nome}</Text>
            <Text>{item.telefone}</Text>
            <Text>{item.email}</Text>
            <Text>{item.avaliacao.toString()}</Text>
        </View>
    );
}

function Produto({ route }) {
    const dados = route.params;
    const item = dados.dado

    return (
        <View>
            <Image
                styles={styles.stretch}
                source={{ uri: 'https://i.imgur.com/Rg8DNtT.jpeg' }}
            />
            <Text>{item.nome}</Text>
            <Text>{item.descricao}</Text>
        </View>
    );
}