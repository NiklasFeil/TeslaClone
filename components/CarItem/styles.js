import {StyleSheet, Dimensions, StatusBar} from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: "100%",
        height: Dimensions.get("window").height + StatusBar.currentHeight,
      },
      image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        position: "absolute"
      },
      titles: {
        marginTop: "30%", 
        width: "100%",
        alignItems: "center",
      },
      title: {
        fontSize: 40,
        fontWeight: "500",
      },
      subtitles: {
        fontSize: 16,
        color: "#5c5e62",
      },
      subtitlesCTA: {
        textDecorationLine: "underline",
      },
      buttonsContainer: {
        width: "100%",
        position: "absolute",
        bottom: 50,
      }
});

export default styles;