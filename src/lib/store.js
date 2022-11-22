import { writable } from 'svelte/store';

export const current = writable({
	id: 1,
	name: 'Andrew (Ender) Wiggin',
	quote:
		"\"I don't care if I pass your test, I don't care if I follow your rules. If you can cheat, so can I. I won't let you beat me unfairly - I'll beat you unfairly first.\"",
	media: 'http://localhost:3000/ender-wiggin.jpeg',
	audio: 'ender audio',
	bio: 'Andrew Wiggin was born in 11 BX to Theresa and John Paul Wiggin. He was their third child, his older siblings being Peter and Valentine. Ender was a very humble person, despite his enormous achievements and intellect. Noble, empathetic, generous, and strong willed, he was determined to win and beat those who stood in his way.',
	trivia:
		'During his youth, Valentine gave him the nickname "Ender" because she could not yet pronounce "Andrew".',
	species: 'Human'
});

export const army = writable({
	id: 1,
	name: 'Dragon Army',
	notable_members: ['Ender Wiggin', 'Bean', 'Fly Mollo', 'Vlad', 'Crazy Tom'],
	media: 'http://localhost:3000/dragon-army.webp'
});

export const page = writable('Home');

export const species = writable({
	id: 1,
	name: 'Human',
	ramen: true,
	varelse: false,
	behavior:
		'Humans are sophisticated mammals that live relatively short life periods, with a high enough intellect for language, art, math, technology, and many other complex activities.',
	media: 'http://localhost:3000/peter-wiggin.webp'
});
