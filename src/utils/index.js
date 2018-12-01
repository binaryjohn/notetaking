import firebase from 'firebase/app';
import config from '../config';

const firebaseRef = firebase.initializeApp(config);

const getRefInfo = () => firebaseRef.name

export {
    getRefInfo
}