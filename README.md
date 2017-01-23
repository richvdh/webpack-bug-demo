Minimal demonstration of webpack code-splitting/sourcemap bug
=============================================================

Demonstrates a problem with regenerating sourcemaps on reload.

To demonstrate:

* `npm install`
* `npm run start`
* Modify `main.js` to prompt dev-server to rebuild.
* Visit http://localhost:8080/ in a browser and inspect the source for `1.js`
  via the developer tools. Observe that no source-map is available.
