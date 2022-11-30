import * as ImagePicker from "expo-image-picker";
import React, { useState, useEffect } from "react";
import { Button, Image, View, Text } from "react-native";

import {callGoogleVisionAsync} from './helperFunctions'

function onSubmit(image) {
  callGoogleVisionAsync(image);
}

export default function ImagePickerComponent() {

  const [image, setImage] = useState(null);
  const [text, setText] = useState("Please add an image");
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      setText("Loading..");
      const responseData = await callGoogleVisionAsync(result.base64);
      setText(responseData.text);
    }
  };
  return (
    <View>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 400, height: 300, resizeMode: "contain" }}
        />
      )}
      <Text>{text}</Text>
    </View>
  );
}
