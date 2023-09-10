import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function About (){
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.detailReviewText}>Dunia Film adalah aplikasi yang dirancang khusus untuk para pecinta film yang ingin mendapatkan ulasan yang akurat dan terpercaya sebelum menonton atau mengunduh film favorit mereka. Aplikasi ini menghubungkan pengguna dengan komunitas besar pengulas film, memungkinkan mereka untuk berbagi pendapat, penilaian, dan ulasan mereka tentang berbagai film dari berbagai genre.</Text>
        </View>
    )
}

