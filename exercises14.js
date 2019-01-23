/*
Logic Challenge - Password Generator
Problem

Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

    Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

    Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

    Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

    Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

NOTE:

Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga
*/

function changeVocals (str) {
    //code di sini
    var change = '';
    var vokal = {
        a: 'b', i: 'j', u: 'v', e: 'f', o: 'p',
        A: 'B', I: 'J', U: 'V', E: 'F', O: 'P'
    }
    
    for(var i = 0; i < str.length; i++) {
        if(vokal[str[i]]) {
            change += vokal[str[i]];
        } else {
            change += str[i];
        }
    }
    return change;
  }
  
  function reverseWord (str) {
    //code di sini
    var reversed = '';
    for(var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var set = '';
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(var i = 0; i < str.length; i++) {
        if(str[i] == ' ') {
            set += str[i];
        }
        for(var j = 0; j < lowerCase.length; j++) {
            if(str[i] == lowerCase[j]) {
                set += upperCase[j];
            } else if(str[i] == upperCase[j]) {
                set += lowerCase[j];
            }
        }
    }
    return set;
  }
  
  function removeSpaces (str) {
    //code di sini
    var removeSpaces = '';
    for(var i = 0; i < str.length; i++) {
        if(str[i] != ' ') {
            removeSpaces += str[i];
        }
    }
    return removeSpaces;
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length <= 4) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }
    var change = changeVocals(name);
    var reversed = reverseWord(change);
    var set = setLowerUpperCase(reversed);
    var remove = removeSpaces(set);
    return remove;
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'