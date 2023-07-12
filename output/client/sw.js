/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-fc5f5acf'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "_app/immutable/assets/10.1d693fcf.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/11.0735f2b7.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/12.f9c3518f.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/13.5985f505.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/14.42b5a7e3.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/15.a0391d37.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/16.70dfbf05.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/17.7262f122.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/18.feaec235.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/19.8ccd496f.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/2.989f8bf0.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/20.ecc5cd1d.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/21.821e239c.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/24.c1cb7103.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/25.8647140e.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/26.e9aba470.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/27.36f4181d.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/28.9a7b166c.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/29.f58a5f21.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/3.b1271254.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/4.e8c49fba.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/5.2969781f.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/6.42bc2344.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/8.fefed8c6.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/9.aa2faeb1.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/arm.e4d0af62.svg",
    "revision": null
  }, {
    "url": "_app/immutable/assets/arrow-left.bd88c275.svg",
    "revision": null
  }, {
    "url": "_app/immutable/assets/BackArrow.aed30131.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/big-play.20ebd065.svg",
    "revision": null
  }, {
    "url": "_app/immutable/assets/chest.249258de.svg",
    "revision": null
  }, {
    "url": "_app/immutable/assets/chevron-right-black.24686d9f.svg",
    "revision": null
  }, {
    "url": "_app/immutable/assets/chevron-right.98f9b069.svg",
    "revision": null
  }, {
    "url": "_app/immutable/assets/Container.b1137235.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/cross-icon.e591f04e.svg",
    "revision": null
  }, {
    "url": "_app/immutable/assets/Cross.82fb2096.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/cross.c4e1e52d.svg",
    "revision": null
  }, {
    "url": "_app/immutable/assets/dumbbell.5ea815ac.svg",
    "revision": null
  }, {
    "url": "_app/immutable/assets/edit.f42c5d14.svg",
    "revision": null
  }, {
    "url": "_app/immutable/assets/finish__bg.3c145676.png",
    "revision": null
  }, {
    "url": "_app/immutable/assets/frame.05b7703a.png",
    "revision": null
  }, {
    "url": "_app/immutable/assets/hide.b89a8105.svg",
    "revision": null
  }, {
    "url": "_app/immutable/assets/hip.49035a60.svg",
    "revision": null
  }, {
    "url": "_app/immutable/assets/hips.7e912b44.svg",
    "revision": null
  }, {
    "url": "_app/immutable/assets/hurt.b57a87ec.svg",
    "revision": null
  }, {
    "url": "_app/immutable/assets/leg.3b33dfbf.svg",
    "revision": null
  }, {
    "url": "_app/immutable/assets/mail.c66f9e41.svg",
    "revision": null
  }, {
    "url": "_app/immutable/assets/myparams.3a22272d.svg",
    "revision": null
  }, {
    "url": "_app/immutable/assets/NavFooter.91564493.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/Nothing.81d9425d.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/paramsicon.00d51aeb.svg",
    "revision": null
  }, {
    "url": "_app/immutable/assets/paramsicon2.12ffbd51.svg",
    "revision": null
  }, {
    "url": "_app/immutable/assets/PauseCircle.b2b2464a.svg",
    "revision": null
  }, {
    "url": "_app/immutable/assets/Picker.e6090cff.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/Play.57c35044.svg",
    "revision": null
  }, {
    "url": "_app/immutable/assets/plus.3538e066.svg",
    "revision": null
  }, {
    "url": "_app/immutable/assets/profile-icon.2fbb6e24.svg",
    "revision": null
  }, {
    "url": "_app/immutable/assets/sett.b04c7a79.svg",
    "revision": null
  }, {
    "url": "_app/immutable/assets/show.b31abfe8.svg",
    "revision": null
  }, {
    "url": "_app/immutable/assets/star-icon.0f7a5e29.svg",
    "revision": null
  }, {
    "url": "_app/immutable/assets/timer.ea8be01b.svg",
    "revision": null
  }, {
    "url": "_app/immutable/assets/training-cardio.67e05c83.png",
    "revision": null
  }, {
    "url": "_app/immutable/assets/training-express.b30fc239.png",
    "revision": null
  }, {
    "url": "_app/immutable/assets/training-stretch.0e3110b0.png",
    "revision": null
  }, {
    "url": "_app/immutable/assets/TrainingHeader.08407c01.css",
    "revision": null
  }, {
    "url": "_app/immutable/assets/vector-play.ae04c2c4.svg",
    "revision": null
  }, {
    "url": "_app/immutable/assets/vk.ea2c2774.svg",
    "revision": null
  }, {
    "url": "_app/immutable/assets/waist.c76d4a9c.svg",
    "revision": null
  }, {
    "url": "_app/immutable/assets/WeightChart.ff08ef18.css",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/7.4ed993c7.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/BackArrow.305c4988.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/Container.08fd762d.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/Cross.a588b2d0.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/edit.f70b3d12.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/forms.11dad2ee.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/frame.b054df63.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/index.38a176c8.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/myparams.6e8f726f.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/NavFooter.a72a93cb.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/navigation.b21568d4.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/Nothing.f5bcedbe.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/parse.bee59afc.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/paths.f249c62d.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/Picker.270656d2.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/plus.eae7b64d.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/preload-helper.41c905a7.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/singletons.e05c8b07.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/stores.b0339616.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/stores.d58668a2.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/TrainingHeader.6f0bc9ea.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/virtual_pwa-register.94b1755a.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/WeightChart.b454f8a2.js",
    "revision": null
  }, {
    "url": "_app/immutable/chunks/workbox-window.prod.es5.a7b12eab.js",
    "revision": null
  }, {
    "url": "_app/immutable/entry/app.a7930737.js",
    "revision": null
  }, {
    "url": "_app/immutable/entry/start.35766874.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/0.0d1517be.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/1.800a9baf.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/10.8b5fec9f.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/11.0f247169.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/12.c87c9f87.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/13.bfc712a3.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/14.cb07e6d7.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/15.ab9aea64.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/16.1a4a4c59.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/17.48fef92b.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/18.d57b65c9.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/19.ac3d8e4f.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/2.8147aead.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/20.ffe056ca.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/21.4332f1d7.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/22.0350816d.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/23.b91a9c9c.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/24.cf1fa2aa.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/25.0b4ce929.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/26.f8574215.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/27.0ed7415f.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/28.b3142ca3.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/29.ee7b872d.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/3.ebbd5f61.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/4.0769bb2c.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/5.3a5d6f1b.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/6.c6d63e98.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/8.8343c841.js",
    "revision": null
  }, {
    "url": "_app/immutable/nodes/9.41496d6e.js",
    "revision": null
  }, {
    "url": "apple-touch-icon-180x180.png",
    "revision": "4316c41cefe443b6b5c0b505db43aec3"
  }, {
    "url": "favicon.ico",
    "revision": "691d2f66128e7834556418062fa71f07"
  }, {
    "url": "favicon.png",
    "revision": "3a387408ecc6cc283f724b39ca5fffb4"
  }, {
    "url": "maskable-icon-512x512.png",
    "revision": "a2167dfe38394e046339c00324386ea1"
  }, {
    "url": "pwa-192x192.png",
    "revision": "1e3d7721a8e17992f12a32bbc71f57a1"
  }, {
    "url": "pwa-512x512.png",
    "revision": "68ad6635ee5ad811814bb8ddd241a2a8"
  }, {
    "url": "pwa-64x64.png",
    "revision": "5db16b0b9a8c31a9dd85029f3bef7726"
  }, {
    "url": "manifest.webmanifest",
    "revision": "a2f5a6fd7961334eea885d00fbf2ec7e"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("/")));

}));
