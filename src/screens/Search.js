import React, { useState } from "react";
import { StyleSheet, TextInput, View, FlatList, TouchableOpacity, Image, Text, ScrollView } from "react-native";
// import { ScrollView } from 'react-native-virtualized-view';
import { colors, spacing, typography } from "../theme";
import { Ionicons, Entypo } from "@expo/vector-icons";
import coursesData from "../data/coursesData";
import AppText from "../components/AppText";
import adjust from "../theme/adjust";

const Search = ({ navigation }) => {
  const [coursesItems, setCoursesItems] = useState(coursesData);
  const setFilterCourses = text => {
    const searchCourses = coursesData.filter(item => {
      const userType = text.toLowerCase();
      const courseTitle = item.title.toLowerCase();
      return courseTitle.includes(userType)
    })
    setCoursesItems(searchCourses)
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 35, paddingHorizontal: 20 }}
      >
        <View style={styles.inputContainer}>
          <Ionicons style={styles.icon} name="md-search-outline"
            size={22} color="black"/>
          <TextInput onChangeText={text => setFilterCourses(text)} placeholder="Search your Course" />
        </View>

        {coursesItems.map((item) => {
          return (
            <TouchableOpacity key={item.id}
            onPress={()=> navigation.navigate("CourseDetails",{item})}>
              <View style={styles.coursesItems}>
                <Image
                  resizeMode="cover"
                  style={styles.courseImg}
                  source={item.image}
                />
                <View style={styles.courseDetails}>
                  <AppText preset="h5"
                    style={styles.courseTitle} >
                    {item.title}

                  </AppText>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingTop: spacing[3],
                      flexWrap: 'wrap'
                    }}
                  >
                    <View style={{
                      flexDirection: "row",
                      alignItems: 'center',
                    }}>
                      <Entypo name="dot-single" size={20}
                        color={colors.gray3} />
                      <AppText
                        style={{ color: colors.gray3, fontWeight: "500", fontSize: adjust(12) }}
                      >
                        {item.expert}
                      </AppText>
                    </View>
                    <View style={{
                      flexDirection: "row",
                      alignItems: 'center',
                    }}>
                      <Entypo name="dot-single" size={20}
                        color={colors.gray3} />
                      <AppText
                        style={{ color: colors.gray3, fontWeight: "500", fontSize: adjust(12) }}
                      >
                        {item.student} Students
                      </AppText>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.light2,
  },
  inputContainer: {
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.light2,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    color: colors.lightGray,
    marginRight: 10,
  },
  coursesItems: {
    width: "100%",
    padding: 10,
    backgroundColor: colors.white,
    overflow: "hidden",
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 15,
  },
  courseImg: {
    alignSelf: "flex-start",
    width: adjust(100),
    height: adjust(100),
    borderRadius: 10,
    overflow: "hidden",
  },
  courseDetails: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    flex: 1,
  },
  courseTitle: {
    color: colors.black,
    marginTop: spacing[4],
    fontSize: adjust(15),
    // maxWidth: adjust(220),
  }
});
