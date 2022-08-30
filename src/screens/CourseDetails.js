import { StyleSheet, View, Image, Pressable, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import React, { useRef, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import { Video } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';
import Accordion from "react-native-collapsible/Accordion";

import { colors } from '../theme';
import Header from '../components/Header';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import Education from '../svg/Education';
import VideoLecture from '../svg/VideoLecture';
import Repeat from '../svg/Repeat';
import User from '../svg/User';
import Rating from '../svg/Rating';
import AppButton from '../components/AppButton';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/features/cartSlice';
import courseModule from '../data/courseModule';
import { useNavigation } from '@react-navigation/native';

const CourseDetails = ({ navigation, route }) => {
  const { image, title, teacherImg, teacherName, teacherDesignation, lectures, duration, enrolled, review, rating, desc, update } = route.params.item;
  const [isReadMore, setIsReadMore] = useState(false);
  const [status, setStatus] = React.useState({});
  const [success, setIsSuccess] = useState(false);
  const [selected, setSelected] = useState("CourseInfo");
  const dispatch = useDispatch();
  const animation = useRef(null);
  const video = React.useRef(null);
  const message = useSelector(state => state.cart.message);
  const [activeSections, setActiveSections] = useState([]);

  const setSections = (sections) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const handleCourseVideo = () => {
    navigation.navigate("CourseVideo")
  }

  const handleAddCart = () => {
    dispatch(addToCart(route.params.item))
    setIsSuccess(true)
    const timer = setTimeout(() => {
      setIsSuccess(false)
    }, 2000);
    return () => {
      clearTimeout(timer);
    }
  }

  const handleSelected = text => {
    setSelected(text)
  }

  function renderLecturesHeader(section, _, isActive) {
    return (
      <View
        duration={500}
        style={{
          paddingVertical: 10,
          marginHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>
          {section.title}
        </Text>
        {isActive ? <AntDesign name="down" size={16} color="black" /> : <AntDesign name="up" size={16} color="black" />}
      </View>
    );
  }


  function renderLecturesContent(section, _, isActive) {
    return (
      <View
        style={{
          marginHorizontal: 20,
          paddingTop: 15,
          paddingBottom: 20,
          borderTopWidth: 1,
          borderTopColor: "#E8E8E8",
        }}
        transition="backgroundColor"
      >
        <TouchableOpacity onPress={section.open && handleCourseVideo} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AntDesign style={{ alignSelf: 'center' }} name="youtube" size={16} color="black" />
            <Text style={{ marginLeft: 10 }}>{section.item1}</Text>
          </View>

          <Text>{section.time1} {section.open ? <AntDesign name="eyeo" size={16} color="black" /> : <AntDesign name="lock" size={16} color="black" />}</Text>

        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AntDesign style={{ alignSelf: 'center' }} name="youtube" size={16} color="black" />
            <Text style={{ marginLeft: 10 }}>{section.item2}</Text>
          </View>

          <Text>{section.time2} <AntDesign name="lock" size={16} color="black" /></Text>

        </TouchableOpacity>
      </View>
    );
  }

  return (
    <>
      <Header
        style={{ backgroundColor: colors.light }}
        title="Course Details"
        onPress={() => navigation.goBack()}
      />
      <ScrollView
        style={{ flexGrow: 1, backgroundColor: colors.light }}
        contentContainerStyle={{ paddingVertical: 30, paddingHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <View >
            <Video
              ref={video}
              style={{ flex: 1, width: "100%", height: 220, marginBottom: 20 }}
              source={{
                uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
              }}
              posterSource={image}
              posterStyle={{ width: "100%", height: '100%', resizeMode: 'stretch', aspectRatio: 1 }}
              usePoster={true}
              useNativeControls={true}
              resizeMode="stretch"
            // onPlaybackStatusUpdate={statuss => setStatus(() => statuss)}
            />
            <AppButton style={{ padding: 10 }}
              title={status.isPlaying ? 'Pause' : 'Play'}
              onPress={() =>
                status.isPlaying ? video.current.pauseAsync()
                  : video.current.playAsync()
              }
            />
          </View>
          <View>

            <AppText style={styles.title} preset='h3'>{title}</AppText>
            <View style={styles.updateContainer}>
              <AppText style={styles.updateText}>Last Update:</AppText>
              <AppText style={styles.updateDate}> {update}</AppText>
            </View>
            {/* tab button start */}
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <AppButton onPress={() => handleSelected("CourseInfo")} style={[styles.infoBtn, selected === "CourseInfo" && { backgroundColor: colors.primary }]} textColor2={selected === "CourseInfo" ? { color: colors.white } : { color: colors.black }} title="Course Info" />

              <AppButton onPress={() => handleSelected("Lectures")} style={[styles.lecturesBtn, selected === "Lectures" && { backgroundColor: colors.primary, color: colors.black }]} textColor2={selected === "Lectures" ? { color: colors.white } : { color: colors.black }} title="Lectures" />
            </View>
            {/* tab button end */}

            {/* Curse info start */}
            {selected === "CourseInfo" &&
              <View>
                <View style={styles.desc}>
                  <Pressable onPress={() => setIsReadMore(!isReadMore)}>
                    <AppText>{isReadMore ? desc : desc.slice(0, 120)}
                      <AppText style={styles.readMore}>{isReadMore ? 'Show Less' : ' Read More...'}</AppText>
                    </AppText>
                  </Pressable>
                </View>

                <View style={styles.teacherDescContainer}>
                  <View style={styles.teacherContent}>
                    <Image style={{ borderRadius: 50 }} source={teacherImg} />
                    <View style={styles.teacherDetails}>
                      <AppText style={{ color: colors.black }} preset='h4'>{teacherName}</AppText>
                      <AppText>{teacherDesignation}</AppText>
                    </View>
                  </View>

                  <TouchableOpacity onPress={() => navigation.navigate("Review")} style={styles.teacherRating}>
                    <FontAwesome name="star" size={20} color={colors.golden} />
                    <AppText style={{ marginLeft: 7 }}>{rating}</AppText>
                  </TouchableOpacity>
                </View>

                <ListItem icon={<Education />} color="#DFE3F9" title="Subject" subtitle={teacherDesignation} />

                <ListItem icon={<VideoLecture />} color="#F3E0EC" title="Lectures" subtitle={lectures} />

                <ListItem icon={<Repeat />} color="#E1E2F4" title="Duration" subtitle={duration} />

                <ListItem icon={<User />} color="#E0F3F7" title="Enrolled" subtitle={enrolled} />

                <ListItem icon={<Rating />} color="#F4EFE3" title="Reviews" subtitle={review} />



                <View style={styles.paymentContainer}>
                  <AppText preset='h4' style={styles.paymentTitle}>Payment Method</AppText>

                  <View style={styles.paymentMethods}>
                    <Image style={styles.imgStyle} source={require('../assets/images/payment/visa.png')} />
                    <Image style={styles.imgStyle} source={require('../assets/images/payment/paypal.png')} />
                    <Image style={styles.imgStyle} source={require('../assets/images/payment/discover.png')} />
                    <Image style={styles.imgStyle} source={require('../assets/images/payment/cirrus.png')} />
                  </View>
                </View>

                <AppButton title="Add To Cart" onPress={handleAddCart} />
              </View>
            }
            {/* Curse info end */}

            {/* Lectures start */}
            {
              selected === "Lectures" &&
              <View style={{ marginTop: 30 }}>
                <Accordion
                  activeSections={activeSections}
                  sections={courseModule}
                  touchableComponent={TouchableOpacity}
                  renderHeader={renderLecturesHeader}
                  renderContent={renderLecturesContent}
                  duration={500}
                  onChange={setSections}
                  underlayColor={colors.black}
                  sectionContainerStyle={{
                    backgroundColor: colors.white,
                    borderRadius: 5,
                    marginBottom: 15,
                  }}
                />
              </View>
            }
            {/* Lectures end */}
          </View>
        </View>
      </ScrollView>

      {
        success && message && <LottieView
          autoPlay
          loop={false}
          ref={animation}
          style={{ backgroundColor: colors.white }}
          source={require('../data/cart-success.json')}
          onAnimationFinish={() => navigation.navigate("Cart")}
        />
      }
    </>
  )
}

export default CourseDetails;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    borderRadius: 10,
  },
  infoBtn: {
    width: 130,
    marginRight: 10,
    backgroundColor: "#EDEEF3",
  },
  lecturesBtn: {
    width: 130,
    backgroundColor: "#EDEEF3",
  },
  updateContainer: {
    flexDirection: 'row'
  },
  title: {
    color: colors.black,
    marginVertical: 20,
  },
  updateText: {
    color: colors.gray4,
    fontWeight: '500'
  },
  updateDate: {
    color: colors.black,
    fontWeight: '700'
  },
  desc: {
    marginVertical: 30
  },
  readMore: {
    color: colors.black,
    fontWeight: '700',
    fontSize: 16
  },
  teacherDescContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20
  },
  teacherContent: {
    flexDirection: 'row',
  },
  teacherDetails: {
    marginLeft: 10
  },
  teacherRating: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  paymentContainer: {
    marginVertical: 35,
  },
  paymentTitle: {
    color: colors.black,
    fontSize: 20
  },
  paymentMethods: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15
  },
  imgStyle: {
    marginRight: 15,
  }
})
