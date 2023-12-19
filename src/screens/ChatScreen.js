import React, { useState, useCallback } from 'react';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use another icon set based on your preference

import { View, TouchableOpacity, StyleSheet, Text, TextInput } from 'react-native';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSend = useCallback(
    (newMessages = []) => {
      setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));

      // Simulate a response from the chatbot after a short delay
      setTimeout(() => {
        setMessages((prevMessages) =>
          GiftedChat.append(prevMessages, [
            {
              _id: Math.round(Math.random() * 1000000).toString(),
              text: 'This is a sample response from the chatbot!',
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'ChatBot',
              },
            },
          ])
        );
      }, 1000);

      setInputText('');
    },
    [messages]
  );

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#e0e0e0',
          },
          right: {
            backgroundColor: 'lightgreen',
          },
        }}
        textStyle={{
          left: {
            color: '#000',
          },
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => handleSend(newMessages)}
        user={{ _id: 1 }}
        placeholder="Type your message..."
        renderBubble={renderBubble}
        style ={{backgroundColor:'red'}}
        alwaysShowSend

        renderSend={({ text }) => (
          <TouchableOpacity onPress={() => handleSend([{ text, _id: 1, createdAt: new Date(), user: { _id: 1 } }])} style={styles.sendButton}>
             
      <Icon name="arrow-right" size={20} color="#000" />
          </TouchableOpacity>
        )}
      />
      {/* <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={() => handleSend([{ text: inputText, _id: 1, createdAt: new Date(), user: { _id: 1 } }])}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    backgroundColor: '#f8f8f8',
  },
  sendButton: {
   backgroundColor: '#f8f8f8',
   marginRight: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ChatScreen;
