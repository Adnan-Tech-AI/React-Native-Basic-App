import React from 'react';
import { Text, View, StyleSheet } from "react-native";

function AppText({ title, textsize = 16, textcolor = "black", fontWeight = "bold", marginTop = null, textAlign = null }) {
    return (
        <Text style={{ color: textcolor, fontSize: textsize, fontFamily: "Roboto", fontWeight: fontWeight, marginTop: marginTop, textAlign: textAlign }}>{title}</Text>
    );
}

export default AppText;