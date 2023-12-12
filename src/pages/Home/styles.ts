import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerCamera: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    alignContent: "center",
    textAlign: 'center',
    marginHorizontal: 'auto',
    marginBottom: 20
  },
  containerText: {
    paddingTop: 20,
    paddingBottom: 20,
    width: '90%',
  },
  hello: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '900'
  },
  message: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '900',
    textAlign: "left",
  },
  buttonTake: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#08234E',
    width: "90%",
    paddingHorizontal: 100,
    paddingVertical: 10,
    borderRadius: 10
  },
  buttonTakeText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    marginStart: 20
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  contentButton: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonFlip: {
    position: 'absolute',
    bottom: 70,
    left: 145,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 20,
    width: 72,
    height: 72,
    borderRadius: 50,
  },
  contentModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: 20,
  },
  imgPhoto: {
    width: '100%',
    height: 400,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    left: 2,
    margin: 10,
  },
},
);