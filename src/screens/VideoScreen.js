// VideoListScreen.js
import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const VideoScreen = () => {
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

  const renderVideoCard = ({ item }) => (
    <Card style={styles.card}>
      {/* You can use an actual video thumbnail image here */}
      <Card.Cover source={{ uri: 'https://via.placeholder.com/300' }} />
      <Card.Content>
        <Title>{item.name}</Title>
        <Paragraph>{item.channel}</Paragraph>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={videoData}
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
    padding: 16,
  },
  flatListContainer: {
    paddingBottom: 16,
  },
  card: {
    marginBottom: 16,
  },
});

export default VideoScreen;
