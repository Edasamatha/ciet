var url = requires('url');
var adr ='https://www.facebook.com?year=2024&month=August';
var q = url.parse(adr,true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
var qdata = q.qurey;
console.log(qdata.month);