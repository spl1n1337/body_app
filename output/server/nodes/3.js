import * as server from '../entries/pages/(mainLayout)/_page.server.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/(mainLayout)/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(mainLayout)/+page.server.js";
export const imports = ["_app/immutable/nodes/3.8b3267b6.js","_app/immutable/chunks/index.38a176c8.js","_app/immutable/chunks/paths.4fa0c16b.js"];
export const stylesheets = ["_app/immutable/assets/3.b1271254.css"];
export const fonts = [];
