import { motion, useAnimation } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';

type TextSwapProps = {
  texts: string[];
  interval: number;
  textClasses: string;
};

export const TextSwap = ({ texts, interval, textClasses }: TextSwapProps) => {
  const [currentWord, setCurrentWord] = useState(texts[0]);
  // const [nextWord, setNextWord] = useState(texts[1]);

  const currentControls = useAnimation();
  // const nextControls = useAnimation()

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * texts.length);
    //setCurrentWord(nextWord);
    setCurrentWord(texts[index]);
  }, [texts]);

  useEffect(() => {
    const intervalID = setInterval(shuffle, interval);
    return () => clearInterval(intervalID);
  }, [shuffle, interval]);

  return (
    <motion.p animate={currentControls} className={textClasses}>
      {currentWord}
    </motion.p>
  );
};
