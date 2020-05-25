const utils = {
    range : (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step)),
    random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),
    shuffle: (arr) => {
      for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i + 1);
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }
};

export default utils;