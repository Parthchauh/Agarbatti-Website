export const getAnimationDelay = (index: number, baseDelay: number = 0.2) => {
  return `${index * baseDelay}s`;
};