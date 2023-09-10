import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";

export default function ReviewDetails({ route, navigation }) {
    const { title } = route.params;
    const { body } = route.params;
    const { rating } = route.params;
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.reviewTitleText}>{JSON.stringify(title).replace(/"/g, '')}</Text>
                <Text style={globalStyles.detailReviewText}>{JSON.stringify(body).replace(/"/g, '')}</Text>
                <View style={styles.rating}>
                    <Text style={globalStyles.detailReviewText}>Rating: </Text>
                    <Image source={images.ratings[rating]}/>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',

    }
})

