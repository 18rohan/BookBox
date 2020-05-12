import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ListCard from '../components/ListCards';
import { BOOKS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/headerButton';


const BooksCompleted = props => {
    const BooksCompleted = BOOKS.filter(book => book.id === 'b3' || book.id === 'b1');
    console.log(BooksCompleted)
    return  <ListCard listData = {BooksCompleted} navigation = {props.navigation}/>
};

BooksCompleted.navigationOptions = navData => {
    return {
        headerTitle :'Books Completed',
    headerLeft: () => {
        return <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Favourite' iconName='ios-menu' onPress = {() =>{
            navData.navigation.toggleDrawer();
            }}/>
        </HeaderButtons>
    },

    };
    
   

}




export default BooksCompleted