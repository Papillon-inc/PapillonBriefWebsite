import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyBKgT0WjXv5QCHt2LEim1aKj08PYi41JhY",
      authDomain: "papillonbriefwebsite.firebaseapp.com",
      databaseURL: "https://papillonbriefwebsite.firebaseio.com",
      projectId: "papillonbriefwebsite",
      storageBucket: "papillonbriefwebsite.appspot.com",
      messagingSenderId: "624934866054",
      appId: "1:624934866054:web:ba7c0d9ef183047d45d507",
      measurementId: "G-60TB54VDDS"
    }
  )
}

export default firebase