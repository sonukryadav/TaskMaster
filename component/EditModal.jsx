import { Text, View, SafeAreaView, Modal } from 'react-native';

const EditModal = ({ modalState, closeModal, children }) => {
  return (
    <>
      <SafeAreaView>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={modalState}
          onRequestClose={closeModal}
        >
          <View
            style={{
              flex: 1,
              borderWidth: 2,
              borderColor: "black",
              backgroundColor: "rgba(0,0,0,0.9)",
              paddingHorizontal: 30,
              justifyContent: "center",
            }}
          >
            <Text
              style={{ textAlign: "center", fontSize: 30, fontWeight: "800" }}
            >
              Edit your task
            </Text>
            {children}
          </View>
        </Modal>
      </SafeAreaView>
    </>
  );
};

export default EditModal;