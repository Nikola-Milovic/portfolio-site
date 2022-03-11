export const whileInViewAnim = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true },
};

export const onHoverAnim = (amount?: number, duration?: number) => {
  return {
    whileHover: {
      scale: amount ?? 1.05,
      transition: {
        duration: duration ?? 0.1,
      },
    },
  };
};

export const staggerAnimParent = (delay?: number, stagger?: number) => {
  return {
    ...whileInViewAnim,
    variants: {
      visible: {
        transition: {
          delay: delay ?? 0.5,
          staggerChildren: stagger ?? 0.5,
        },
      },
      invisible: {
        transition: {
          delay: delay ?? 0.5,
          staggerChildren: stagger ?? 0.5,
        },
      },
    },
  };
};

export const fadeIn = {
  variants: {
    hidden: {
      opacity: 0,
      transition: { duration: 0.4 },
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.4 },
    },
  },
};

export const fadeSlideY = (
  amount?: number,
  reverse?: boolean,
  duration?: number
) => {
  const y = amount
    ? reverse
      ? `-${amount}%`
      : amount + '%'
    : reverse
    ? '-50%'
    : '50%';
  return {
    variants: {
      hidden: {
        opacity: 0,
        y,
        transition: { duration: duration ?? 0.8 },
      },
      visible: {
        opacity: 1,
        y: '0%',
        transition: { duration: duration ?? 0.8 },
      },
    },
  };
};

export const fadeSlideYDelay = (
  amount?: number,
  reverse?: boolean,
  duration?: number,
  delay?: number
) => {
  const y = amount
    ? reverse
      ? `-${amount}%`
      : amount + '%'
    : reverse
    ? '-50%'
    : '50%';
  return {
    variants: {
      hidden: {
        opacity: 0,
        y,
        transition: { duration: duration ?? 0.8, delay: delay ?? 0.5 },
      },
      visible: {
        opacity: 1,
        y: '0%',
        transition: { duration: duration ?? 0.8, delay: delay ?? 0.5 },
      },
    },
  };
};

export const fadeSlideX = (
  amount?: number,
  reverse?: boolean,
  duration?: number,
  delay?: number
) => {
  const x = amount
    ? reverse
      ? amount + '%'
      : `-${amount}%`
    : reverse
    ? '50%'
    : '-50%';

  const transition = delay
    ? { duration: duration ?? 0.8, delay: delay }
    : { duration: duration ?? 0.8 };
  return {
    variants: {
      hidden: {
        opacity: 0,
        x: x,
        transition: { duration: duration ?? 0.8 },
      },
      visible: {
        opacity: 1,
        x: '0%',
        transition: transition,
      },
    },
  };
};
