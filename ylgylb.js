let obj = JSON.parse($response.body);

obj.data["daily_count"]= 1e+300;
obj.data["challenge"]= 1e+300;

$done({body: JSON.stringify(obj)});
