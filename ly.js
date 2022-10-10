var obj = JSON.parse($response.body);
delete obj.data.code;
delete obj.data.msg;
delete obj.data.limit;
delete obj.data.pagecount;
delete obj.data. total;
delete obj.data.list;
delete obj.data.vod_id;
$done({body: JSON.stringify(obj)});
