const firebase = require('firebase');

var firebaseConfig = {
    apiKey: "AIzaSyAhZFue5vUk-0zx3Zwu_-qTb8TOF2kAzqo",
    authDomain: "aprendendo-bd-nsql-nr.firebaseapp.com",
    databaseURL: "https://aprendendo-bd-nsql-nr-default-rtdb.firebaseio.com",
    projectId: "aprendendo-bd-nsql-nr",
    storageBucket: "aprendendo-bd-nsql-nr.appspot.com",
    messagingSenderId: "101585670714",
    appId: "1:101585670714:web:cfd32c6837cae6cb05db03",
    measurementId: "G-SXKWW74RV2"
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