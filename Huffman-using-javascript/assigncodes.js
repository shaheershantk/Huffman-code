var codes={}
function assignCodes(node,pat)
{
        if (typeof (node) == typeof '')
        {
                codes[node]=pat;
        }
        else
        {
                assignCodes(node[0],pat+'0');
                assignCodes(node[1],pat+'1');
        }
  return codes;
}
console.log(assignCodes(['d',[['c','a'],'b']],pat=''));
