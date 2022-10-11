let body = JSON.parse($response.body)
delete body.code
$done({body: JSON.stringify(body)});
