import React from 'react';
import { View, FlatList, Dimensions, StatusBar} from 'react-native';
import CarItem from "../CarItem";


import styles from "./styles";
import cars from "./cars";

const CarsList = (props) => {
    return (
        <View style={styles.container}> 
            <FlatList
                style={styles.list}
                data={cars}
                renderItem={({item}) => <CarItem car={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={"start"}
                decelerationRate={"fast"}
                snapToInterval={Dimensions.get("window").height + StatusBar.currentHeight}
            />
        </View>
    );
};

export default CarsList;