// This file serves as an abstraction layer for Firebase services.
// In a real production build, you would import and initialize firebase here.

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

export const analytics = {
  logEvent: (eventName: string, params?: Record<string, any>) => {
    console.log(`[Analytics] Event: ${eventName}`, params);
    // In production: import { getAnalytics, logEvent } from "firebase/analytics";
    // logEvent(analyticsInstance, eventName, params);
  }
};

export const crashlytics = {
  logError: (error: Error) => {
    console.error(`[Crashlytics] Error:`, error);
    // In production: Use Firebase Performance or a custom logger since Crashlytics is native-only mostly, 
    // or use Sentry for web.
  }
};