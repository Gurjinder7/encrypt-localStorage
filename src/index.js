export const setLocalStorage = (key, value) => {
    let encryptKey = ''
    let encryptValue = ''
    
    for (let i = 0; i < key.length; i++) {
        encryptKey += String.fromCharCode(key.charCodeAt(i)+7)
    }
    
    for (let i = 0; i < value.length; i++) {
        encryptValue += String.fromCharCode(value.charCodeAt(i)+7)
    }
    
    localStorage.setItem(encryptKey, encryptValue)
}

export const getLocalStorage = (key) => {

    let encryptKey = ''

    for (let i = 0; i < key.length; i++) {
        encryptKey += String.fromCharCode(key.charCodeAt(i)+7)
    }

    const encryptValue = localStorage.getItem(encryptKey)

    if (!encryptValue) return null

    let plainValue = ''
    for (let i = 0; i < encryptValue.length; i++) {
        plainValue += String.fromCharCode(encryptValue.charCodeAt(i)-7)
    
    } 

    return plainValue

}


export const deleteLocalStorageKey = (key) => {
    let encryptKey = ''

    for (let i = 0; i < key.length; i++) {
        encryptKey += String.fromCharCode(key.charCodeAt(i)+7)
    }

  localStorage.removeItem(encryptKey)
}


export const clearLocalStorage = () => {
    localStorage.clear()
}



