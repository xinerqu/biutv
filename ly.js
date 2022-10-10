let body = JSON.parse($response.body)
if($request.url.indexOf(wd)!=-1){
delete body.code
}
$done({body: JSON.stringify(body)});
