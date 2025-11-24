import { View, Text, Image, Dimensions, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import testresturants from "../../../Images/Points/testresturamts.png";
import styels from '../../Components/styels';

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const CARD_WIDTH = SCREEN_WIDTH * 0.6;
const CARD_HEIGHT = 180; // Fixed height - CRITICAL!

const Resturants = ({ ResturtantName = "Restaurant Name", discount = "40%", points = "450 Pts", resturantimage, onPress }) => {
  return (
    <Pressable onPress={onPress} style={{ marginRight: 16 }}>
      <View style={styles.card}>
        <Image 
          source={resturantimage || testresturants} 
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.content}>
          <Text style={styles.name} numberOfLines={1}>{ResturtantName}</Text>
          <View style={styles.row}>
            <Text style={styles.discount}>{discount}</Text>
            <Text style={styles.dot}> • </Text>
            <Text style={styles.points}>{points}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: "white",
    borderRadius: 20,
    overflow: "hidden",
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  image: {
    width: "100%",
    height: "65%",
  },
  content: {
    padding: 12,
    flex: 1,
    justifyContent: "space-between",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  discount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#e91e63",
  },
  dot: {
    marginHorizontal: 8,
    fontSize: 18,
    color: "#999",
  },
  points: {
    fontSize: 15,
    color: "#666",
  },
});

export default Resturants;