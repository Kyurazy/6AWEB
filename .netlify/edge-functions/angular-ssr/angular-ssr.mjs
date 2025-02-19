
  import "./polyfill.mjs";
  
    import { netlifyAppEngineHandler } from "../../../dist/angular-forms/server/server.mjs";
    import "./fixup-event.mjs";
    
    export default netlifyAppEngineHandler;
    
  export const config = {
    path: "/*",
    excludedPath: ["/.netlify/*","/favicon.ico","/form-validation/index.html","/index.csr.html","/main-BCCKUY4U.js","/polyfills-FFHMD2TL.js","/reactive-form/index.html","/styles-5INURTSO.css","/template-driven/index.html","/","/form-validation","/reactive-form","/template-driven"],
    generator: "@netlify/angular-runtime@2.2.2",
    name: "Angular SSR",
  };
  