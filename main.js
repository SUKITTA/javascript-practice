console.log('Hello World!')
console.log(20 == '20')
console.log(20 === '20')
console.log(20 === 20)

let me = 'luv u' //can assign new val
// me = 'tu tu'

const you = 'dont talk to me' // fix 
// you = 'di di'

console.log(me)
console.log(you)

const add = (a, b) => {
    return a + b
}
console.log(add(2, 3))

const numbers = [20, 40, 60]
const anythingJingleBell = ['abc', 20, 3.14, true]
//เพิ่ม push , ลบตัวท้าย pop , splice(index, จำนวน) ลบแบบเลือก

console.log(numbers.splice(2, 1))
console.log(numbers)
console.log(anythingJingleBell.pop())
console.log(anythingJingleBell)

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
for (const i in anythingJingleBell) {
    console.log(anythingJingleBell[i])
}

for (const n of numbers) {
    console.log(n)
}

// numbers.forEach(n => console.log(n))

// numbers = [1, 2, 3, 4]
// numbers.map(n => n * 10)

// numbers = [1, 3, 5, 7, 9]
// numbers.filter(n => n != 5)

const a = "jo"
const b = 'jing'
const c = `Helo`


const student = [
    {
        id: 1234,
        name: 'jing'
    },
    {
        id: 2345,
        name: 'jo'
    }
]
console.log(student.id)
console.log(student['id'])
console.log(student.nickname)

