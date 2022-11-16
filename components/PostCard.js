import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { EvilIcons } from "@expo/vector-icons";

import {
  Container,
  Card,
  UserImg,
  UserInfo,
  UserName,
  UserInfoText,
  PostTime,
  PostText,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Divider,
} from "../styles/FeedStyles";

export default function PostCard({ item }) {
  let likeIcon = item.liked ? "heart-outline" : "heart";
  let iconColor = item.liked ? "#333" : "#2e64e5";

  return (
    <Card key={item.id}>
      <UserInfo>
        <UserInfoText>
          <UserName>{item.userName}</UserName>
          <PostTime>{item.postTime}</PostTime>
        </UserInfoText>
      </UserInfo>
      <PostText>{item.post}</PostText>
      {item.postImg !== "none" && <PostImg source={item.postImg} />}
      {item.postImg == "none" && <Divider />}

      <InteractionWrapper>
        <Interaction active={!item.liked}>
          <InteractionText active={!item.liked}>
            {item.likes}
            {item.likes !== 0 ? " likes" : ""}
          </InteractionText>
          <Ionicons name={likeIcon} size={32} color={iconColor} />
        </Interaction>
        <Interaction>
          <InteractionText>
            {item.comments}
            {item.comments !== 0 ? " comments" : ""}
          </InteractionText>

          <EvilIcons name="comment" size={34} />
        </Interaction>
      </InteractionWrapper>
    </Card>
  );
}
