const firebase = require('firebase');

var firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  };

firebase.initializeApp(firebaseConfig);

module.exports.post = (name) => {
    return firebase.database().ref('users').push({ name }).then(function() {
        console.log('Synchronization succeeded');
    }).catch(function(error) {
        console.log('Synchronization failed');
    });
}

module.exports.get = () => {
    const data = []
    return firebase.database().ref('users').once('value').then((snapshot) => {
    
        snapshot.forEach((childSnapshot) => {
            data.push({
                id: childSnapshot.key,
                ...childSnapshot.val() 
            })
        });

        return data
    })
}

return module.exports