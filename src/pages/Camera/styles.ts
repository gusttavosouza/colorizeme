import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#09090A',
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  contentButton: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  buttonCamera: {
    position: 'absolute',
    bottom: 0,
    right: 130,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 20,
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  buttonBack: {
    position: 'absolute',
    top: 0,
    left: -20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    margin: 20,
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  buttonUsePhoto: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#08234E',
    margin: 20,
    width: '90%',
    height: 56,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    
  },
  contentModal: {
    width: '100%',
    height: '100%'
  },
  imgPhoto: {
    width: '100%',
    height: '100%',
  },
  closeButton: {
    position: 'absolute',
    top: 80,
    left: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  buttonUsePhotoText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginStart: 20,
    marginEnd: 30
  },
});