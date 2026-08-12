const str = "java script is fun";

function sortWords(data){
    const dataAsArray  = data.split(" ");

    dataAsArray.sort((a, b) => {
        return a.length - b.length;
    });

    return dataAsArray.join(" ").split(" ");
}

console.log(sortWords(str)); // ["fun", "is", "script", "java"]



