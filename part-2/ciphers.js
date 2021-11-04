const numKey = {
    a: 2,
    b: 6,
    c: 76,
    d: 23,
    e: 12,
    f: 13,
    g: 14,
    h: 9,
    i: 1,
    j: 3,
    k: 56,
    l: 43,
    m: 25,
    n: 78,
    o: 90,
    p: 11,
    q: 21,
    r: 34,
    s: 32,
    t: 29,
    u: 80,
    v: 76,
    w: 54,
    x: 61,
    y: 26,
    z: 19
}

const encryptMessage = (message) => {
    message = message.toLowerCase().split('')
    for(let i = 0; i < message.length; i++){
        
    }
    return message.join('*')
}
console.log(encryptMessage('hello'))