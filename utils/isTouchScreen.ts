const isTouchScreen = (): boolean => {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
};

export default isTouchScreen;
