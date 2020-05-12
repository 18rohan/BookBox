import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import defaultStyle from '../constants/themeColors';


const CustomHeaderButton = props =>{
    return (
        <HeaderButton {...props} IconComponent={Ionicons} iconSize={24} color ={defaultStyle.iosAccent}/>
    );
};

export default CustomHeaderButton;