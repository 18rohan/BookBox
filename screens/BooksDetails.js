import React,{useEffect, useCallback} from 'react';
import { View, StyleSheet, Text, Button, ScrollView } from 'react-native';
import { BOOKS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import defaultStyle from '../constants/themeColors';
import HeaderButton from '../components/headerButton';
import {useSelector, useDispatch} from 'react-redux';
import {toggleFavourite, toggleComplete} from '../store/actions/BooksAction';


const BooksDetails = props => {
    
    const bookId = props.navigation.getParam('bookId');
    const availableBooks = useSelector(state => state.books.books);
    const bookDetail = availableBooks.find(book => book.id === bookId);
    const currentBookisFavourite = useSelector(state => state.books.FavBooks.some(book => book.id === bookId));
    const currentBookisCompleted = useSelector(state => state.books.CompleteBooks.some(book => book.id == bookId));

    const Dispatch = useDispatch();
//.................................................................................
// FAVOURITES HANDLER
    const ToggleFavHandler = useCallback(() =>{
        Dispatch(toggleFavourite(bookId))
    }, [Dispatch, bookId]);

    useEffect(() => {
        props.navigation.setParams({toggleFav: ToggleFavHandler}) // Provides the functionality to toggle the favourites in the navigation header
    
    },[ToggleFavHandler]);

    useEffect(() => {
        props.navigation.setParams({isFav: currentBookisFavourite}); //To change the icon from empty to filled
    },[currentBookisFavourite]);
// ........................................................................
// COMPLETED HANDLER
    const Dispatch1 = useDispatch();
    const ToggleCompletionHandler = useCallback(() =>{
        Dispatch1(toggleComplete(bookId));
    },[Dispatch, bookId]);

    useEffect(() => {
        props.navigation.setParams({toggleCompletion: ToggleCompletionHandler})
    },[ToggleCompletionHandler]);

    useEffect(() => {
        props.navigation.setParams({isCompleted: currentBookisCompleted});
    },[currentBookisCompleted]);
   
    return(
        <ScrollView style={styles.screen}>
        <View style={styles.container}>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>{bookDetail.name}</Text>
        </View>
        <View style={styles.summaryContainer}>
            <Text style={styles.summary}>
                {bookDetail.summary}
            </Text>
        </View>
        
    </View>
    </ScrollView>

    );
};
BooksDetails.navigationOptions = navigationData => {
    const bookId = navigationData.navigation.getParam('bookId');
    const bookDetail = BOOKS.find(book => book.id === bookId);
    const toggleFavourites = navigationData.navigation.getParam('toggleFav');
    const isFavourite = navigationData.navigation.getParam('isFav');
    const isnowCompleted = navigationData.navigation.getParam('isCompleted');
    const toggleCompleted = navigationData.navigation.getParam('toggleCompletion');
    //const bookTitle = navigationData.navigation.getParam('bookTitle');
    console.log(navigationData);
    return {
        
        headerRight: () =><HeaderButtons HeaderButtonComponent = {HeaderButton}>
            <Item title='Favourite' iconName={isFavourite ? 'ios-heart': 'ios-heart-empty'} onPress = {toggleFavourites}/>
        </HeaderButtons>,
         headerTitle: " ",
         headerTitle: () =><HeaderButtons HeaderButtonComponent = {HeaderButton}>
             <Item title='Favourite' iconName={isnowCompleted ? 'ios-checkmark-circle': 'ios-checkmark-circle-outline'} onPress = {toggleCompleted}/>
         </HeaderButtons>,
          
    };
      
    
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        marginTop: 10,
       
        

    },
    container:{
        alignItems:'center'
    },
    title:{
        fontSize: 27,
        color: defaultStyle.iosAccent,
        fontWeight: 'bold',
        textAlign:'center',

    },
    titleContainer:{
        width: '90%',
        
        padding: 3,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        borderRadius: 20,
        shadowColor: 'lightgrey',
        shadowOpacity: 0.3,
        shadowOffset: {width: 0, height: 0.1},
        justifyContent: 'center'
    },
    summaryContainer:{
        width: '90%',
        marginTop:30,

    },
    summary:{
        fontSize: 20,
        textAlign:'justify',
        fontWeight: '200',
    },
});

export default BooksDetails;