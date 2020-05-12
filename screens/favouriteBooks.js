import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { BOOKS } from '../data/dummy-data';
import ListCard from '../components/ListCards';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/headerButton';
import { useSelector } from 'react-redux';
import defaultStyles from '../constants/themeColors';



const FavouriteBooks = props => {
    const favBook = useSelector(state => state.books.FavBooks);
    if (favBook.length === 0 || !favBook){
        return (
            <View style={styles.screen}>
                <Text style={styles.text}>No Favourites Selected!!</Text>
            </View>
        );
    }
    
    return(
        <ListCard listData = {favBook} navigation = {props.navigation}/>

    );
};
FavouriteBooks.navigationOptions = navData => {
    return {
        headerTitle :'Favourites',
    headerLeft: () => {
        return <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Favourite' iconName='ios-menu' onPress = {() =>{
            navData.navigation.toggleDrawer();
            }}/>
        </HeaderButtons>
    },

    };
    
   

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    text: {
        fontSize: 30,
        fontWeight:'bold',
        color: defaultStyles.iosAccent,
    },
});

export default FavouriteBooks;