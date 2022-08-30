import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-virtualized-view';

import Header from '../components/Header';
import testimonial from '../data/reviewData';
import { colors } from '../theme';
import AppText from '../components/AppText';

export default function Reviews({ navigation }) {
  return (
    <>
      <Header
        style={{ backgroundColor: colors.light }}
        title="Review"
        onPress={() => navigation.goBack()}
      />

      <ScrollView
        style={{
          flexGrow: 1,
          backgroundColor: colors.light,
        }}
        contentContainerStyle={{ paddingVertical: 30, paddingHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
      >

        <FlatList
          data={testimonial}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <View style={styles.reviewBox}>
                <View style={styles.review}>
                  <Image source={item.user} />
                  <View style={styles.reviewInfo}>
                    <AppText style={styles.reviewName} preset='h4'>{item.name}</AppText>
                    <View style={styles.reviewRating}>
                      {item.rating}{item.rating}{item.rating}{item.rating}{item.rating}
                    </View>
                  </View>
                </View>
                <AppText>{item.desc}</AppText>
              </View>
            )
          }}
        />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  reviewBox: {
    padding: 20,
    borderRadius: 5,
    backgroundColor: colors.white,
    marginBottom: 15,
  },
  review: {
    flexDirection: 'row',
    marginBottom: 20
  },
  reviewInfo: {
    marginLeft: 15,
  },
  reviewName: {
    color: colors.black,
    marginBottom: 5,
  },
  reviewRating: {
    flexDirection: 'row'
  }
})