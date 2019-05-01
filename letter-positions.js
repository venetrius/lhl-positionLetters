function positionLetters(string){
  var positions = {};
  for (let i = 0; i < string.length; i++){
    let nextChar = string[i];
    if(positions[nextChar] === undefined){
      positions[nextChar] = [i];
    }else{
      positions[nextChar].push(i);
    }
  }
  if(positions[" "]){
    delete positions[" "];
  }
  return positions;
}

var string = process.argv[2];
console.log(positionLetters(string));
