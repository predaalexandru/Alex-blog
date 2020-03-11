const functions = require('firebase-functions');
const admin = require('firebase-admin');
//we initialize the app
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
 });

const createNotification = ((notification) => {
return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('Notification added', doc));
})


//function for created articles
 exports.articleCreated = functions.firestore
    .document('articles/{articleId}')
    //whenever a new project is created inside collection then we want to fire the function
    .onCreate(doc => {
        
        //we create a new const to get the data from doc
        const article = doc.data();
        const notification = {
          content: 'Added a new article',
          user: `${article.authorFirstName} ${article.authorLastName}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        }
    
        return createNotification(notification);  
 });


 exports.userJoined = functions.auth.user()
  .onCreate(user => {
    
    return admin.firestore().collection('users')
      .doc(user.uid).get().then(doc => {

        //we create a new const to get the data from doc
        const newUser = doc.data();
        const notification = {
          content: 'Joined the blog!',
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        };

        return createNotification(notification);
      });
});
