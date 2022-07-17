

// TASK NO.1 - PALINDROME WORD

const Words = "kakak menjual katak dengan harga 12021"
let devideWords = Words.split(' ')

let PalindromeWord = []
let notPalindromeWord = []

function palindromeFn(string) {
	const stringLength = string.length;
	for (let i = 0; i < stringLength / 2; i++) {
		if (string[i] !== string[stringLength - 1 - i]) {
			return notPalindromeWord.push(string);
		}
	}
	return PalindromeWord.push(string);
}

devideWords.forEach((items) => {
  palindromeFn(items)
});


console.log('Total PalindromeWord : ', PalindromeWord.length)
console.log('PalindromeWord : ', PalindromeWord)

// CEK INDEX PALINDROME
let FindIndex1 = []
  PalindromeWord.forEach((item) =>{
  let res = devideWords.findIndex(i => i === item)
  return FindIndex1.push(res)
})

console.log('FindIndex Palindrome : ', FindIndex1)

// CEK INDEX NOT PALINDROME
let FindIndex2 = []
  notPalindromeWord.forEach((item) =>{
  let res = devideWords.findIndex(i => i === item)
  return FindIndex2.push(res)
})

console.log('FindIndex Not Palindrome : ', FindIndex2)

// TASK NO.2 - Cool Triangle
function coolTrianle(num){
  let string = "";
  for(let i = 1; i <= num; i++){
    // print star
    for (let k = 0; k < i; k++){
      if(i == num){
        string += "*"  
      } else {
        if(k == 0 || k == i - 1){
          string += "*"
        } else {
          string += " "
        }
      }
    }
    string += "\n";
  }
  return string
  // console.log(string)
}

console.log(coolTrianle(8))

// TASK NO.3 - CONVERT OBJECT TO JSON BEAUTIFY
const obj = {
'address.street':'jalan sakura',
'address.provice':'banten',
'address.city':'tangerang',
'person.name':'john',
'person.email':'john@doe.com',
'userType':'admin',
'accessLevel':'QA'
};

const unflatten = (data) => {
  if (Object(data) !== data || Array.isArray(data))
    return data;
  const regex = /\.?([^.\[\]]+)$|\[(\d+)\]$/
  const props = Object.keys(data);
  let result, p;
  while (p = props.shift()) {
    const m = regex.exec(p)
    let target;
    if (m.index) {
      const rest = p.slice(0, m.index);
      if (!(rest in data)) {
        data[rest] = m[2] ? [] : {};
        props.push(rest);
      }
      target = data[rest];
    } else {
      if (!result) {
        result = (m[2] ? [] : {});
      }
      target = result
    }
    target[m[2] || m[1]] = data[p];
  } 
  return result;
};

let resultJSON = unflatten(obj)

console.log(resultJSON)

 document.getElementById('stringifiedCode').innerHTML =JSON.stringify(resultJSON, null, 4);