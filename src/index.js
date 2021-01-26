module.exports = function check(str, bracketsConfig) {
  let stack = [];

  outer: for(let i = 0; i < str.length; i++){
    for(let j = 0; j < bracketsConfig.length; j++){

      if(str[i] == bracketsConfig[j][0] && !(bracketsConfig[j][0] == bracketsConfig[j][1] && bracketsConfig[j][0] == stack.slice(-1))){
        stack.push(bracketsConfig[j][1])
        continue outer;
      }

      else if(str[i] == bracketsConfig[j][1]){

        if(bracketsConfig[j][1] == stack.pop()){
          continue outer;
        }

        else{
          return false;
        }

      }
    }
  } 
  return stack.length == 0;
}
