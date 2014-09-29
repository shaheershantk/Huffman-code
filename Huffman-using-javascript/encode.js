codes={}
function encode(str)
{
	var output=''
	for(var i=0;i<str.length;i++)
	{
		var ch=str.charAt(i)
		output=output+codes[ch]
	}
	return output;
}
codes={'d':0,'a':101,'b':100}
console.log(encode('aaddb'))

