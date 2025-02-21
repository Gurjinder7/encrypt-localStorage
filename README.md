# Encrypt-localstorage

### Features:

* Helps you put a layer of privacy to the data that is stored on local storage.
* **Save data to local storage in a ciphertext** :blush:
* **Use plain text in the codebase for your convenience** :sunglasses:
* The encryption is not a complicated one but still is better than simply saving plain text. 
* Light weight package

#### Note: Use only with simple key-value pairs. Saving objects with it can potentially cause issues in values.

### How to install:
```npm i @gurjinder7/encrypt-localstorage```

### How to use:

* Import the package into your application as usual
* Use the functions for different features:
  * ```setLocalStorage(key, value)``` - saves your key-pair to local storage as a ciphertext
  * ```getLocalStorage(key)``` - returns the value of the key in plain text
  * ```deleteLocalStorageKey(key)``` - to delete the key from local storage
  * ```clearLocalStorage()``` - clears the local storage

### Example:
``` 
import { setLocalStorage, getLocalStorage } from 'protect-localstorage';

setlocalStorage('name', 'gurjinder'); -- saves the screenshot to the local storage

const name = getLocalStorage('name') -- returns 'gurjinder'


```

###
![alt text](<image.png>)