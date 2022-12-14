import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { Container } from "../../styles/FeedStyles";
import { FlatList } from "react-native-gesture-handler";
import PostCard from "../../components/PostCard";

const Posts = [
  {
    id: "1",
    userName: "Jenny Doe",
    userImg: require("../../assets/users/user-3.jpg"),
    postTime: "4 mins ago",
    post: "Hey there, this is my test for a post of my social app in React Native.",
    postImg: require("../../assets/posts/post-img-3.jpg"),
    liked: true,
    likes: "14",
    comments: "5",
  },
  {
    id: "2",
    userName: "John Doe",
    userImg: require("../../assets/users/user-1.jpg"),
    postTime: "2 hours ago",
    post: "Hey there, this is my test for a post of my social app in React Native.",
    postImg: "none",
    liked: false,
    likes: "8",
    comments: "0",
  },
  {
    id: "3",
    userName: "Ken William",
    userImg: require("../../assets/users/user-4.jpg"),
    postTime: "1 hours ago",
    post: "Hey there, this is my test for a post of my social app in React Native.",
    postImg: require("../../assets/posts/post-img-2.jpg"),
    liked: true,
    likes: "1",
    comments: "0",
  },
  {
    id: "4",
    userName: "Selina Paul",
    userImg: require("../../assets/users/user-6.jpg"),
    postTime: "1 day ago",
    post: "Hey there, this is my test for a post of my social app in React Native.",
    postImg: require("../../assets/posts/post-img-4.jpg"),
    liked: true,
    likes: "22",
    comments: "4",
  },
  {
    id: "5",
    userName: "Christy Alex",
    userImg: require("../../assets/users/user-7.jpg"),
    postTime: "2 days ago",
    post: "Hey there, this is my test for a post of my social app in React Native.",
    postImg: "none",
    liked: false,
    likes: "0",
    comments: "0",
  },
];

export default function HomeScreen() {
  return (
    <Container>
      <View title="press" styles={styles.addPostButtton} />
      <FlatList
        data={Posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
