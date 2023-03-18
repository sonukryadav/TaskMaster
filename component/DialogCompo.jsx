import React from 'react'
import { Text } from "react-native";
import Dialog from "react-native-dialog";

const DialogCompo = ({ status3, title3, noLabel, noFun, ysLabel, ysFun }) => {
  return (
    <>
      <Dialog.Container visible={status3}>
        <Dialog.Title>
          <Text style={{ color: "black" }}>{title3}</Text>
        </Dialog.Title>
        <Dialog.Button label={noLabel} onPress={noFun} />
        <Dialog.Button label={ysLabel} onPress={ysFun} />
      </Dialog.Container>
    </>
  );
};

export default DialogCompo
