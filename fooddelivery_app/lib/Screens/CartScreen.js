import React from 'react';
import { View, FlatList} from 'react-native';
import PizzaDetail1 from '../components/CartPageComp/PizzaDetail';
import GreenButton from '../components/CartPageComp/GreenButton';


const CartScreen = () => {
 
    const data = [
        {
            imageSource: require('../../assets/database/PIZZA/Veg_Pizza/Deluxe_Veggie.jpg'),
            pizzaName: 'Peppy Panner',
            pizzaDescription: 'Thin Crust',
            pizzaPrice: 333,
        },
        
        {
            imageSource: require('../../assets/database/PIZZA/Veg_Pizza/Double_Cheese_Margherita.jpg'),
            pizzaName: 'Farmhouse',
            pizzaDescription: 'Thin Crust',
            pizzaPrice: 342,
        },
        
        {
            imageSource: require('../../assets/database/PIZZA/Veg_Pizza/IndianTandooriPaneer.jpg'),
            pizzaName: 'Farmhouse',
            pizzaDescription: 'Thin Crust',
            pizzaPrice: 343,
        },

        {
            imageSource: require('../../assets/database/PIZZA/Veg_Pizza/kadhai_paneer.jpg'),
            pizzaName: 'Farmhouse',
            pizzaDescription: 'Thin Crust',
            pizzaPrice: 143,
        },

        {
            imageSource: require('../../assets/database/PIZZA/Veg_Pizza/Mexican_Green_Wave.jpg'),
            pizzaName: 'Farmhouse',
            pizzaDescription: 'Thin Crust',
            pizzaPrice: 333,
        },

        {
            imageSource: require('../../assets/database/PIZZA/Veg_Pizza/Veg_Extravaganz.jpg'),
            pizzaName: 'Farmhouse',
            pizzaDescription: 'Thin Crust',
            pizzaPrice: 333,
        },

        {
            imageSource: require('../../assets/database/PIZZA/Veg_Pizza/Corn_Cheese.jpg'),
            pizzaName: 'Farmhouse',
            pizzaDescription: 'Thin Crust',
            pizzaPrice: 333,
        },

        {
            imageSource: require('../../assets/database/PIZZA/Veg_Pizza/Peppy_Paneer.jpg'),
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
   