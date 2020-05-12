import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

import BooksScreen from '../screens/Books';
import Categories from '../screens/CategoriesScreen';
import BooksDetails from '../screens/BooksDetails';
import BooksCompleted  from '../screens/BooksCompleted';
import FilterScreen from '../screens/FilterScreen';

import { Platform } from 'react-native';
import defaultStyle from '../constants/themeColors';
import FavouriteBooks from '../screens/favouriteBooks';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const DefaulNavHeaderOptions = { headerStyle: {
    backgroundColor: Platform.OS === 'android' ? 'white' : 'white'
},
headerTintColor:Platform.OS == 'android' ? defaultStyle.iosAccent : defaultStyle.iosAccent
};

const BooksNavigator = createStackNavigator({
    Categories: Categories,
    BooksScreen: BooksScreen,
    BooksDetails: BooksDetails,
   
}, {
    defaultNavigationOptions:DefaulNavHeaderOptions
    });
 //-------------------------------------------------------
    const FavStackNavigator = createStackNavigator({
        Favourite: FavouriteBooks,
        BooksDetails: BooksDetails,
    }, {defaultNavigationOptions:DefaulNavHeaderOptions });
// ------------------------------------------------------------
    const CompleteStackNavigator = createStackNavigator({
        Completed: BooksCompleted,
        BooksDetails:BooksDetails,
    },{ defaultNavigationOptions: DefaulNavHeaderOptions});
// --------------------------------------------------------

    const FilterNavigator = createStackNavigator({
        filter: FilterScreen
    },{navigationOptions:
         {
        drawerLabel: 'Filter'
         },
        defaultNavigationOptions:DefaulNavHeaderOptions

    });

//------------------------------------------------------------
const tabScreenConfig = {
    home: {screen: BooksNavigator,
        navigationOptions :{
                tabBarLabel: " ",
                tabBarColor: 'white',
                tabBarIcon: (tabInfo) => {
            return (
                <Entypo name="home" size={24} color={tabInfo.tintColor} />
            );
        }
    }
        },
favourites:{screen: FavStackNavigator,
        navigationOptions:{
            tabBarLabel: " ",
            tabBarColor: 'white',
              tabBarIcon: (tabInfo) => {
                return <AntDesign name="heart" size = {24} color = {tabInfo.tintColor} />;
            }
        }
    },
Completed:{screen: CompleteStackNavigator,
           navigationOptions:{
               tabBarLabel:" ",
               tabBarColor: "white",
               tabBarIcon:(tabInfo) => {
                   return(<Ionicons name="md-done-all" size={24} color={tabInfo.tintColor} />

                   );
               }
           }
},

};



const TabsNavigator = Platform.OS === 'android' 
? createMaterialBottomTabNavigator(tabScreenConfig,{
     activeColor : defaultStyle.iosAccent,
     inactiveColor: 'black',
     barStyle : {backgroundColor: defaultStyle.backgroundColor},
     shifting : true

}) :
 createBottomTabNavigator(tabScreenConfig,{
            tabBarOptions:{

           activeBackgroundColor: Platform.OS == 'android' ? defaultStyle.cardColor : 'white',
           inactiveBackgroundColor: Platform.OS == 'android' ? defaultStyle.backgroundColor : 'white',
           activeTintColor:Platform.OS == 'android' ? "white" : defaultStyle.iosAccent,
           inactiveTintColor: Platform.OS == 'android' ? 'white' : 'black',
           

        }
    
});


const MainNavigator = createDrawerNavigator({
    favourites:{screen:TabsNavigator, 
        navigationOptions: {
        drawerLabel: 'Books'
    },},
    Filter:FilterNavigator,

},{
    contentOptions:{
        activeTintColor: defaultStyle.iosAccent,
        //labelStyle: {fontFamily:'OpenSansLight'},
    },
});

export default createAppContainer(MainNavigator);

