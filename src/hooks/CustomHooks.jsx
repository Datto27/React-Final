import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useShuffle = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
}

export const useLocalStorage = (key) => {
  let localValue = localStorage.getItem(key);
  const [value, setValue] = useState(JSON.parse(localValue) ?? null);

  useEffect(() => {
    let newValue = JSON.stringify(value);
    if (localValue !== newValue) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

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

export const currentDate = () => {
  const date = new Date();
  return `${date.getMinutes()}:${date.getHours()} - ${date.getDate()}/${date.getMonth()}`
}

export const formatDate = (ds) => {
  const date = new Date(ds);
  console.log({ds, date})
  return `${date.getHours()}:${date.getMinutes()} - ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
}