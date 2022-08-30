import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { colors, spacing } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux';
import { Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";
import AppText from './AppText';
import { addToWishList } from '../redux/features/wishlistSlice';
import adjust from '../theme/adjust';

export default function SingleCourse({ item, verticalCourses }) {
  const navigation = useNavigation();
  const [isWishList, setIsWishList] = useState(false);
  const dispatch = useDispatch();
  const handleWishListItem = (item) => {
    dispatch(addToWishList(item));
    setIsWishList(true)
  }


  return (
    <>
      {!verticalCourses && <TouchableOpacity
        onPress={() => navigation.navigate('CourseDetails', { item })}>
        <View
          style={{
            width: 250,
            height: 330,
            margin: 6,
            backgroundColor: colors.white,
            overflow: "hidden",
            borderRadius: 10,
          }}
        >

          <View style={{ position: 'relative' }}>
            <Image style={{ alignSelf: "flex-start", width: "100%" }}
              source={item.image} />
            <TouchableOpacity onPress={() => handleWishListItem(item)}
              style={{ position: 'absolute', top: 10, right: 15 }}>
              {isWishList ? <FontAwesome name='heart' size={18} color={colors.red} /> : <FontAwesome name='heart-o' size={20} color={colors.red} />}
            </TouchableOpacity>
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
      </TouchableOpacity>}


      {/* vertical all course */}

      {verticalCourses && <TouchableOpacity 
      onPress={() => navigation.navigate('CourseDetails', { item })}>
        <View style={styles.courseWrapper}>
          <View style={styles.courseItem}>
            <View>
              <Image
                resizeMode="cover"
                style={styles.courseImg}
                source={item.image}
              />

              <TouchableOpacity onPress={() => handleWishListItem(item)}
                style={{ position: 'absolute', top: 7, right: 10 }}>
                {isWishList ? <FontAwesome name='heart' size={18} color={colors.red} /> : <FontAwesome name='heart-o' size={20} color={colors.red} />}
              </TouchableOpacity>
            </View>

            <View style={styles.courseDetails}>
              <AppText preset="h5"
                style={styles.courseTitle} >
                {item.title}
              </AppText>

              <View style={styles.courseBottomContent}>
                <View style={styles.courseBottomText}>
                  <Entypo name="dot-single" size={adjust(16)}
                    color={colors.gray3} />
                  <AppText style={styles.text}>
                    {item.expert}
                  </AppText>
                </View>
                <View style={styles.courseBottomText}>
                  <Entypo name="dot-single" size={adjust(16)}
                    color={colors.gray3} />
                  <AppText style={styles.text}>
                    {item.student} Student
                  </AppText>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      }

    </>
  )
}

const styles = StyleSheet.create({
  courseWrapper: {
    paddingHorizontal: 20,
    flexWrap:"wrap"
  },
  courseItem: {
    width: "100%",
    padding: 10,
    backgroundColor: colors.white,
    overflow: "hidden",
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 10,
  },
  courseImg: {
    alignSelf: "flex-start",
    width: 100,
    height: 100,
    borderRadius: 10,
    overflow: "hidden",
    position: 'relative'
  },
  courseDetails: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    flexGrow: 1,
    flex:1

  },
  courseTitle: {
    color: colors.black,
    marginTop: spacing[4],
    fontSize: adjust(14),
  },
  courseBottomContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: spacing[3],
  },
  courseBottomText: {
    flexDirection: "row",
    alignItems: 'center',
  },
  text: {
    color: colors.gray3,
    fontWeight: "600",
    fontSize: adjust(12),
  }
})