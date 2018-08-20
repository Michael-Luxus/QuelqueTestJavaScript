//fonction my_max ──────────────────────────────────────────────────────────────────────;
function my_max(array) {
    console.log("le nombre maximum:")
    console.log(Math.max(...array));
};
let arr = [1, 2, 3];
my_max(arr)

//fonction vowel_count ──────────────────────────────────────────────────────────────────────;
//function countVowels(str) {
//    var m = str.match(/[aeiou]/gi);
//    console.log("le nombre de voyel:");
//    console.log(m === null ? 0 : m.length);
//};
//ou ───────────────────────────────────────────────────────────────
function countVowels(str) {
    console.log("le nombre de voyel:");
    console.log(str.match(/[aeiouy]/gi).length);
};

let phr = "Bonjour"
countVowels(phr)

//fonction reverse ──────────────────────────────────────────────────────────────────────;

function reverse(mot) {
    console.log([...mot].reverse().join(''))
}
tal = "Tal is the best"
reverse(tal)


