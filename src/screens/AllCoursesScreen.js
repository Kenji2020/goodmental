import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import { useNavigation } from '@react-navigation/native';

import Header from '../components/Header';
import { colors } from '../theme';
import coursesData from '../data/coursesData';
import SingleCourse from '../components/SingleCourse';

const AllCoursesScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header
        style={{ backgroundColor: colors.light }}
        title="All Courses"
        onPress={() => navigation.goBack()}
      />
      <ScrollView
        style={styles.mainContainer}
        contentContainerStyle={{ paddingVertical: 30 }}
        showsVerticalScrollIndicator={false}
      >
        <FlatList
          data={coursesData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <SingleCourse verticalCourses={true} item={item} />
          )}
        />
      </ScrollView>
    </>
  )
}

export default AllCoursesScreen;

const styles = StyleSheet.create({
  mainContainer:{
    flexGrow: 1,
    backgroundColor: colors.light,
  },
 
})