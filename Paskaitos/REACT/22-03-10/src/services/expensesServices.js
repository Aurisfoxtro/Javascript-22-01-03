import firebase from "../firebase";

export const addExpense=(data)=>{
    firebase
        .firestore()
        .collection('expenses')
        .add(data)
}