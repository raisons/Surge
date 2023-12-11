let body = JSON.parse($response.body)
body.Result.vipType = 3
body.Result.isVIP = true
body = JSON.stringify(body)
$done({body})