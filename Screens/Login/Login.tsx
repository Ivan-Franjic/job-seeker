import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TextInput,
  Pressable,
} from "react-native";
import Svg, { Image, Ellipse, ClipPath } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  withDelay,
  withSequence,
  withSpring,
  Value,
} from "react-native-reanimated";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch } from "react-redux";
import { setLogin } from "../../State";
import axios from "axios";
import styles from "./Styles";
import DatePicker from "react-native-date-picker";

const { height, width } = Dimensions.get("window");

export default function Login({ navigation }: any) {
  const dispatch = useDispatch();
  const imagePosition = useSharedValue(1);
  const formButtonScale = useSharedValue(1);
  const [isRegistering, setIsRegistering] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState(new Date());
  let test: number;
  if (isRegistering) {
    test = 1.5;
  } else {
    test = 2;
  }

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(
      imagePosition.value,
      [0, 1],
      [-height / test, 0]
    );
    return {
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  const buttonsAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0]);
    return {
      opacity: withTiming(imagePosition.value, { duration: 500 }),
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  const closeButtonContainerStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360]);
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, { duration: 800 }),
      transform: [
        { rotate: withTiming(interpolation + "deg", { duration: 1000 }) },
      ],
    };
  });

  const formAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity:
        imagePosition.value === 0
          ? withDelay(400, withTiming(1, { duration: 800 }))
          : withTiming(0, { duration: 300 }),
    };
  });

  const formButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: formButtonScale.value }],
    };
  });

  const loginHandler = () => {
    imagePosition.value = 0;
    if (isRegistering) {
      setIsRegistering(false);
    }
  };

  const registerHandler = () => {
    imagePosition.value = 0;
    if (!isRegistering) {
      setIsRegistering(true);
    }
  };

  const validation = () => {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (isRegistering) {
      if (name === "" || email === "" || password === "") {
        return alert("All fields are required!");
      }
      if (password.length < 7) {
        return alert("Password is too short!");
      }
      if (email.match(mailformat)) {
        return true;
      } else {
        return alert("Invalid email address!");
      }
    } else {
      if (email === "" || password === "") {
        return alert("All fields are required!");
      }
      if (email.match(mailformat)) {
        return true;
      } else {
        return alert("Invalid email address!");
      }
    }
    return true;
  };

  const handleSubmit = async () => {
    formButtonScale.value = withSequence(withSpring(1.5), withSpring(1));
    if (isRegistering) {
      if (validation()) {
        try {
          await axios.post("http://192.168.1.6:5000/auth/register", {
            name,
            email,
            password,
          });
          loginHandler();
        } catch (error: any) {
          alert(error.response.data);
        }
      }
    } else {
      if (validation()) {
        try {
          const loggedInResponse = await axios.post(
            "http://192.168.1.6:5000/auth/login",
            { email, password }
          );
          dispatch(setLogin({ user: loggedInResponse.data }));
          navigation.navigate("Home");
        } catch (error: any) {
          alert(error.response.data);
        }
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
        <Svg height={height + 100} width={width}>
          <ClipPath id="loginClipPath">
            <Ellipse cx={width / 2} rx={height} ry={height + 100} />
          </ClipPath>
          <Image
            href={require("../../assets/login-background.jpg")}
            width={width + 100}
            height={height + 100}
            preserveAspectRatio="MidYWid slice"
            clipPath="url(#loginClipPath)"
          ></Image>
        </Svg>
        <Animated.View
          style={[styles.closeButtonContainer, closeButtonContainerStyle]}
        >
          <Text onPress={() => (imagePosition.value = 1)}>X</Text>
        </Animated.View>
      </Animated.View>
      <View style={styles.bottomContainer}>
        <Animated.View style={buttonsAnimatedStyle}>
          <Pressable style={styles.button} onPress={loginHandler}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </Pressable>
        </Animated.View>
        <Animated.View style={buttonsAnimatedStyle}>
          <Pressable style={styles.button} onPress={registerHandler}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </Pressable>
        </Animated.View>
        <Animated.View style={[styles.formInputContainer, formAnimatedStyle]}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="black"
            style={styles.textInput}
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
            autoComplete="email"
            keyboardType="email-address"
          />
          {isRegistering && (
            <>
              <TextInput
                placeholder="Full name"
                placeholderTextColor="black"
                style={styles.textInput}
                value={name}
                onChangeText={(text) => setName(text)}
              />
              <DatePicker
                style={styles.textInput}
                date={date}
                onDateChange={setDate}
              />
            </>
          )}
          <TextInput
            placeholder="Password"
            placeholderTextColor="black"
            style={styles.textInput}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            autoCapitalize="none"
            autoComplete="password"
          />
          <Pressable onPress={handleSubmit}>
            <Animated.View style={[styles.formButton, formButtonAnimatedStyle]}>
              <Text style={styles.buttonText}>
                {isRegistering ? "REGISTER" : "LOG IN"}
              </Text>
            </Animated.View>
          </Pressable>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}
