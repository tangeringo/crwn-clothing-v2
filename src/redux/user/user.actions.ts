import { createAction, withMatcher, Action, ActionWithPayload } from "../../utils/create-action-utils/reducer-actions";
import { UserTypes } from "./user.types";
import { UserData, AdditionalInfo } from "../../utils/firebase/firebase.utils";
import { User } from 'firebase/auth';

export type CheckUserSession = Action<UserTypes.CHECK_USER_SESSION>;

export const checkUserSession = withMatcher((): CheckUserSession => 
    createAction(UserTypes.CHECK_USER_SESSION));



export type SetCurrentUser = ActionWithPayload<UserTypes.SET_CURRENT_USER, UserData>;

export const setCurrentUser = withMatcher((user: UserData): SetCurrentUser => (
    createAction(UserTypes.SET_CURRENT_USER, user)));



export type GoogleSignInStart = Action<UserTypes.GOOGLE_SIGN_IN_START>;
    
export const googleSignInStart = withMatcher((): GoogleSignInStart => 
    createAction(UserTypes.GOOGLE_SIGN_IN_START));



export type EmailSignInStart = ActionWithPayload<UserTypes.EMAIL_SIGN_IN_START, {email: string, password: string}>

export const emailSignInStart = withMatcher((
    email: string, 
    password: string
): EmailSignInStart => 

    createAction(
        UserTypes.EMAIL_SIGN_IN_START, 
        {email, password}
    ));



export type SignInSuccess = ActionWithPayload<UserTypes.SIGN_IN_SUCCESS, UserData> 

export const signInSuccess = withMatcher((userAuth: UserData & {id: string}): SignInSuccess => 
    createAction(UserTypes.SIGN_IN_SUCCESS, userAuth));



export type SignInFailure = ActionWithPayload<UserTypes.SIGN_IN_FAILED, Error>

export const signInFailure = withMatcher((
    error: Error
): SignInFailure => 
    createAction(UserTypes.SIGN_IN_FAILED, error));



export type SignUpStart = ActionWithPayload <UserTypes.SIGN_UP_START, {email: string, password: string, displayName: string}>

export const signUpStart = withMatcher((
    email: string, 
    password: string, 
    displayName: string
): SignUpStart => 
    createAction(UserTypes.SIGN_UP_START, { email, password, displayName }));



export type SignUpSuccess = ActionWithPayload<UserTypes.SIGN_UP_SUCCESS, {user: User, additionalDetails: AdditionalInfo}>

export const signUpSuccess = withMatcher((
    user: User, 
    additionalDetails: AdditionalInfo
): SignUpSuccess => 
    createAction(UserTypes.SIGN_UP_SUCCESS, { user, additionalDetails }));



export type SignUpFailure = ActionWithPayload<UserTypes.SIGN_UP_FAILED, Error>

export const signUpFailure = withMatcher((error: Error): SignUpFailure => 
    createAction(UserTypes.SIGN_UP_FAILED, error));



export type SignOutStart = Action<UserTypes.SIGN_OUT_START>

export const signOutStart = withMatcher((): SignOutStart => createAction(UserTypes.SIGN_OUT_START));



export type SignOutSuccess = Action<UserTypes.SIGN_OUT_SUCCESS>

export const signOutSuccess = withMatcher((): SignOutSuccess => createAction(UserTypes.SIGN_OUT_SUCCESS));



export type SignOutFailure = ActionWithPayload<UserTypes.SIGN_OUT_FAILED, Error>

export const signOutFailure = withMatcher((error: Error): SignOutFailure => createAction(UserTypes.SIGN_OUT_FAILED, error));