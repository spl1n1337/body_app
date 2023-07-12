import * as server from '../entries/pages/(mainLayout)/registration/_page.server.js';

export const index = 16;
export const component = async () => (await import('../entries/pages/(mainLayout)/registration/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(mainLayout)/registration/+page.server.js";
export const imports = ["_app/immutable/nodes/16.1a4a4c59.js","_app/immutable/chunks/index.38a176c8.js","_app/immutable/chunks/BackArrow.305c4988.js","_app/immutable/chunks/TrainingHeader.6f0bc9ea.js","_app/immutable/chunks/Container.08fd762d.js","_app/immutable/chunks/navigation.b21568d4.js","_app/immutable/chunks/singletons.e05c8b07.js","_app/immutable/chunks/paths.f249c62d.js","_app/immutable/chunks/forms.11dad2ee.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/stores.d58668a2.js"];
export const stylesheets = ["_app/immutable/assets/16.70dfbf05.css","_app/immutable/assets/BackArrow.aed30131.css","_app/immutable/assets/TrainingHeader.08407c01.css","_app/immutable/assets/Container.b1137235.css"];
export const fonts = [];
