const names = {
    token : 'woof-user-token',
    id : 'woof-user-id'
}

let getItem = (name)=>{
    let item = localStorage.getItem(names[name])
    return item
}

let setItem = (name, value)=>{
    localStorage.setItem(names[name], value)
}

let removeItem = (name, value)=>{
    localStorage.removeItem(names[name], value)
}

export default {}
export { setItem, getItem, removeItem }