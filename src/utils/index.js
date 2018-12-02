import firebase from 'firebase';
import config from '../config';

// firebase.initializeApp(config);

// export default firebase


export default (!firebase.apps.length
    ? firebase.initializeApp(config)
    : firebase.app());