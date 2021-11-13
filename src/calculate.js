const addSubtract = (expression) => {
  let addedSubtracted = [];
  for (let i = 0; i < expression.length; i++) {
    if (Number.isNaN(Number(expression[i]))) {
      if (expression[i] === '+') {
        const result = Number(expression[i-1]) + Number(expression[i + 1]);
        addedSubtracted.pop();
        addedSubtracted.push(result);
        addedSubtracted = addSubtract(addedSubtracted.concat(expression.slice(i + 2)));
        break;
      } else if (expression[i] === '-') {
        const result = Number(expression[i-1]) - Number(expression[i+1]);
        addedSubtracted.pop();
        addedSubtracted.push(result);
        addedSubtracted = addSubtract(addedSubtracted.concat(expression.slice(i + 2)));
        break;
      } else {
        addedSubtracted.push(expression[i]);
      }
    } else {
      addedSubtracted.push(expression[i]);
    }
  }
  return addedSubtracted;
}

const divide = (expression) => {
  let divided = [];
  for (let i = 0; i < expression.length; i++) {
    if (Number.isNaN(Number(expression[i]))) {
      if (expression[i] === '/') {
        const result = Number(expression[i-1]) / Number(expression[i + 1]);
        divided.pop();
        divided.push(result);
        divided = divide(divided.concat(expression.slice(i + 2)));
        break;
      } else {
        divided.push(expression[i]);
      }
    } else {
      divided.push(expression[i]);
    }
  }
  return addSubtract(divided);
}

const multiply = (expression) => {
  let multiplied = [];
  for (let i = 0; i < expression.length; i++) {
    if (Number.isNaN(Number(expression[i]))) {
      if (expression[i] === '*') {
        const result = Number(expression[i-1]) * Number(expression[i + 1]);
        multiplied.pop();
        multiplied.push(result);
        multiplied = multiply(multiplied.concat(expression.slice(i + 2)));
        break;
      } else {
        multiplied.push(expression[i]);
      }
    } else {
      multiplied.push(expression[i]);
    }
  }
  return divide(multiplied);
}

const exponent = (expression) => {
  let rebuiltExp = [];
  for (let i = 0; i < expression.length; i++) {
    if (Number.isNaN(Number(expression[i]))) {
      if (expression[i] === '^') {
        let count = Math.abs(Number(expression[i + 1]));
        let result = 1;
        if (count > 0) {
          result = Number(expression[i-1]);
          while (count > 1) {
            result *= Number(expression[i - 1]);
            count--;
          }
        }
        if (Number(expression[i + 1]) < 0) result = 1 / result;
        rebuiltExp.pop();
        rebuiltExp.push(result);
        rebuiltExp = exponent(rebuiltExp.concat(expression.slice(i + 2)));
        break;
      } else {
        rebuiltExp.push(expression[i]);
      }
    } else {
      rebuiltExp.push(expression[i]);
    }
  }
  return multiply(rebuiltExp);
}

const calculate = (expression) => {
  if (typeof expression === 'string') {
    expression = expression.match(/\-\d+\.+\d+|\-\d+|\d+\.\d+|\d+|[^0-9]/g);
  }
  let rebuiltExp = [];
  let insideParens = [];
  let inParenthesis = false;
  let correctNegatives = [];
  expression.forEach((input, i) => {
    if (input === '(' && expression[i - 1] === ')') {
      correctNegatives.push('*');
      correctNegatives.push('(');
    } else if (input.includes('-')) {
      if (!Number.isNaN(Number(expression[i - 1]))) {
        correctNegatives.push('-');
        correctNegatives.push(input.slice(1));
      } else {
        correctNegatives.push(input);
      }
    } else {
      correctNegatives.push(input);
    }
  })
  expression = correctNegatives;
  for (let i = 0; i < expression.length; i++) {
    if (Number.isNaN(Number(expression[i]))) {
      if (expression[i] === '(') {
        inParenthesis = true;
        if (expression[i] === ')') {
        }
      } else if (expression[i] === ')') {
        inParenthesis = false;
        insideParens = calculate(insideParens);
        rebuiltExp.push(insideParens[0]);
        insideParens = [];
      } else if (inParenthesis) {
        insideParens.push(expression[i]);
      } else {
        rebuiltExp.push(expression[i]);
      }
    } else if (inParenthesis) {
      insideParens.push(expression[i]);
    } else {
      rebuiltExp.push(expression[i]);
    }
  }
  return exponent(rebuiltExp);
}

module.exports = calculate;
