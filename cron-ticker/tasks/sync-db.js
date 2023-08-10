let times = 1

const timing = '1-59/5 * * * * *'

const syncDB = ()=>{
    console.log('running every second', times++)
    return times
}

const task = [timing, syncDB]

export default task