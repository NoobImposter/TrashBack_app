// PointsIndex.js - FINAL VERSION WITH FLATLIST (BEST PERFORMANCE)

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styels from '../Components/styels';
import Topbar from '../Components/Topbar';
import Resturants from './Components/Resturants';
import TopDeals from './Components/TopDeals';
import Allresturants from './Components/Allresturants';

const PointsIndex = () => {
  const [points, setPoints] = useState(1250);
  const [cash, setCash] = useState(0);
  const [search, setSearch] = useState('');

  // Dummy data for All Deals
  const allDealsData = [
    { id: '1', name: 'KFC - 50% Off', discount: '50%', points: '800 Pts' },
    { id: '2', name: 'McDonald\'s Deal', discount: '40%', points: '600 Pts' },
    { id: '3', name: 'Pizza Hut Large', discount: '35%', points: '700 Pts' },
    { id: '4', name: 'OPTP Combo', discount: '45%', points: '550 Pts' },
    { id: '5', name: 'Subway Footlong', discount: '30%', points: '400 Pts' },
    { id: '6', name: 'Broadway Pizza', discount: '60%', points: '900 Pts' },
    { id: '7', name: 'Howdy Burger', discount: '55%', points: '750 Pts' },
    { id: '8', name: 'Cheezious Deal', discount: '40%', points: '650 Pts' },
    { id: '9', name: 'Gloria Jean\'s', discount: '25%', points: '300 Pts' },
    { id: '10', name: 'Second Cup', discount: '35%', points: '500 Pts' },
  ];

  useEffect(() => {
    setCash(Math.floor(points * 0.8));
  }, [points]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
      <Topbar textsinput="Recycle Points" />

      {/* Search */}
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search deals, restaurants..."
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* MAIN SCROLLVIEW */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >

        {/* Rewards Card */}
        <View style={styles.rewardsCard}>
          <View style={styles.rewardsInner}>
            <View>
              <Text style={styels.paragraphtext}>Total Points</Text>
              <Text style={styles.bigPoints}>{points}</Text>
              <Text style={styels.paragraphtext}>≈ {cash} PKR</Text>
            </View>
            <TouchableOpacity onPress={() => setPoints(p => p + 500)}>
              <View style={styles.redeemBtn}>
                <Text style={styles.redeemText}>{cash} PKR</Text>
                <Text style={{ fontSize: 12, color: '#1b5e20' }}>Redeem</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', paddingLeft: 16, paddingRight: 20 }}>
              <TopDeals discount="50%" points="600 Pts" />
              <TopDeals discount="40%" points="450 Pts" />
              <TopDeals discount="60%" points="800 Pts" />
              <TopDeals discount="30%" points="350 Pts" />
              <TopDeals discount="70%" points="1000 Pts" />
            </View>
          </ScrollView>
        </View>

        {/* Featured Brands */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Brands</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', paddingLeft: 16, paddingRight: 20 }}>
              <Resturants ResturtantName="KFC" discount="50%" points="800 Pts" />
              <Resturants ResturtantName="McDonald's" discount="40%" points="600 Pts" />
              <Resturants ResturtantName="Pizza Hut" discount="35%" points="700 Pts" />
              <Resturants ResturtantName="Domino's" discount="45%" points="750 Pts" />
              <Resturants ResturtantName="Hardee's" discount="30%" points="500 Pts" />
            </View>
          </ScrollView>
        </View>

        {/* Top Deals */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top Deals</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', paddingLeft: 16, paddingRight: 20 }}>
              <TopDeals discount="70%" points="1000 Pts" />
              <TopDeals discount="55%" points="750 Pts" />
              <TopDeals discount="60%" points="900 Pts" />
              <TopDeals discount="45%" points="650 Pts" />
            </View>
          </ScrollView>
        </View>

        {/* ALL DEALS - FLATLIST (GUARANTEED FULL RENDER) */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>All Available Deals</Text>

          <FlatList
            data={allDealsData}
            renderItem={({ item }) => (
              <Allresturants
                ResturtantName={item.name}
                discount={item.discount}
                points={item.points}
              />
            )}
            keyExtractor={item => item.id}
            scrollEnabled={false}                  // Parent ScrollView handle karega scroll
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            // Agar bohot items hain toh extra space
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    margin: 16,
    backgroundColor: '#fff',
    borderRadius: 30,
    elevation: 4,
  },
  searchInput: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    fontSize: 16,
  },
  rewardsCard: {
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    elevation: 8,
  },
  rewardsInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bigPoints: {
    fontSize: 44,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginVertical: 6,
  },
  redeemBtn: {
    backgroundColor: '#CAEBC2',
    paddingHorizontal: 28,
    paddingVertical: 18,
    borderRadius: 20,
    alignItems: 'center',
  },
  redeemText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1b5e20',
  },
  section: {
    marginTop: 28,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
});

export default PointsIndex;