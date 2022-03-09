import { motion } from 'framer-motion';
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
  ...rest
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
    <motion.p className='mt-8 text-xl font-semibold' {...rest}>
      {text} <span className={textClasses}>{currentWord}</span>
    </motion.p>
  );
};
