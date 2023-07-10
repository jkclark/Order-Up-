import { writable } from 'svelte/store';

export const score = writable(0);

export function incrementScore() {
	score.update((n) => n + 1);
}

export function resetScore() {
	score.set(0);
}
