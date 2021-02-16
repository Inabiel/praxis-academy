//Contoh Currying, invoking multiple function into one single function call
const add = (a, b) => {
    c = a + b
    return () => {
        return c + c
    }
}

console.log(add(10, 20)())