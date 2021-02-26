import firebase  from 'firebase';
import {IAuth, ISignData} from "../types/services/authServicesTypes";


export class AuthService {

    public async loginWithGoogle(auth: IAuth) {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            const user = await auth.signInWithPopup(provider);
        } catch (e) {
            const errorMaessage = e.message;
            alert(errorMaessage)
        }
    }

    public signInWithEmailPassword (data: ISignData) {
        console.log(data)
        const {email, password} = data;
        
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage + `\nCode: ${errorCode}`)

          });
      }

    public signUpWithEmail(data: ISignData) {
        const {email, password} = data;
        
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
            
            const user = userCredential.user;
          })
          .catch((error) => {

            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)

          });
    }


}