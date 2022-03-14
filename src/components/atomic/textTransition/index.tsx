import clsx from 'clsx';
import { forwardRef, useCallback, useEffect, useState } from 'react';

type TextSwapProps = {
  text: string;
  texts: string[];
  interval: number;
  textClasses: string;
  containerClasses: string;
};

export const TextSwap = forwardRef<HTMLInputElement, TextSwapProps>(
  ({ texts, interval, textClasses, text, containerClasses }, ref) => {
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
      <p
        ref={ref}
        className={clsx('mt-8 text-xl font-semibold', containerClasses)}
      >
        {text} <span className={textClasses}>{currentWord}</span>
      </p>
    );
  }
);
