// eslint-disable-next-line import/no-cycle
import { fetchPlaceholders, sampleRUM } from './aem.js';



// Core Web Vitals RUM collection
sampleRUM('cwv');




// add more delayed functionality here
function loadHeadAnalytics() {
  const scriptTag = document.createElement('script');

  scriptTag.innerHTML = `https://assets.adobedtm.com/ef0f7eb243a4/86be44fc9fd9/launch-03b4278cb656-development.min.js`;

  document.head.prepend(scriptTag);
}





if (!window.location.hostname.includes('localhost') && !window.location.hostname.includes('author')) {
    loadHeadAnalytics();
}
