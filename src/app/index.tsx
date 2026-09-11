import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Beach');

  const categories = ['Beach', 'Mountain', 'Waterfalls', 'Lakes'];

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        {/* App Title / Brand Header (Bigger Size, Centered, Light Blue) */}
        <View style={styles.brandHeader}>
          <Text style={styles.brandTitle}>Sans Saints</Text>
        </View>

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Discover</Text>
          </View>
          <View style={styles.headerIcons}>
            <Text style={styles.iconText}>🔍</Text>
            <Text style={styles.iconText}>🔔</Text>
          </View>
        </View>

        {/* Categories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
          {categories.map((cat) => (
            <TouchableOpacity 
              key={cat} 
              onPress={() => setActiveTab(cat)}
              style={[styles.categoryBtn, activeTab === cat && styles.activeCategoryBtn]}
            >
              <Text style={[styles.categoryText, activeTab === cat && styles.activeCategoryText]}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Main Content / Featured Cards */}
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
          <View style={styles.cardCenterWrapper}>
            <View style={styles.card}>
              <ImageBackground 
                source={{ uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e' }} 
                style={styles.cardImage}
                imageStyle={{ borderRadius: 20 }}
              >
                <View style={styles.cardOverlay}>
                  <View style={styles.cardInfo}>
                    <Text style={styles.cardTitle}>Kanifushi</Text>
                    <Text style={styles.cardSubtitle}>Maldives, South Asia</Text>
                  </View>
                  <View style={styles.ratingBadge}>
                    <Text style={styles.ratingText}>⭐ 4.8</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </View>

          {/* Top Destination Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Destination</Text>
            <Text style={styles.dots}>•••</Text>
          </View>

          <View style={styles.destinationsRow}>
            <View style={styles.smallCard}>
              <ImageBackground 
                source={{ uri: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2' }} 
                style={styles.smallCardImage}
                imageStyle={{ borderRadius: 15 }}
              />
              <Text style={styles.smallCardText}>McWays</Text>
            </View>

            <View style={styles.smallCard}>
              <ImageBackground 
                source={{ uri: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff' }} 
                style={styles.smallCardImage}
                imageStyle={{ borderRadius: 15 }}
              />
              <Text style={styles.smallCardText}>Santorini</Text>
            </View>
          </View>
        </ScrollView>

        {/* Bottom Navigation Bar */}
        <View style={styles.bottomNav}>
          <Text style={styles.navIconActive}>🏠</Text>
          <Text style={styles.navIcon}>🧭</Text>
          <Text style={styles.navIcon}>❤️</Text>
          <Text style={styles.navIcon}>👤</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingTop: 20,
    paddingHorizontal: 25,
    width: '100%',
    maxWidth: 500,
  },
  brandHeader: {
    alignItems: 'center',
    marginBottom: 15,
  },
  brandTitle: {
    fontSize: 24, // ফন্ট সাইজ বাড়িয়ে বড় করা হয়েছে
    fontWeight: '800',
    color: '#38BDF8', // প্রিমিয়াম লাইট ব্লু কালার
    letterSpacing: 1.5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 15,
  },
  iconText: {
    fontSize: 20,
  },
  categoriesContainer: {
    maxHeight: 50,
    marginBottom: 20,
  },
  categoryBtn: {
    marginRight: 25,
    paddingVertical: 8,
  },
  activeCategoryBtn: {
    borderBottomWidth: 2,
    borderBottomColor: '#111',
  },
  categoryText: {
    fontSize: 16,
    color: '#888',
    fontWeight: '600',
  },
  activeCategoryText: {
    color: '#111',
  },
  cardCenterWrapper: {
    alignItems: 'center',
    marginBottom: 30,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    height: 350,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardImage: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 15,
  },
  cardOverlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#666',
  },
  ratingBadge: {
    backgroundColor: '#FFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
  },
  dots: {
    color: '#888',
    fontWeight: 'bold',
  },
  destinationsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginBottom: 30,
  },
  smallCard: {
    width: 150,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 5,
  },
  smallCardImage: {
    flex: 1,
  },
  smallCardText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    marginTop: 5,
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navIconActive: {
    fontSize: 22,
  },
  navIcon: {
    fontSize: 22,
    opacity: 0.5,
  },
});