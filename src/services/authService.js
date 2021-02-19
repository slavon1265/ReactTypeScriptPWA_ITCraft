import firebase  from 'firebase';


export class AuthService {

    async loginWithGoogle(auth) {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            const user = await auth.signInWithPopup(provider);
        } catch (e) {
            const errorMaessage = e.message;
            alert(e.message)
        }
    }

    signInWithEmailPassword (data) {
        const {email, password} = data;
        
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)

          });
      }

    signUpWithEmail(data) {
        const {email, password} = data;
        
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
            
            const user = userCredential.user;
          })
          .catch((error) => {

            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)

          });
    }


}