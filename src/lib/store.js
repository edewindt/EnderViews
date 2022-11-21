import { writable } from 'svelte/store';

export const current = writable({
	ID: 1,
	Name: 'Andrew (Ender) Wiggin',
	Quote:
		"\"I don't care if I pass your test, I don't care if I follow your rules. If you can cheat, so can I. I won't let you beat me unfairly - I'll beat you unfairly first.\"",
	Media: 'http://localhost:3000/ender-wiggin.jpeg',
	Audio: 'ender audio',
	Bio: 'Andrew Wiggin was born in 11 BX to Theresa and John Paul Wiggin. He was their third child, his older siblings being Peter and Valentine. Ender was a very humble person, despite his enormous achievements and intellect. Noble, empathetic, generous, and strong willed, he was determined to win and beat those who stood in his way.',
	Trivia:
		'During his youth, Valentine gave him the nickname "Ender" because she could not yet pronounce "Andrew".',
	Species: 'Human'
});

export const currentID = writable({ id: 1 });
