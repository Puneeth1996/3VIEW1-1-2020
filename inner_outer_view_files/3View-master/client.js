import {ReactInstance, Location, Surface, Math as ReactMath,} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  const customLocation = new Location([-10,-50,250]);

  r360.renderToLocation(
    r360.createRoot('ThreeView'),
    customLocation
  );

  r360.runtime.executor._worker.addEventListener(
    'message',
    (e) => onMessage(e, r360, customLocation)
  );

  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}


function onMessage(e, r360, customLocation) {
  if(e.data.type === 'newPosition') {
    customLocation.setWorldPosition(e.data.x, 4, e.data.z);
  }
}
window.React360 = {init};
