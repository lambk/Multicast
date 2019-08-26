/**
 * Converts a YouTube link of the form
 *  www.youtube.com/watch?v={video_id}
 * to
 *  www.youtube.com/embed/{video_id}
 *
 * This allows the video to be loaded cross-origin into an iframe
 * @param {string} url The original YouTube url of the video to load
 */
export function convertToYoutubeEmbed(url) {
  if (!url) return;
  if (/^https?:\/\/www\.youtube\.com\/watch\?v=/.test(url)) {
    return url.replace('watch?v=', 'embed/');
  }
  return url;
}
