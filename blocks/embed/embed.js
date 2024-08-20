const loadScript = (url, callback, type) => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.src = url;
    if (type) {
      script.setAttribute('type', type);
    }
    script.onload = callback;
    head.append(script);
    return script;
};

const getDefaultEmbed = (url) => `
  <div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;">
    <iframe src="${url.href}" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allowfullscreen="" allow="autoplay" scrolling="no" allow="encrypted-media" title="Content from ${url.hostname}" loading="lazy"></iframe>
  </div>`;

const embedYoutube = (url, autoplay) => {
    const usp = new URLSearchParams(url.search);
    const vid = usp.get('v') ? encodeURIComponent(usp.get('v')) : '';
    const suffix = autoplay ? '?autoplay=1' : '';
    
    // Determine the correct embed path based on URL type
    const embedURL = url.origin.includes('youtu.be') ? `https://www.youtube.com/embed/${vid}${suffix}` : `https://www.youtube.com/embed/${vid}${suffix}`;
    
    return `
      <div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;">
        <iframe src="${embedURL}" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allow="autoplay; fullscreen; picture-in-picture; encrypted-media" allowfullscreen="" scrolling="no" title="Content from YouTube" loading="lazy"></iframe>
      </div>`;
};

const embedVimeo = (url, autoplay) => {
    const [, video] = url.pathname.split('/');
    const suffix = autoplay ? '?autoplay=1' : '';
    return `
      <div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;">
        <iframe src="https://player.vimeo.com/video/${video}${suffix}" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Content from Vimeo" loading="lazy"></iframe>
      </div>`;
};

const embedTwitter = (url) => {
    const embedHTML = `<blockquote class="twitter-tweet"><a href="${url.href}"></a></blockquote>`;
    loadScript('https://platform.twitter.com/widgets.js');
    return embedHTML;
};

const loadEmbed = (block, link, autoplay) => {
    if (block.classList.contains('embed-is-loaded')) {
      return;
    }

    const EMBEDS_CONFIG = [
      {
        match: ['youtube', 'youtu.be'],
        embed: embedYoutube,
      },
      {
        match: ['vimeo'],
        embed: embedVimeo,
      },
      {
        match: ['twitter'],
        embed: embedTwitter,
      },
    ];

    const config = EMBEDS_CONFIG.find((e) => e.match.some((match) => link.includes(match)));
    const url = new URL(link);
    if (config) {
      block.innerHTML = config.embed(url, autoplay);
      block.className = `block embed embed-${config.match[0]}`;
    } else {
      block.innerHTML = getDefaultEmbed(url);
      block.className = 'block embed';
    }
    block.classList.add('embed-is-loaded');
};

export default function decorate(block) {
    const placeholder = block.querySelector('picture');
    const link = block.querySelector('a').href;
    block.textContent = '';

    if (placeholder) {
      const wrapper = document.createElement('div');
      wrapper.className = 'embed-placeholder';
      wrapper.innerHTML = '<div class="embed-placeholder-play"><button type="button" title="Play"></button></div>';
      wrapper.prepend(placeholder);
      wrapper.addEventListener('click', () => {
        loadEmbed(block, link, true);
      });
      block.append(wrapper);
    } else {
      const observer = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect();
          loadEmbed(block, link);
        }
      });
      observer.observe(block);
    }
}
