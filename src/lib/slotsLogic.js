import { UNASSIGNED_SLOT_VALUE } from './constants.js';

export function doesValidSlotExist(number, slots) {
	// Check open slots for validity of new number

	// If the number is already in the slots (i.e., it was just added),
	// then we're fine
	if (slots.includes(number)) {
		return true;
	}

	for (let i = 0; i < slots.length; i++) {
		if (slots[i] === UNASSIGNED_SLOT_VALUE) {
			if (numberIsValidInSlot(number, slots, i)) {
				return true;
			}
		}
	}

	return false;
}

export function numberIsValidInSlot(number, slots, index) {
	// Check previous slots for validity
	for (let checkIndex = index - 1; checkIndex >= 0; checkIndex--) {
		if (slots[checkIndex] != -1 && number < slots[checkIndex]) {
			return false;
		}
	}

	// Check next slots for validity
	for (let checkIndex = index + 1; checkIndex < slots.length; checkIndex++) {
		if (slots[checkIndex] != -1 && number > slots[checkIndex]) {
			return false;
		}
	}

	return true;
}
