/**
 * Converts a source url to an appropriate embed url where appropriate
 *
 * This allows videos from sources such as YouTube to be loaded cross-origin into an iframe
 * @param {string} url The original video url
 */
export function convertSourceUrl(url) {
  if (!url) return;
  if (isYouTubeLink(url)) {
    const youtubeId = extractYouTubeId(url);
    return `https://www.youtube.com/embed/${youtubeId}`;
  }
  return url;
}

/**
 * Returns true if the source url is from a YouTube domain, else returns false
 * @param {string} url The source url
 */
function isYouTubeLink(url) {
  return /^https?:\/\/(\w+\.)?youtu\.?be(\.com)?\//.test(url);
}

/**
 * Given a YouTube link, the video id is extracted from the url and returned
 * If the given url is not a YouTube link (an id cannot be found), null is returned
 * @param {string} url The source url
 */
function extractYouTubeId(url) {
  const standardPattern = /\?v=(\w+)$/;
  const shortenedPattern = /\/(\w+)$/;
  const patterns = [standardPattern, shortenedPattern];

  var matches;
  for (let i = 0; i < patterns.length; i++) {
    matches = url.match(patterns[i]);
    if (matches && matches.length >= 2) {
      return matches[1];
    }
  }
  return null;
}
