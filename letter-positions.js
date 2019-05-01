function positionLetters(string){
  var positions = {};
  for (let i = 0; i < string.length; i++){
    let nextChar = string[i];
    if(nextChar === " "){
      continue;
    }
    if(!positions[nextChar]){
      positions[nextChar] = [i];
    }else{
      positions[nextChar].push(i);
    }
  }
  return positions;
}

var string = process.argv[2];
console.log(positionLetters(string));

/*
expected output with "lighthouse in the house":
{ l: [ 0 ],
  i: [ 1, 11 ],
  g: [ 2 ],
  h: [ 3, 5, 15, 18 ],
  t: [ 4, 14 ],
  o: [ 6, 19 ],
  u: [ 7, 20 ],
  s: [ 8, 21 ],
  e: [ 9, 16, 22 ],
  n: [ 12 ] }
*/