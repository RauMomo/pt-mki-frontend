import { persistentAtom } from '@nanostores/persistent';
import { atom } from 'nanostores';

// src/stores/homeStore.js

const selectedTab = atom(0);

const searchParams = persistentAtom("");

export { selectedTab as a, searchParams as s };
