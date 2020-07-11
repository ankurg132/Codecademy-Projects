const _= {
  clamp(number,lower,upper){
  var lowerClampedValue= Math.max(number,lower);
  var ClampedValue=Math.min(lowerClampedValue,upper);
  return ClampedValue;
},
  inRange(number,start,end){
    if(end===undefined){
      end=start;
      start=0;
    }
    if(start>end){
      let t;
      t=start;
      start=end;
      end=t;
    }
    if(number===start){return true;}
    if(number===end){return false;}
    if(number<= end && number>=start){
      return true;
    }
    else{return false;}
  },
  words(string){
    const word=string.split(' ');
    return word;
  },
  pad(string,length){
    if(string.length>length){
      return string;
    }
    var paddedString;
    var amountPadding=length-string.length;
    var startPadding=Math.floor((amountPadding)/2);
    var EndPadding=amountPadding-startPadding;
    paddedString=(' '.repeat(startPadding))+string+(' '.repeat(EndPadding));
    return paddedString;
  },
  has(object,key){
    var hasValue=(!(object[key]===undefined));
    return hasValue;
  },
  invert(object){
    const newObject={};
    for(key in object){
      var originalValue=object[key];
      newObject[originalValue]=key;
    }
    return newObject;
  },
  findKey(object,func){
    for(key in object){
      if(func(object[key])){
        return key;
      }return undefined;
    }
  },
drop (array, num) {
  if (num === undefined) {
    num = 1;
  }
  let dropped = array.slice(num);
  return dropped;
},
dropWhile(array,fun){
  var dropNumber=array.findIndex((element,index)=>{
    return !(fun(element,index,array));
  });
  var droppedArray=this.drop(array,dropNumber);
  return droppedArray;
},
chunk(array,size){
  if(!size){size=1;}
  const chunksArray=[];
  for(let i=0;i< array.length;i+=size){
    var chunkArray=array.slice(i,i+size);
    chunksArray.push(chunkArray);
  }
  return chunksArray;
}
};



// Do not write or modify code below this line.
module.exports = _;

