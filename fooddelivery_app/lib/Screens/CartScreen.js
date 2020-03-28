import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import PizzaDetail1 from '../components/CartPageComp/PizzaDetail';
import GreenButton from '../components/CartPageComp/GreenButton';


const CartScreen = () => {
 
    const data = [
        {
            imageSource: require('../../assets/database/PIZZA/Veg Pizza/Cheese and Tomato.png'),
            pizzaName: 'Peppy Panner',
            pizzaDescription: 'Thin Crust',
            pizzaPrice: 333,
        },
        
        {
            imageSource: require('../../assets/database/PIZZA/Veg Pizza/Cheese and Tomato.png'),
            pizzaName: 'Farmhouse',
            pizzaDescription: 'Thin Crust',
            pizzaPrice: 342,
        },
        
        {
            imageSource: require('../../assets/database/PIZZA/Veg Pizza/Cheese and Tomato.png'),
            pizzaName: 'Farmhouse',
            pizzaDescription: 'Thin Crust',
            pizzaPrice: 343,
        },

        {
            imageSource: require('../../assets/database/PIZZA/Veg Pizza/Cheese and Tomato.png'),
            pizzaName: 'Farmhouse',
            pizzaDescription: 'Thin Crust',
            pizzaPrice: 143,
        },

        {
            imageSource: require('../../assets/database/PIZZA/Veg Pizza/Cheese and Tomato.png'),
            pizzaName: 'Farmhouse',
            pizzaDescription: 'Thin Crust',
            pizzaPrice: 333,
        },

        {
            imageSource: require('../../assets/database/PIZZA/Veg Pizza/Cheese and Tomato.png'),
            pizzaName: 'Farmhouse',
            pizzaDescription: 'Thin Crust',
            pizzaPrice: 333,
        },

        {
            imageSource: require('../../assets/database/PIZZA/Veg Pizza/Cheese and Tomato.png'),
            pizzaName: 'Farmhouse',
            pizzaDescription: 'Thin Crust',
            pizzaPrice: 333,
        },

        {
            imageSource: require('../../assets/database/PIZZA/Veg Pizza/Cheese and Tomato.png'),
            pizzaName: 'Farmhouse',
            pizzaDescription: ' Crust',
            pizzaPrice: 333,
        },
    ]

    return(
        <View style = {{flex: 1}}>
            <FlatList
                data={data}
                keyExtractor={() => Math.random().toString()}
                renderItem={({ item }) => (
                    <PizzaDetail1 pizzaDescription={item.pizzaDescription} pizzaName={item.pizzaName}  pizzaPrice={item.pizzaPrice} imageSource = {item.imageSource}/>
                )}
            />
            <GreenButton />
            </View>             
    )
}

export default CartScreen;
   