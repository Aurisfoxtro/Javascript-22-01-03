import firebase from "../firebase";

export const getUserData = (user, setUser)=>{  //gauti info apie user'i
    try{
        firebase
            .firestore()
            .collection('users')
            .where('uid', '==', user?.uid) //iesko pagal vartotojo id
            .get() //gaunam duomenis apie vartotoja
            .then((userData)=>setUser(userData.docs[0].data())) //setinam i state
    }catch(err){
        console.log(err);
    }
}