import React from "react";
import {View,StyleSheet,FlatList, TouchableOpacity,Image} from "react-native";
import { ScrollView } from 'react-native-virtualized-view';
import { Entypo } from "@expo/vector-icons";

import AppText from "../components/AppText";
import categoryData from "../data/catogoryData";
import coursesData from "../data/coursesData";
import { colors } from "../theme";
import { spacing } from "./../theme/spacing";
import adjust from "../theme/adjust";
import SingleCourse from "../components/SingleCourse";
import HomeSlider from "../components/HomeSlider";

export default function Home({ navigation }) {

  function categoryArea() {
    return (
      <View style={[styles.container,{marginTop:30}]}>
        <View style={styles.title}>
          <AppText preset="h4" style={{ color: colors.black }}>
            Catagory
          </AppText>
          <TouchableOpacity onPress={() => navigation.navigate("AllCategory")}>
            <AppText preset="h4" style={{ color: colors.primary, fontSize: 16 }}>
              See all
            </AppText>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={categoryData.slice(0, 5)}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ flexDirection: "row" }}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                  <View
                    style={{
                      width: 130,
                      paddingVertical: 15,
                      paddingHorizontal: 15,
                      margin: 5,
                      backgroundColor: colors.white,
                    }}
                  >
                    {item.icon}
                    <AppText
                      preset="h5"
                      style={{ color: colors.black, marginTop: spacing[4] }}
                    >
                      {item.title}
                    </AppText>
                  </View>
              );
            }}
          />
        </View>
      </View>
    );
  }

  function curseAreaStart() {
    return (
      <View style={[styles.container, { marginTop: spacing[12] }]}>
        <View style={styles.title}>
          <AppText preset="h4" style={{ color: colors.black }}>
            Top Courses
          </AppText>
          <TouchableOpacity onPress={() => navigation.navigate('AllCourses')}>
            <AppText preset="h4" style={{ color: colors.primary, fontSize: 16 }}>
              See all
            </AppText>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={coursesData.slice(0, 4)}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return <SingleCourse item={item} verticalItems={false} />;
            }}
          />
        </View>
      </View>
    );
  }

  const PopularCourse = () => {
    return (
      <View style={[styles.container, { marginTop: spacing[12] }]}>
        <View style={styles.title}>
          <AppText preset="h4" style={{ color: colors.black }}>
            Popurlar Courses
          </AppText>
        </View>
        <View>
          {coursesData.slice(0, 4).map((item) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('CourseDetails', { item })} key={item.id}>
                <View style={styles.popularCourseItem}>
                  <Image
                    resizeMode="cover"
                    style={styles.popularImg}
                    source={item.image}
                  />
                  <View style={styles.popularDetails}>
                    <AppText preset="h5"
                      style={styles.popularTitle} >
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
                      <View style={{flexDirection:"row",alignItems:'center'}}>
                        <Entypo name="dot-single" size={20}
                          color={colors.gray3} />
                        <AppText style={{ color: colors.gray3, fontWeight: "500", fontSize: adjust(12) }}>
                          {item.expert}
                        </AppText>
                      </View>
                      <View style={{flexDirection:"row",alignItems:'center'}}>
                        <Entypo name="dot-single" size={20}
                          color={colors.gray3} />
                        <AppText style={{ color: colors.gray3, fontWeight: "500", fontSize: adjust(12)}}>
                          {item.student} Students
                        </AppText>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <ScrollView
      style={{flexGrow: 1,backgroundColor: colors.light}}
      contentContainerStyle={{ paddingBottom: 30}}
      showsVerticalScrollIndicator={false}
    >
      {/* slider course start */}
      <HomeSlider/>
      {/* slider course end */}

      {/* category start */}
      {categoryArea()}
      {/* category end */}

      {/* course start */}
      {curseAreaStart()}
      {/* course end */}

      {/* course start */}
      <PopularCourse />
      {/* course end */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  popularCourseItem: {
    width: "100%",
    padding: 10,
    backgroundColor: colors.white,
    overflow: "hidden",
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 10,
  },
  popularImg: {
    alignSelf: "flex-start",
    width: adjust(100),
    height: adjust(100),
    borderRadius: 10,
    overflow: "hidden",
  },
  popularDetails: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    flex: 1,
  },
  popularTitle: {
    color: colors.black,
    marginTop: spacing[4],
    fontSize: adjust(15),
  }
});
