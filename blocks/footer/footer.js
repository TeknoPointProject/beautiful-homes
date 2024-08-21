import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
  
      const html = await response.text();
  
      // Create a temporary DOM element to parse the HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
  
        // Find the element with class="cmp-container"
        const cmpContainer = doc.querySelector('.cmp-container');
  
      // Check if the element exists and append it
      if (cmpContainer) {
        console.log("Found element:", cmpContainer.outerHTML);
        
        // Use innerHTML to properly render the HTML
        footer.innerHTML = cmpContainer.outerHTML;
        block.append(footer);
        return cmpContainer.outerHTML;
      } else {
        console.log("Element with class 'cmp-container' not found.");
        return null;
      }
    } catch (error) {
      console.error('Fetch error: ', error);
    }
  }
  
  fetchData("https://www.beautifulhomes.asianpaints.com/content/experience-fragments/asianpaintsbeautifulhomes/us/en/new-footer-xf/master.html");
  
}
 




