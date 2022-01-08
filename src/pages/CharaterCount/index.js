import React from 'react';
import { useRecoilValue } from 'recoil';
import { charCountState } from '../../recoil/selector';

const CharaterCount = () => {
  const count = useRecoilValue(charCountState);
  return <>Charater Count: {count}</>;
};

export default CharaterCount;
