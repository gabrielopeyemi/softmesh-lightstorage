export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

//Add to LocalStorage
export const addToStore = (key: string, data: any, status: any) => {
  if ('development' === process.env.NODE_ENV) {
      console.log('boop');
      //check if user wants to encode (if encode is true)
    if (status) {
          //this code encode the const encodedStringBtoA
          const encodedStringBtoA = btoa(key);
          // console.log({encode: encodedStringBtoA})
          //add the localstorage after encoded
          return localStorage.setItem(encodedStringBtoA, JSON.stringify(data));
      } else return localStorage.setItem(key, JSON.stringify(data)); // add to localstorage without encoding
      
  }
} // adding to localstorage ends