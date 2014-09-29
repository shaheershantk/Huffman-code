
function getfreq(str)
{
var freq={}
for(var i=0;i<str.length;i++)
{
var chara=str.charAt(i)
if (freq[chara])
{
freq[chara]++
}
else
{
freq[chara]=1
}
}
return freq
}
console.log(getfreq('aabbccccdddeee'))



