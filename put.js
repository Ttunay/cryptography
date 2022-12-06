const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

let numAlph = {}

for(let i =0; i< alphabet.length; i++){
    numAlph[alphabet[i]] = i
}


function Encode(text,key){
    let code = ''
    
    for (let i =0; i < text.length; i++){
        code += alphabet[(numAlph[text[i]] + numAlph[key[i % key.length]]) % alphabet.length]
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

console.log('encoded word: ', Encode('TIGRUS', 'TAIRA')) // вводим ключ, заходим в консоль и смотрим что там за пароль
console.log('decoded word: ', Decode('MIOIUL', 'TAIRA')) // вводим пароль в первое окно и меняем ключ с encoded
