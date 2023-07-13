import * as server from '../entries/pages/(mainLayout)/registration/_page.server.js';

export const index = 16;
export const component = async () => (await import('../entries/pages/(mainLayout)/registration/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(mainLayout)/registration/+page.server.js";
export const imports = ["_app/immutable/nodes/16.9b759b82.js","_app/immutable/chunks/index.38a176c8.js","_app/immutable/chunks/BackArrow.305c4988.js","_app/immutable/chunks/TrainingHeader.6f0bc9ea.js","_app/immutable/chunks/Container.08fd762d.js","_app/immutable/chunks/navigation.f4a7817b.js","_app/immutable/chunks/singletons.f8b0a89e.js","_app/immutable/chunks/paths.4fa0c16b.js","_app/immutable/chunks/forms.7704ac5d.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/stores.882aa7f2.js"];
export const stylesheets = ["_app/immutable/assets/16.70dfbf05.css","_app/immutable/assets/BackArrow.aed30131.css","_app/immutable/assets/TrainingHeader.08407c01.css","_app/immutable/assets/Container.b1137235.css"];
export const fonts = [];
