// Date Objects in JavaScript

const d = new Date();

// Number: indexing starts from 0
// String: indexing starts from 1

// console.log(date.getFullYear(), date.getMonth(), date.getDate())
// console.log(date.toDateString())
// console.log(date.toString())
// console.log(date.toISOString())

// console.log(typeof d)
// console.log(d)
// console.log(d.getDate())
// console.log(d.getDay())
// console.log(d.getMonth())
// console.log(d.getFullYear())
// console.log(d.getSeconds())
// console.log(d.getMilliseconds())
// console.log(d.getMinutes())
// console.log(d.getTime())
// const now=Date.now()
// console.log(now)


// const date=new Date('2022-01-01T10:10:25')
//const date=new Date('2022-01-01') // in string date index start from 1, means 1 means monday or january
//console.log(date.toDateString())

// in case of number date follow 0 based indexing
// const date=new Date(2024,5,30)
// console.log(date.toDateString())

// setting date

// const dt=new Date()
// dt.setDate(20)
// dt.setFullYear(2023)
// dt.setMonth(1)
// console.log(dt)

// const date1=new Date()
// const date2=new Date("2025-04-21") //returns difference in milliseconds
// console.log(date2-date1)
// console.log(date2>date1)

// countdown timer for upcoming olympics
// Days , hours , minutes , seconds

const date1=new Date()
const date2=new Date("2028-07-14T00:00:00")

const date=date2-date1
const days=Math.floor(date/(1000*60*60*24))
const hour=Math.floor(date/(1000*60*60)%24)
const minutes=Math.floor(date/(1000*60)%60)
const seconds=Math.floor(date/1000%60)

console.log(days,hour,minutes,seconds)
// setInterval(()=>{
//   alert(`Days : ${days} , Hours : ${hour} , Minutes : ${minutes} , Seconds : ${seconds}`)
// },1000)
console.log(`Olympics CountDownTime: Days:${days} hour:${hour} minute:${minutes} second:${seconds}`);