function getElementWidth(content, padding, border) {
  const _content = parseFloat(content);
  const _padding = parseFloat(padding);
  const _border = parseFloat(border);
  return _content + (_padding + _border) * 2;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
console.log(getElementWidth('60px', '12.4px', '8.35px')); // 101,5
