function buildTree(tuples)
{
	while (tuples.length>1)
	{
		leastTwo = tuples.slice(0,2)
		theRest = tuples.slice(2)
		combFreq =[leastTwo[0][0] + leastTwo[1][0]]
		tuples1 = [combFreq.concat(leastTwo)]
		tuples = theRest.concat(tuples1)
		tuples.sort()
	}
	return tuples
}
console.log(buildTree([[1, 'b'], [1, 'd'], [1, 'g'], [2, 'c'], [2, 'f'], [3, 'a'], [5, 'e']] ))
