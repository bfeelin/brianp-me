import { useState, useEffect } from 'react';
import { query, collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc, serverTimestamp, orderBy, setDoc } from 'firebase/firestore';
import { db } from '../../../utils/init-firebase';

export function useCalendars() {
  const [calendars, setCalendars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(query(collection(db, 'calendars'), orderBy('order')), (snapshot) => {
      const updatedCalendars = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCalendars(updatedCalendars);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleReorderCalendars = async () => {
    calendars.forEach(async (calendar, i) => {
      const calendarRef = doc(db, 'calendars', calendar.id);
      await updateDoc(calendarRef, {
        order: i
      });
    })
  }

  const createCalendar = async (values) => {
    console.log(values)
    const docRef = doc(collection(db, 'calendars'))
    await setDoc(docRef, {
      id: docRef.id,
      ...values,
      createdAt: serverTimestamp(),
      order: calendars ? calendars.length : 0
    });
  };

  const updateCalendar = async (calendarID, data) => {
    console.log('updating calendar: ' + calendarID + '...')
    console.log(data)
    const calendarRef = doc(db, 'calendars', calendarID);
    await updateDoc(calendarRef, data);
  };

  const deleteCalendar = async (calendar) => {
    const calendarRef = doc(db, 'calendars', calendar.id);
    await deleteDoc(calendarRef);
  };

  return {  
        calendars, 
        setCalendars, 
        handleReorderCalendars, 
        isLoading, 
        createCalendar, 
        updateCalendar, 
        deleteCalendar 
    };
}
