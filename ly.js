let body = JSON.parse($response.body)
if($request.url.indexOf(wd)!=-1){
delete body.code;
delete body.msg;
delete body.limit;
delete body.pagecount;
delete body.total;
delete body.list;
delete body.vod_id;
}
$done({body: JSON.stringify(body)});
