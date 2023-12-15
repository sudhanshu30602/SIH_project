// VideoListScreen.js
import React,{useEffect, useState} from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity,Text, Image } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const VideoScreen = () => {

  const [vdata, setVData] = useState("");
  const videoData = [
    {
      id: '1',
      name: 'Introduction to React Native',
      channel: 'React Native Tutorials',
    },
    {
      id: '2',
      name: 'Building Beautiful UIs with React Native Paper',
      channel: 'DesignMasterClass',
    },
    {
        id: '3',
        name: 'Building Beautiful UIs with React Native Paper',
        channel: 'DesignMasterClass',
      },
      {
        id: '4',
        name: 'Building Beautiful UIs with React Native Paper',
        channel: 'DesignMasterClass',
      },
    // Add more video data as needed
  ];
          useEffect(() => {
            //Runs only on the first render
            fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=150&q=ayurvedic%20treatment&type=video&type=audio&key=AIzaSyA6Tor0745AOuToOO_3Q65bggCsFJD2i64`)
            .then(res=>res.json())
            .then(value =>{
              console.log(value.items)
              setVData(value.items)
            })
          }, []);
         

  const renderVideoCard = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image style={{height:'70%', borderRadius:20}} source={{uri: item.snippet.thumbnails.high.url}}/>
      {/* You can use an actual video thumbnail image here */}
      <View style={{ marginTop:15, marginLeft:15, marginRight:15}}><Text style={{fontSize:20}}>{item.snippet.title}</Text></View>
     <View style={{ margin:10}}>
      <Text style={{fontSize:18, fontWeight:'bold'}}>{item.snippet.channelTitle}</Text>
     </View>
      {/* <Card.Cover source={{  uri: item.snippet.thumbnails.high.url }} />
      <Card.Content>
        <Title>{item.snippet.title}</Title>
        <Paragraph>{item.snippet.channelTitle}</Paragraph>
      </Card.Content> */}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={vdata}
        renderItem={renderVideoCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  // flatListContainer: {
  //   paddingBottom: 16,
  // },
  card: {
     //backgroundColor:'red',
     borderRadius:20,
     height: 270,
    // opacity: 0.5,
     marginBottom:20,

  },
});

export default VideoScreen;
