export function numberIsValid(number, slots, index) {
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
