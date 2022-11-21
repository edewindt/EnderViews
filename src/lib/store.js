import { writable } from 'svelte/store';

export const current = writable({
	ID: 1,
	Name: 'Ender Wiggin',
	Quote: 'We always win',
	Media: 'http://localhost:3000/ender-wiggin.jpeg',
	Audio: 'ender audio'
});

export const currentID = writable({ id: 1 });
