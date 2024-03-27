function reverse(s) {
    return s.split('').reverse().join('');
}

// Exemple d'utilisation :
console.log(reverse("hello")); // Output: "olleh"
/////////////////////////////////////////////////////////////
function count(s) {
    return s.length;
}

// Exemple d'utilisation :
console.log(count("hello")); // Output: 5
/////////////////////////////////////////////////////////////
function Words(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Exemple d'utilisation :
console.log(Words("hello world")); // Output: "Hello World"
/////////////////////////////////////////////////////////////////
const arr = [3, 7, 2, 9, 5];
//////////////////////////////////////////////////////////////////
function findMax(array) {
    return Math.max(...array);
}

function findMin(array) {
    return Math.min(...array);
}

// Exemple d'utilisation :

console.log(findMax(arr)); // Output: 9
console.log(findMin(arr)); // Output: 2
////////////////////////////////////////////////////////////////////////
function sumArray(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
}
// Exemple d'utilisation :
console.log(sumArray(arr)); // Output: 15
/////////////////////////////////////////////////////////////////////////
function filterArray(array, condition) {
    return array.filter(condition);
}
// Exemple d'utilisation :
const condition = x => x % 2 === 0; // Filtrer les nombres pairs
console.log(filterArray(arr, condition)); // Output: [2]
/////////////////////////////////////////////////////////////////////////
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
// Exemple d'utilisation :
console.log(factorial(5)); // Output: 120
////////////////////////////////////////////////////////////////////////
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Exemple d'utilisation :
console.log(isPrime(17)); // Output: true
console.log(isPrime(25)); // Output: false
//////////////////////////////////////////////////////////////////////////
function fibonacciSequence(n) {
    const fibSequence = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    return fibSequence;
}

// Exemple d'utilisation :
console.log(fibonacciSequence(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

