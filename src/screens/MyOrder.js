import React from 'react';
import {FlatList,StyleSheet,View,Image,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';

import AppText from '../components/AppText';
import Header from '../components/Header';
import { Ionicons } from "@expo/vector-icons";
import myOrderData from '../data/myOrderData';
import { colors, spacing } from '../theme';

const MyOrder = ({ navigation }) => {
  return (
    <>
      <Header
        style={{ backgroundColor: colors.light }}
        title="My Order"
        onPress={() => navigation.navigate("Profile")}
      />

      <ScrollView
        style={{
          flexGrow: 1,
          backgroundColor: colors.light,
        }}
        contentContainerStyle={{ paddingVertical: 30, paddingHorizontal: 20 }}
      >
        <View>
          <FlatList
            data={myOrderData}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity>
                  <View
                    style={{
                      width: "100%",
                      height: 330,
                      marginBottom: 20,
                      backgroundColor: colors.white,
                      overflow: "hidden",
                      borderRadius: 10,
                    }}
                  >

                    <View>
                      <Image style={{ alignSelf: "flex-start", width: "100%" }}
                        source={item.image} />
                    </View>


                    <View style={{ padding: 15 }}>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <Ionicons
                            name="library-outline"
                            size={18}
                            color={colors.lightGray}
                          />
                          <AppText style={{ marginLeft: 6 }}>
                            {item.lesson} Lesson
                          </AppText>
                        </View>

                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Ionicons
                            name="md-star"
                            size={18}
                            color={colors.golden}
                          />
                          <AppText
                            style={{ marginLeft: 6, alignSelf: "center" }}
                          >
                            {item.rating}
                          </AppText>
                        </View>
                      </View>

                      <AppText
                        preset="h5"
                        style={{
                          color: colors.black,
                          marginVertical: spacing[4],
                        }}
                      >
                        {item.title}
                      </AppText>

                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Image style={{ borderRadius: 50 }} source={item.teacherImg} />
                        <AppText style={{ marginLeft: spacing[3] }}>
                          {item.teacherName}
                        </AppText>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            }}
          />
        </View>
      </ScrollView>
    </>
  )
}

export default MyOrder;

const styles = StyleSheet.create({})