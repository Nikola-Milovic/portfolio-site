import { useCallback, useEffect, useState } from 'react';

type TextSwapProps = {
  text: string;
  texts: string[];
  interval: number;
  textClasses: string;
};

export const TextSwap = ({
  texts,
  interval,
  textClasses,
  text,
}: TextSwapProps) => {
  const [currentWord, setCurrentWord] = useState(texts[0]);

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * texts.length);
    setCurrentWord(texts[index]);
  }, [texts]);

  useEffect(() => {
    const intervalID = setInterval(shuffle, interval);
    return () => clearInterval(intervalID);
  }, [shuffle, interval]);

  return (
    <p className='mt-8 text-xl font-semibold'>
      {text} <span className={textClasses}>{currentWord}</span>
    </p>
  );
};
