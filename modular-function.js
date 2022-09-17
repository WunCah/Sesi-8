// membuat replace, reverse, change
// Encrypted PasswordBuatlah sebuah program untuk meng-encrypt input dari user untuk dijadikan password.
// hapus semua spasi dari input
// reverse input, jadi jika user memasukkan "abcde" kita putar jadi "edcba"
// Ganti huruf vokal menjadi satu huruf setelahnya (A menjadi B, I menjadi H dan seterusnya)


console.log(decryptPassword("WuniWulan Cahyani"))

function decryptPassword(plain_password){
    let encrypted_password = replaceSpace(plain_password)
    encrypted_password = reverseText(encrypted_password)
    encrypted_password = changeVowelToNextLettwe(encrypted_password)

    return encrypted_password
}

function replaceSpace(str_data){
    return str_data.replace(/ /g, "")
}


function reverseText(str_data){
    return str_data.split("").reverse().join("")
}

function changeVowelToNextLettwe(str_data){
    const vowelMaping = {
        'a' : 'b',
        'i' : 'j',
        'u' : 'v',
        'e' : 'f',
        'o' : 'p',
        'A' : 'B',
        'I' : 'J',
        'U' : 'V',
        'E' : 'F',
        'O' : 'P',
    }
    
    let result = ""
    for (let i = 0; i < str_data.length; i++) {
        const huruf = str_data[i]
        if (vowelMaping[huruf]) {
            result += vowelMaping[huruf]
        } else {
            result += huruf
        }
    }

    return result
}