import { writable } from 'svelte/store';

import { NUMBER_NOT_DEFINED } from './constants.js';

export const number = writable(NUMBER_NOT_DEFINED);

export function setNumber(newNumber) {
	number.set(newNumber);
}

export function resetNumber() {
	number.set(NUMBER_NOT_DEFINED);
}
