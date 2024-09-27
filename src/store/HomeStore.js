// src/stores/homeStore.js
import { atom } from "nanostores";

export const selectedTab = atom(0);

export const textParams = atom("");

if (typeof window !== "undefined") {
  const savedQuery = localStorage.getItem("textParams");
  if (savedQuery) {
    console.log("asd:" + savedQuery);
    textParams.set(savedQuery);
  }

  // Subscribe to changes and save to localStorage
  textParams.subscribe((value) => {
    localStorage.setItem("textParams", value);
  });
}
