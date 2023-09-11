import { initializeApp } from 'firebase/app'


const firebaseConfig = {

    storageBucket: 'gs://test-5d7f3.appspot.com'

}


const app = initializeApp(firebaseConfig)


export default firebaseConfig