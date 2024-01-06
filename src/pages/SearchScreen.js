import React, {useState} from 'react';
import {View, Text, Modal, Button, StyleSheet} from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const handleRequestClose = () => {
    // You can add your custom logic here when the modal is closed via the back button
    hideModal();
    console.log('hie');
  };

  return (
    <View style={styles.container}>
      <Button title="Show Modal" onPress={showModal} />

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={handleRequestClose}>
        <View style={styles.modalContainer}>
          <Text>This is your modal content.</Text>
          <Button title="Hide Modal" onPress={hideModal} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
