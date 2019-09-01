import { v4 } from 'uuid';

export function generateFrame(url) {
  return {
    uuid: v4(),
    src: url
  };
}
