import React from 'react';
import { View, 
         Text, 
         StyleSheet, 
         Button, 
         FlatList, 
         TouchableOpacity, 
         Platform, 
         ImageBackground,
         Image } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/headerButton';
import defaultStyle from '../constants/themeColors';
import { Ionicons } from  '@expo/vector-icons';


const Categories = props => {


const renderItemGrid = (itemData) => {
    return (
        
        <TouchableOpacity  style = {styles.list} onPress = {() => {
            props.navigation.navigate({
                routeName: 'BooksScreen',
                params: {
                    categoryId: itemData.item.id
                },});
        }}>
        <View >
        <View style= {styles.cards1} >
        <View style={styles.cardContainer}>
            <Image source = {itemData.item.image} style = {styles.image} resizeMode="stretch" resizeMethod="scale"/>
            </View>
            <View style={styles.cardTextContainer}>
            <Text style={styles.cardText} numberOfLines = {2}>{itemData.item.title}</Text>
            </View>
            </View>
        </View>
        </TouchableOpacity>
        
    );
};


    return (
        <View style={styles.screen}>
        <ImageBackground source ={{uri : "https://lh3.googleusercontent.com/proxy/sdXOJO_cCww0RaF1JuXSIIdAqwbvlvb4xhjFlUvakyL6mGOhwrHuHY60VlYrUTXmenlAWsM5C7MP1EC5oyKqIkiwpK6zr--QISQyWW919v_4-tZKGEMyXyMFBREiBVwca1ea_uuO5hWmWPt7skt0k_3ZHK1sghflpgLVBaD-QQ"}} style ={styles.background}>
        <FlatList 
        
        data = { CATEGORIES }
        renderItem={renderItemGrid} 
        numColumns = {2}/>
        </ImageBackground>
        </View>
    );
};

Categories.navigationOptions = navData => {
    return {
        headerTitle :'BookBOX',
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
    screen :{
        flex: 1,
       
        //backgroundColor:Platform.OS === 'android' ? 'white' : 'white',
    },
    background:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: 'center',
    },
    buttonContainer:{
        marginTop: 45,
        flexDirection: 'row',
        justifyContent:'space-around'
    },
    image:{
        width: '100%',
        height:'100%',
        marginBottom: 16,
        borderRadius:20,
        
    },
    list:{
        flex: 1,
        margin: 15,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: CATEGORIES.color

    },
    cardContainer:{
        width: 185,
        height: 160,
        borderRadius: 20,
        

    },
    cards: {
        width: 185,
        height: 270,
        backgroundColor: Platform.OS == 'android' ? "white" : "white",
        borderRadius: 20,
        borderColor: 'grey',
        
        shadowOpacity :0.6,
        shadowOffset:{width:0,height:8},
        justifyContent: 'center',
        alignItems: 'center',
        elevation:3,
        overflow:'hidden',
        elevation: 5,

    },
    cards1:{
        flex:1,
        width: 185,
        height: 200,
        backgroundColor:Platform.OS == 'ios' ? 'white': 'white',
        margin:15,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOpacity :0.6,
        shadowOffset:{width:6,height:8},
        elevation: 5,

    },
    cardText:{
        fontSize: Platform.OS === 'ios' ? 23 : 22,
        fontWeight: 'bold',
        color: defaultStyle.iosAccent,
        width: Platform.OS === 'android' ? '100%' : '100%',
        justifyContent: 'flex-start'

        },
    cardTextContainer:{
        flex: 1,
        width: 150,
        marginBottom: 8,
        marginTop: 36,
        overflow:'visible',
        alignItems: Platform.OS === 'ios' ? 'center': 'flex-start',
        padding: Platform.OS === 'android' ? 3 : 0,
        
        
    },
});

export default Categories;