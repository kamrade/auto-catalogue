export const formatTextBlocks = (text: string, n: number = 4) => {
  let rgxp = new RegExp(`.{1,${n}}`, 'g');
  let result =  (text.match(rgxp) || []).join(' - ');
  return result;
}