import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ListCard from '../components/ListCards';
import { BOOKS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/headerButton';
import {TOGGLE_COMPLETE} from '../store/actions/BooksAction';
import { useSelector } from 'react-redux';
import defaultStyles from '../constants/themeColors';


const BooksCompleted = props => {
    const BooksCompleted = useSelector(state => state.books.CompleteBooks);
    if (BooksCompleted.length === 0 || !BooksCompleted){
        return (
            <View style = {styles.screen}>
                <Text style = {styles.text}>No Books Completed, yet!!</Text>
            </View>
        );
    }
    
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


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 30,
        fontWeight: 'bold',
        color: defaultStyles.iosAccent,
    },
});


export default BooksCompleted