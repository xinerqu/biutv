let body = JSON.parse($response.body)
delete body.code;
delete body.msg;
delete body.limit;
delete body.pagecount;
delete body.total;
delete body.list;
delete body.vod_id;
$done({body: JSON.stringify(body)});
