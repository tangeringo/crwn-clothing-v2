import { takeLatest, call, all, put } from 'typed-redux-saga/macro';
import { User } from 'firebase/auth';

import { UserTypes } from './user.types';

import { 
  signInFailure, 
  signInSuccess, 
  signOutFailure, 
  signOutSuccess, 
  signUpFailure, 
  signUpSuccess, 
  EmailSignInStart,
  SignUpStart,
  SignUpSuccess,
} from './user.actions';

import { 
    getCurrentUser, 
    createUserDocFromAuth, 
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
    createAuthUserWithEmailAndPassword,
    signOutUser,
    AdditionalInfo,
} from '../../utils/firebase/firebase.utils';



export function* getSnapshotFromUserAuth(userAuth: User, additionalDetails?: AdditionalInfo) {
  try {
    const userSnapshot = yield* call(
      createUserDocFromAuth,
      userAuth,
      additionalDetails
    );

    if (userSnapshot) {
      yield* put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    }
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}
  
export function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglePopup);
    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}
  
export function* signInWithEmail({ payload: { email, password } }: EmailSignInStart) {
  try {
    const userCredential = yield* call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );

    if (userCredential) {
      const { user } = userCredential;
      yield* call(getSnapshotFromUserAuth, user);
    }

  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}
  
export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

export function* signUp({ payload: { email, password, displayName } }: SignUpStart) {
  try {
    const userCredential = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );

    if (userCredential) {
      const { user } = userCredential;
      yield* put(signUpSuccess(user, { displayName }));
    }

  } catch (error) {
    yield* put(signUpFailure(error as Error));
  }
}
  
  export function* signOut() {
    try {
      yield* call(signOutUser);
      yield* put(signOutSuccess());
    } catch (error) {
      yield* put(signOutFailure(error as Error));
    }
  }
  
export function* signInAfterSignUp({ payload: { user, additionalDetails } }: SignUpSuccess) {
  yield* call(getSnapshotFromUserAuth, user, additionalDetails);
}

export function* onGoogleSignInStart() {
  yield* takeLatest(UserTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield* takeLatest(UserTypes.CHECK_USER_SESSION, isUserAuthenticated);
}
  
export function* onEmailSignInStart() {
  yield* takeLatest(UserTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
  yield* takeLatest(UserTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield* takeLatest(UserTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
  yield* takeLatest(UserTypes.SIGN_OUT_START, signOut);
}

export function* usersSaga() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}