import { redirect } from '@sveltejs/kit';
// import { goto } from '$app/navigation';
throw redirect(301, '/targets');
// goto('/trainings')