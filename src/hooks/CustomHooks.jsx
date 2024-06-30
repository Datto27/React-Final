import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export const useShuffle = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
}

export const useLocalStorage = (key) => {
  const localValue = useRef(null);
  const [value, setValue] = useState([]);

  useEffect(() => {
    fetchLocalValue();
  }, [key]);

  useEffect(() => {
    if (value.length !== 0 && localValue.current?.length !== value?.length) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  const fetchLocalValue = async () => {
    let json = localStorage.getItem('history');
    localValue.current = await JSON.parse(json);
    setValue(localValue.current ?? []);
  }

  return [value, setValue];
}

export const useQueryParams = () => {
  const location = useLocation();
  const keyValuePairs = location.search.slice(1).split(';');

  const obj = {};
  keyValuePairs.forEach(pair => {
      const [key, value] = pair.split('=');
      obj[key.trim()] = value.trim();
  });

  return obj;
}

export const formatDate = (ds) => {
  const date = new Date(ds);
  return `${date.getHours()}:${date.getMinutes()} - ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
}