import React, { useState, useCallback, useRef } from "react";
import { ActivityIndicator, View, Alert, ScrollView } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { AntDesign } from '@expo/vector-icons'; 

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Header from "../components/Header";
import Screen from "../components/Screen";
import { colors } from "../theme";

export default function CourseVideo({ navigation }) {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <>
      <Header
        style={{ backgroundColor: colors.light }}
        title="Course Video"
        onPress={() => navigation.goBack()}
      />

      <Screen style={{ paddingHorizontal: 20, flexGrow: 1, backgroundColor: colors.light }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <YoutubePlayer
            height={230}
            play={playing}
            videoId={"iee2TATGMyI"}
            onChangeState={onStateChange}
            onStart={() => console.log("onStart")}
            onEnd={() => alert("on End")}
          />
          <AppButton title={playing ? "pause":"play"} onPress={togglePlaying}/>

          <View>
            <AppText style={{color:colors.black,marginVertical: 20}} preset="h4" >About Lesson</AppText>
            <AppText>Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how’s your father David</AppText>
          </View>

          <AppButton style={{flexDirection:'row',width:150,marginTop:30}} icon={<AntDesign name="clouddownloado" size={24} color={colors.white} />} title="Exercise Files" />
        </ScrollView>
      </Screen>
    </>
  );
}