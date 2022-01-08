import { textState } from './atom';
import { selector } from 'recoil';

const charCountState = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

export { charCountState };
