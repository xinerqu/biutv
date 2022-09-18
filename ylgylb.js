let obj = JSON.parse($response.body);

obj.data["daily_count"]= 5201314;
obj.data["challenge"]= 13145200;

$done({body: JSON.stringify(obj)});
