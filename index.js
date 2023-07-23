function isObject(collection){
    let array = collection 
    if(typeof(collection)==='object'){
        array = Object.values(collection)
        return array
    }
    return array
}
function myEach(collection, callback){
    const array = isObject(collection)
    array.forEach(element => callback(element))
    return collection
}

function myMap(collection, callback){
    const array = isObject(collection)
    for(let i=0; i<array.length; i++){
        array[i] = callback(array[i])
    }
    return array
}

function myReduce(collection, callback, acc){
    const array = isObject(collection)
    let accumulator = acc
    if(acc===undefined){
        accumulator = array[0]
        for(let i=1; i<array.length; i++){
            accumulator = callback(accumulator, array[i], collection)
        }
        return accumulator
    }
    for(let i=0; i<array.length; i++){
        accumulator = callback(accumulator, array[i], collection)
    }
    return accumulator
}

function myFind(collection, predicate){
    const array = isObject(collection)
    for(let i=0; i<array.length; i++){
        if(predicate(array[i])){
            return array[i]
        }
    }
    return undefined
}

function myFilter(collection, predicate){
    const array = isObject(collection)
    const trueValues = []
    for(let i=0; i<array.length; i++){
        if(predicate(array[i])){
            trueValues.push(array[i])
        }
    }
    return trueValues
}

function mySize(collection){
    const array = isObject(collection)
    return array.length
}

function myFirst(array, n){
    if(n===undefined){
        return array[0]
    } else {
        const newArray = []
        for(let i=0; i<n; i++){
            newArray.push(array[i])
        }
        return newArray
    }
}

function myLast(array, n){
    const newArray = []
    if(n===undefined){
        return array[array.length-1]
    } else {
        
        for(let i=array.length-n; i<array.length; i++){
            newArray.push(array[i])
        }
        return newArray
    }
    
}

function myKeys(object){
    return Object.keys(object)
}

function myValues(object){
    return Object.values(object)
}
