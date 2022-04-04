import firebase from "../firebase";
import {app} from "../firebase";

const auth = app.auth();
const db = app.firestore();

const register = async (name, email, password) =>{
    try{
        const res = await auth.createUserWithEmailAndPassword(email, password); //sukuriamas vartotojas Google Cloud'e
        const user = res.user; //Pasisimam sukurto vartotojo duomenis
        await db.collection('users').add({ // Pridedam mums reikalingus user duomenis i savo firestore DB
            uid:user.uid,
            name,
            authProvider: 'local',
            email
        })

    }catch(err){
        console.log(err)
    }
}

const login = async (email, password)=>{
    try{
        await auth.signInWithEmailAndPassword(email, password);
    }catch(err){
        console.log(err)
    }
}

const logout = ()=>{
    auth.signOut();
}

const resetPassword = async (email)=>{
    try{
        await auth.sendPasswordResetEmail(email)
        alert("Slaptažodžio priminimas išsiųstas")
    }catch(err){
        console.log(err);
    }
}

export default firebase
export {
    auth,
    db,
    register,
    login,
    logout,
    resetPassword
}