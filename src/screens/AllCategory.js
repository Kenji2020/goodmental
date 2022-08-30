import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';

import AppText from '../components/AppText';
import Header from '../components/Header';
import categoryData from '../data/catogoryData';
import { colors, spacing } from '../theme';
import adjust from '../theme/adjust';

const AllCategory = ({ navigation }) => {

  function categoryArea() {
    return (
      <View style={styles.container}>
        <View>
          <FlatList
            data={categoryData}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={{
                  width: "30%",
                  paddingVertical: 15,
                  paddingHorizontal: 15,
                  margin: 5,
                  backgroundColor: colors.white,
                }}>
                  <View

                  >
                    {item.icon}
                    <AppText preset="h5"
                      style={{ color: colors.black, marginTop: spacing[4],fontSize:adjust(12) }}>
                      {item.title}
                    </AppText>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    );
  }
  return (
    <>
      <Header
        style={{ backgroundColor: colors.light }}
        title="Category"
        onPress={() => navigation.goBack()}
      />

      <ScrollView
        style={{
          flexGrow: 1,
          backgroundColor: colors.light,
        }}
        contentContainerStyle={{}}
      >
        {categoryArea()}
      </ScrollView>

    </>
  )
}

export default AllCategory;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 35
  }
})