import React from "react";
import { NavigationContainer } from "@react-navigation/native"; // Importe NavigationContainer
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lista from './Lista';
import Produto from './Produto';
import TabDetalhes from "./Produto";

export default function AbaProdutos() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Lista" component={Lista} />
                <Stack.Screen name="TabDetalhes" component={TabDetalhes} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}