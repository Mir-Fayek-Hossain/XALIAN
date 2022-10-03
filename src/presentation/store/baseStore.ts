import { writable, readable, derived } from 'svelte/store';

export const isAuthenticated = writable(false);
