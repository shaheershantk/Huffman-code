function sortdict(freq)
{

    var sorted = [];
    for(var key in freq)
	 {
       		 sorted[sorted.length] = key;
   	 }
    sorted.sort();

    var newDict = {};
    for(var i = 0; i < sorted.length; i++)
	 {
       		 newDict[sorted[i]] = freq[sorted[i]];
   	 }

    return newDict;
}
console.log(sortdict({'d':5,'c':4,'a':4,'b':3}))

