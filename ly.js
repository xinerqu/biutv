let obj = JSON.parse($response.body);
delete obj.code;
delete obj.msg;
delete obj.limit;
delete obj.pagecount;
delete obj.total;
delete obj.list;
delete obj.vod_id;
$done({body: JSON.stringify(obj)});
