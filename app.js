const telephoneCheck = (str) => {
  let countNumbers = 0;
  for(let i = 0; i < str.length; i++) {
    if ((str[i] != ' ') && (str[i] != '-') && (str[i] != '(') && (str[i] != ')') && (+str[i] != NaN)) {
      countNumbers += 1;
    }
  }
  if(countNumbers != 10 && countNumbers != 11) {
    return false;
  }
  if(countNumbers == 11) {
    if(+str[0] != 1) {
      return false;
    }
    if(!checkBrackets(str)) {
      return false;
    }
    if(!checkDash(str)) {
      return false;
    }
    return true;
  }
  if(countNumbers == 10) {
    if(!checkBrackets(str)) {
      return false;
    }
    if(!checkDash(str)) {
      return false;
    }
    return true;
  }
}

const checkBrackets = (str) => {
  let openBracket = 0;
  let closeBracket = 0;
  for(let i = 0; i < str.length; i++) {
    if(str[i] == '(') {
      openBracket += 1;
    }
    if(str[i] == ')') {
      closeBracket += 1;
    }
  }
  if(openBracket != closeBracket) {
    return false;
  }
  if(((str.indexOf(')') - str.indexOf('(')) != 4) && str.indexOf('(') != -1) {
    return false;
  }
  return true;
}

const checkDash = (str) => {
  if(str.match(/-/g) != '-' && str.match(/-/g) != '-,-' && str.match(/-/g) != null) {
    return false;
  } else {
    return true;
  }
}

telephoneCheck('1 555)555-5555')