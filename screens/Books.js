import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Button, Platform, FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { CATEGORIES, BOOKS } from '../data/dummy-data';
import { useSelector } from 'react-redux';
import ListCard from '../components/ListCards'
import defaultStyle from '../constants/themeColors';





const BooksScreen = props => {
    
    const catid = props.navigation.getParam('categoryId');
    const availableBooks = useSelector(state => state.books.filteredBooks);
    const displayedBooks = availableBooks.filter(book => book.categoryIds.indexOf(catid) >= 0);
    
   return (
       
       <ListCard listData = {displayedBooks} navigation={props.navigation}/>
       
       
   ); 
   
};
BooksScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const SelectedCategory = CATEGORIES.find(cat => cat.id === catId);
    
    
    return {
        headerTitle: SelectedCategory.title,
        
      
    };
      
    


};

const styles = StyleSheet.create({
    screen :{
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: Platform.OS === 'ios' ? 'white' : 'white'

    },
  
    text:{
        fontSize:Platform.OS === 'ios' ? 20 : 15,
        fontWeight: Platform.OS === 'ios' ? '500' : 'bold',
        fontFamily:Platform.OS === 'ios' ? 'Arial' : 'sans-serif',
        color: Platform.OS === 'android' ? defaultStyle.iosAccent : defaultStyle.iosAccent,
    },
    textColor:{
        color: Platform.OS === 'ios' ? 'red' : 'black'
    },
    cards:{
        flex:1,
        width: 360,
        height: 300,
        backgroundColor:Platform.OS == 'ios' ? 'white': 'white',
        margin:15,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOpacity :0.6,
        shadowOffset:{width:6,height:8},
        elevation: 5,

    },
    imageContainer: {
        width: Platform.OS === 'ios' ? 360 : '100%',
        height: Platform.OS === 'ios' ? 572 : '85%',
        borderRadius: 25,
        marginBottom: Platform.OS === 'ios' ? 4 : 18,
    },
    textContainer: {
        width: '100%',
        height: 80,
        justifyContent:'space-around',
        alignItems: 'center',
        marginBottom: 13
        
    },
    image:{
        width: '100%',
        height: '100%',
        borderRadius: 25,
        overflow:'hidden'
    },
    authorContainer:{
        flex: 1,
        
        alignItems:'flex-end',
        justifyContent: 'space-around'
      
    },
});

export default BooksScreen;