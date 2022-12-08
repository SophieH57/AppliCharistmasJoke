import React, { useState } from 'react'
import { StyleSheet, View, Text, Pressable } from "react-native";
import {ThemeContext, themes} from './ThemeContext';

export function ThemeProvider(props){
    return(
        <ThemeContext.Provider value={themes}>{props.children}</ThemeContext.Provider>
    )
}