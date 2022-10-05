function reverserString(str) {
    return str.split('').reverse().join('');
  }
  
  function test1(a , b) {
    let num1 = a.length;
    let num2 = b.length;
    let var1 = reverserString(a);
    let var2 = reverserString(b);
    let newString = '';
      
      if(num1 > num2 || num1 == num2) {
        for(let i = 0; i < num1; i++) {
          newString += `${var1.charAt(i)}${var2.charAt(i)}`
        }
      }
      else {
        for(let i = 0; i < num2; i++) {
          newString += `${var1.charAt(i)}${var2.charAt(i)}`
        }
      }
      return newString;
   };
  
    console.log(test1('abcdefg', '12345'))
    console.log(test1('x', '12345'))
    console.log(test1('ABCDEF', 'z'))