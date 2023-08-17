// useActivities.js
import { useState, useEffect } from 'react';
import { collection, addDoc, deleteDoc, doc, getDocs, onSnapshot, updateDoc, setDoc } from 'firebase/firestore';
import { db } from '../../../utils/init-firebase';

const useActivities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'activities'), (snapshot) => {
      const updatedActivities = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setActivities(updatedActivities);
    });

    return () => unsubscribe();
  }, []);

  const createActivity = async (activity) => {
    try {
      const newDocRef = doc(collection(db, 'activities'))
      await setDoc(newDocRef, {
          ...activity, 
          deleted: false, 
          id: newDocRef.id
        });
    } catch (error) {
      console.error('Error creating activity:', error);
    }
  };

  const updateActivity = async (activityId, activity) => {
    try {
      const activityRef = doc(db, 'activities', activityId);
      await updateDoc(activityRef, activity);
    } catch (error) {
      console.error('Error updating activity:', error);
    }
  };

  const deleteActivity = async (activityId) => {
    try {
      const activityRef = doc(db, 'activities', activityId);
      await deleteDoc(activityRef);
    } catch (error) {
      console.error('Error deleting activity:', error);
    }
  };

  const markActivityDeleted = async (activityId) => {
    try {
      const activityRef = doc(db, 'activities', activityId);
      await updateDoc(activityRef, {deleted: true});
    } catch (error) {
      console.error('Error updating activity:', error);
    }
  };

  const restoreActivity = async (activityId) => {
    try {
      const activityRef = doc(db, 'activities', activityId);
      await updateDoc(activityRef, {deleted: false});
    } catch (error) {
      console.error('Error updating activity:', error);
    }
  };

  return {
    activities,
    createActivity,
    updateActivity,
    deleteActivity,
    markActivityDeleted,
    restoreActivity
  };
};

export default useActivities;
