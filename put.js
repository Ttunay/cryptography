const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const alphabetSmall = 'abcdefghijklmnopqrstuvwxyz'

let numAlph = {}
let numAlphSmall = {}

for(let i =0; i< alphabet.length; i++){
    numAlph[alphabet[i]] = i
}

for(let i =0; i< alphabetSmall.length; i++){
    numAlphSmall[alphabetSmall[i]] = i
}



function Encode(text,key){
    let code = ''
    
    for (let i =0; i < text.length; i++){
        code += alphabet[(numAlph[text[i]] + numAlph[key[i % key.length]]) % alphabet.length]
    }
    return code
}

function Encode(text,key){
    let code = ''
    
    for (let i =0; i < text.length; i++){
        code += alphabetSmall[(numAlphSmall[text[i]] + numAlphSmall[key[i % key.length]]) % alphabetSmall.length]
    }
    return code
}



function Decode(text,key){
    let code = ''
    
    for (let i =0; i < text.length; i++){
        code += alphabet[(numAlph[text[i]] - numAlph[key[i % key.length]] + alphabet.length) % alphabet.length]
    }
    return code
}

function Decode(text,key){
    let code = ''
    
    for (let i =0; i < text.length; i++){
        code += alphabetSmall[(numAlphSmall[text[i]] - numAlph[key[i % key.length]] + alphabetSmall.length) % alphabetSmall.length]
    }
    return code
}

console.log('encoded word: ', Encode('nikita', 'love')) // вводим ключ, заходим в консоль и смотрим что там за пароль
console.log('decoded word: ', Decode('ywfmeo', 'love')) // вводим пароль в первое окно и меняем ключ с encoded
