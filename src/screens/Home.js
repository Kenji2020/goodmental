import React, {useEffect, useState} from "react";
import {View,StyleSheet,FlatList, TouchableOpacity,Image, Text, KeyboardAvoidingView} from "react-native";
import { ScrollView } from 'react-native-virtualized-view';
import { Entypo } from "@expo/vector-icons";
import { Input, Button,Card } from "react-native-elements";
import AppText from "../components/AppText";
import categoryData from "../data/catogoryData";
import coursesData from "../data/coursesData";
import { colors } from "../theme";
import { spacing } from "./../theme/spacing";
import adjust from "../theme/adjust";
import SingleCourse from "../components/SingleCourse";
import HomeSlider from "../components/HomeSlider";
import {db} from '../../firebase2'
export default function Home({ navigation }) {
  const [datos, setDatos] = useState([])
  useEffect(()=>{
    db.collection('Inventario').onSnapshot(querySnapshot=>{
        const lista = []
        querySnapshot.docs.forEach(doc=>{
            const {name, description, tags, nickname} = doc.data()
            lista.push({
                id:doc.id,name,description,tags, nickname
            })

        })
        setDatos([...lista])
    })

},[])
  const renderItem = ({item})=>{
    return(
        <View style={{backgroundColor: '#e1e1e1'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{backgroundColor: '#e1e1e1', marginTop:0, marginBottom:0}}>
                            <Card containerStyle={{marginLeft:0, marginRight:0, marginTop:0, marginBottom:0, height:400, backgroundColor:'#f6f6f6'}}>
                                <Card.Title onPress={()=>{navigation.navigate('PostScreen',{userId: item.id})}}>{item.name}</Card.Title>
                                <Card.Divider />
                                <View
                                    style={{
                                        position: "relative",
                                        alignItems: "center"
                                    }}
                                >
                                    <Image

                                        style={{ width: "100%", height: 300 }}
                                        resizeMode="contain"
                                        onPress={()=>{navigation.navigate('PostScreen',{userId: item.id})}}
                                    />
                                    <Text style={{marginTop:10}}>{item.nickname}</Text>
                                </View>
                            </Card>

                        </View>

            </ScrollView>

        </View>
    )
}
return (
    <KeyboardAvoidingView behavior="padding" style={{marginTop:35}}>

       <FlatList data={datos} renderItem={renderItem} keyExtractor={x=>x.id} showsVerticalScrollIndicator={false}
                 style={{marginTop:0, marginBottom:40}}
       />
        <View style={{marginTop:-40, flexDirection: 'row', justifyContent: 'space-evenly', flex:40}} >
            <Button  buttonStyle={{backgroundColor: '#00a680'}} title='Cuenta tu historia' onPress={()=>{navigation.navigate('CrearBlogScreen')}} />
            <Button title="Ćrea psicologĆ­a" onPress={()=>{navigation.navigate('AreaPsicologia')}} buttonStyle={{backgroundColor: '#00a680',}}/>
        </View>
    </KeyboardAvoidingView>
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
