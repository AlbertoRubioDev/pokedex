export const numberText = (number) => {
    if(number){
      let txt = number.toString();
      while(txt.length < 3){
        txt = '0'+txt;
      }
      return txt;
    }
    return null;
  }