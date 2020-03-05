// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance} from 'react-360-web';



function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('Hello360', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('3602.jpg'));


  // Tried for 1x6 Cubic Format
  // The below peice doesnot work 
  // r360.compositor.setBackground(r360.getAssetURL[('right.jpg'),('left.jpg'),('top.jpg'),('bottom.jpg'),('back.jpg'),('front.jpg')]);

  // Please Note that the https://github.com/facebook/react-360/issues/620
  //  Tells that latest release for using the cubemap in react360 to background is still not updated as of July 20 2019 



  



}

window.React360 = {init};
