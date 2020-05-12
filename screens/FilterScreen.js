import React, { useState,useEffect, useCallback  } from 'react';
import {View, Text, StyleSheet, Switch, ScrollView, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/headerButton';
import defaultStyles from '../constants/themeColors';
import { useSelector } from 'react-redux';


const SwitchComponent = props =>{
    
    return (
        <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>{props.label}</Text>
            <Switch value = {props.state}
                    onValueChange = {props.onChange}
                    trackColor = {{true:defaultStyles.iosAccent}}
                    thumbColor = {defaultStyles.iosAccent}
            />
    </View>
   

    );
};

const FilterScreen = props => {
    const  {navigation} = props;
    const [isFiction, setisFiction] = useState(false);
    const [isNonFiction, setisNonFiction] = useState(false);
    const [isCrime, setisCrime] = useState(false);
    const [isHorror, setisHorror] = useState(false);
    const [isHumour, setisHumour] = useState(false);
    const [isClassic, setisClassic] = useState(false);
    const [isMythology, setisMythology] = useState(false);
    const [isScienceFiction, setisScienceFiction] = useState(false);
    const [isBiography, setisBiography] = useState(false);
    const [isSelfHelp, setisselfHelp] = useState(false);

    const saveFilters = useCallback(() =>{
        const appliedFilters = {
        Fiction : isFiction ,
        NonFiction : isNonFiction,
        Crime : isCrime,
        Horror : isHorror,
        Humour : isHumour,
        Classic : isClassic,
        Mythology : isMythology,
        ScienceFiction : isScienceFiction,
        Biography : isBiography,
        SelfHelp : isSelfHelp,
        };
        console.log(appliedFilters)
    }, [isFiction, isClassic, isCrime, isHorror, isHumour, isMythology,isBiography, isSelfHelp ]);

    useEffect(() =>{
        navigation.setParams({save: saveFilters});
    }, [saveFilters]);

    return (
        <ScrollView style={styles.screen}>
        <View style={styles.container} >
        <View style={styles.titleContainer}>
            <Text style={styles.text}>Filters Available</Text>
            </View>
                <SwitchComponent label="Fiction" 
                                 state = {isFiction} 
                                 onChange = {newValue => setisFiction(newValue)}/>
            
                <SwitchComponent label="Non-Fiction" 
                                 state = {isNonFiction} 
                                 onChange = {newValue => setisNonFiction(newValue)}/>
            
                <SwitchComponent label="Crime" 
                                 state = {isCrime} 
                                 onChange = {newValue => setisCrime(newValue)}/>
            
                <SwitchComponent label="Horror" 
                                 state = {isHorror} 
                                 onChange = {newValue => setisHorror(newValue)}/>
            
                <SwitchComponent label="Humour" 
                                 state = {isHumour} 
                                 onChange = {newValue => setisHumour(newValue)}/>
            
                <SwitchComponent label="Classic" 
                                 state = {isClassic} 
                                 onChange = {newValue => setisClassic(newValue)}/>
            
                <SwitchComponent label="Mythology" 
                                 state = {isMythology} 
                                 onChange = {newValue => setisMythology(newValue)}/>
            
                <SwitchComponent label="Science Fiction" 
                                 state = {isScienceFiction} 
                                 onChange = {newValue => setisScienceFiction(newValue)}/>
            
                <SwitchComponent label="Biography" 
                                 state = {isBiography} 
                                 onChange = {newValue => setisBiography(newValue)}/>
            
                <SwitchComponent label="Self Help" 
                                 state = {isSelfHelp} 
                                 onChange = {newValue => setisselfHelp(newValue)}/>
            
           
        </View>
        </ScrollView>
    );
};
FilterScreen.navigationOptions = navData => {
    return {
        headerTitle :'Filter Books',
    headerLeft: () => {
        return <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Favourite' iconName='ios-menu' onPress = {() =>{
            navData.navigation.toggleDrawer();
            }}/>
        </HeaderButtons>
    },
    headerRight: () => {
        return <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Favourite' iconName='md-save' onPress = {navData.navigation.getParam('save')}/>
        </HeaderButtons>
    },


    };
    
   

}


const styles = StyleSheet.create({
    screen:{
        flex:1,
        marginTop: 20,
        
    },
    container:{
        alignItems: 'center',
    },
    text:{
        fontSize:34,
        fontWeight:'bold',
    },
    titleContainer:{
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        shadowColor:'lightgrey',
        shadowOpacity: 0.4,
        shadowOffset:{width:0,height:4},
    },
    switchContainer:{
        margin: 20,
        width: 220,
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    switchLabel:{
        fontSize:Platform.OS === 'ios' ? 20 : 19,
        fontWeight:'bold',
        width: '80%',
        color: defaultStyles.iosAccent,
    },
});

export default FilterScreen;