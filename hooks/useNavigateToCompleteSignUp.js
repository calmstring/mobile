import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { useGetMyUserQuery } from "@services/userApi";
import React, { useEffect } from "react";

const useNavigateToCompleteSignUp = () => {
  const navigation = useNavigation();
  const { data, isLoading } = useGetMyUserQuery();

  const isAccountNotSetup = data && !data?.is_setup;

  useEffect(() => {
    if (isAccountNotSetup) {
      Alert.alert(
        "Witaj w Calmstring!",
        "By kontynuować, musisz dokończyć konfigurację swojego konta.",
        [
          {
            text: "Ok",
            onPress: () => {
              navigation.reset({
                index: 0,
                routes: [{ name: "CompleteSignUp" }],
              });
            },
          },
        ],
        {
          cancelable: false,
        }
      );
    }
  }, [isAccountNotSetup]);
};

export default useNavigateToCompleteSignUp;
