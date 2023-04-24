import { initializeApp } from 'firebase/app';
import { 
    getAuth, signInWithRedirect, 
    signInWithPopup, GoogleAuthProvider, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    NextOrObserver,
    User
} from 'firebase/auth';

import { 
    getFirestore, 
    doc, getDoc, 
    setDoc, collection, 
    writeBatch, query,
    getDocs,
    QueryDocumentSnapshot,
} from 'firebase/firestore';
import { Category } from '../../redux/categories/categories.types';

const firebaseConfig = {
    apiKey: "AIzaSyAKPNlxNH4GseMVJCYWzySirp_4LlPEpUg",
    authDomain: "crwn-cloning-vol-2-db.firebaseapp.com",
    projectId: "crwn-cloning-vol-2-db",
    storageBucket: "crwn-cloning-vol-2-db.appspot.com",
    messagingSenderId: "1060845491275",
    appId: "1:1060845491275:web:f7083793ae8d2205eee9ce",
    measurementId: "G-F289WS2P7X"
  };
  
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account'
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const db = getFirestore();

export type ObjectToAdd = {
    title: string;
}

export const uploadDataToFirestoreDb = async <T extends ObjectToAdd>(
    collectionKey: string, 
    objectsToAdd: T[]
): Promise<void> => {

    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object)
    });

    await batch.commit();
    console.log('DONE');
}


export const getCollectionsDataFromFirestoreDb = async (): Promise<Category[]> => {
    const collectionRef = collection(db, 'categories');

    const q = query(collectionRef);
    const querySnapShot = await getDocs(q);

    return querySnapShot.docs.map(doc => doc.data() as Category);
}

export type AdditionalInfo = {
    displayName?: string;
}

export type UserData = {
    displayName: string;
    email: string;
    createdAt: Date;
}

export const createUserDocFromAuth = async (
    userAuth: User, 
    additionalInfo = {} as AdditionalInfo
): Promise<void | QueryDocumentSnapshot<UserData>> => {

    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapShot = await getDoc(userDocRef)

    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            });
        } catch(error) {
            console.log('Error creating the user', error)
        }

    } return userSnapShot as QueryDocumentSnapshot<UserData>;
}

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;

    return createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;

    return signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () =>  await signOut(auth);

export const onAuthStateChangedListener = (callBack: NextOrObserver<User>) => {
    onAuthStateChanged(auth, callBack);
}

export const getCurrentUser = (): Promise<User | null> => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
            auth, (userAuth) => {
                unsubscribe();
                resolve(userAuth)
            },
            reject
        )
    })
}