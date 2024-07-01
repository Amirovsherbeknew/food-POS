import useProductStore from "../store/store";

function convertNumber(alphaNum) {
  alphaNum = alphaNum.split("");
  let i = 0;
  while (
    i < alphaNum.length &&
    (Number.isNaN(+alphaNum[i]) || alphaNum[i] === " ")
  )
    i++;
  return Number.parseFloat(alphaNum.slice(i).join(""));
}

export { convertNumber };
