import axios from 'axios';
import jwt_decode from "jwt-decode";

import setAuthToken from "../../utils/setAuthToken";


export const signIn =  (credentials) => {
  return (dispatch, getState) => {
        const user = axios.post('/api/auth/login', credentials).then( res => {
          
          const { token } = res.data;
          
          localStorage.setItem('token', token);
          
          setAuthToken(token);

          const decoded = jwt_decode(token);

          dispatch(setCurrentUser(decoded));

        }).catch(err => {

          dispatch({type:'LOGIN_ERROR', err})
          
        })  
  }
}
export const signOut =() => {
 return (dispatch,getState) => {

     localStorage.removeItem('token');

     setAuthToken(false);

     dispatch({type:'SIGNOUT_SUCCESS'})

 }
}

// export const signUp = (newUser) => {
//   return (dispatch, getState, {getFirebase, getFirestore}) => {
//       const firebase = getFirebase();
//       const firestore = getFirestore();

//       firebase.auth().createUserWithEmailAndPassword(
//          newUser.email,
//          newUser.password
//       ).then((res) => {
//           return firestore.collection('users').doc(res.user.uid).set({
//             firstName: newUser.firstName,
//             lastName: newUser.lastName,
//             initials: newUser.firstName[0] + newUser.lastName[0]
//           })
//       }).then(()=>{
//         dispatch({type:'SIGNUP_SUCCESS'})
//       }).catch((err)=>{
//         dispatch({type: 'SIGNUP_ERROR',err})
//       });
//   }
// }

  // Set logged current user
  export const setCurrentUser = (decoded) => {
    return {
      type: "LOGIN_SUCCESS",
      decoded
    };
  };
  