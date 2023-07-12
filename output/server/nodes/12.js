import * as server from '../entries/pages/(mainLayout)/profile/_page.server.js';

export const index = 12;
export const component = async () => (await import('../entries/pages/(mainLayout)/profile/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(mainLayout)/profile/+page.server.js";
export const imports = ["_app/immutable/nodes/12.c87c9f87.js","_app/immutable/chunks/index.38a176c8.js","_app/immutable/chunks/Container.08fd762d.js","_app/immutable/chunks/TrainingHeader.6f0bc9ea.js","_app/immutable/chunks/Nothing.f5bcedbe.js","_app/immutable/chunks/navigation.b21568d4.js","_app/immutable/chunks/singletons.e05c8b07.js","_app/immutable/chunks/paths.f249c62d.js","_app/immutable/chunks/BackArrow.305c4988.js"];
export const stylesheets = ["_app/immutable/assets/12.f9c3518f.css","_app/immutable/assets/Container.b1137235.css","_app/immutable/assets/TrainingHeader.08407c01.css","_app/immutable/assets/Nothing.81d9425d.css","_app/immutable/assets/BackArrow.aed30131.css"];
export const fonts = [];