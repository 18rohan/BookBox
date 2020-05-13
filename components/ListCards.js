import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ImageBackground, Platform } from 'react-native';
import defaultStyles from '../constants/themeColors';

const ListCard = props => {
    const renderSingleItem = itemData => {
        return (
            
            <View>
            <ImageBackground source = {{uri:'https://lh3.googleusercontent.com/proxy/sdXOJO_cCww0RaF1JuXSIIdAqwbvlvb4xhjFlUvakyL6mGOhwrHuHY60VlYrUTXmenlAWsM5C7MP1EC5oyKqIkiwpK6zr--QISQyWW919v_4-tZKGEMyXyMFBREiBVwca1ea_uuO5hWmWPt7skt0k_3ZHK1sghflpgLVBaD-QQ'}} style={styles.background}>
            <TouchableOpacity style = {styles.cards} onPress = {() => {
                props.navigation.navigate({
                    routeName : 'BooksDetails',
                    params: {
                        bookId : itemData.item.id
                    }
                });                    
            }}>
         
            <View style = {styles.imageContainer}>
            <Image source = {itemData.item.image} style={styles.image}/>
            </View>
            <View style = {styles.textContainer}>
                <Text style = {styles.text} ><Text style={styles.textColor}>Book:</Text> {itemData.item.name}</Text>
                <Text style = {styles.text} numberOfLines = {2}><Text style={styles.textColor}>Pages:</Text>{itemData.item.Pages}</Text>
                <Text style = {styles.text} numberOfLines = {2}><Text style={styles.textColor}>Author:</Text> {itemData.item.author}</Text>
                
                </View>
               
                </TouchableOpacity>
                </ImageBackground>
            </View>
            
        );
    };
    return (
        <View style={styles.list}>
        <FlatList data={props.listData} 
                 renderItem ={renderSingleItem} 
                 horizontal/>
     </View>
     
    );

};

const styles = StyleSheet.create({
    list :{
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Platform.OS === 'ios' ? 'white' : 'white'

    },
    background:{
        flex:1,
        resizeMode: 'cover',
        justifyContent:'center'
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
        shadowOffset:{width:8,height:8},
        elevation: 5,

    },
    imageContainer: {
        width: Platform.OS === 'ios' ? 360 : '100%',
        height: Platform.OS === 'ios' ? 572 : '85%',
        borderRadius: 25,
        marginBottom: Platform.OS === 'ios' ? 31 : 18,
    },
    textContainer: {
        width: '90%',
        height:80,
        justifyContent:'center',
        alignItems: 'flex-start',
        marginBottom: 13,
        padding:20,
        overflow: 'visible'

        
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
    textColor:{
        fontWeight: 'bold',
        color: defaultStyles.iosAccent
    },
    text:{
        fontSize:Platform.OS === 'ios' ? 1 : 14,
    },

});

export default ListCard;
