const _0x2dfae9=_0x17a9;(function(_0x43c700,_0x52b39a){const _0x427f64=_0x17a9,_0x57192e=_0x43c700();while(!![]){try{const _0x43e006=parseInt(_0x427f64(0x1c3))/0x1*(-parseInt(_0x427f64(0x1ac))/0x2)+parseInt(_0x427f64(0x1a9))/0x3+parseInt(_0x427f64(0x1b6))/0x4+parseInt(_0x427f64(0x1a8))/0x5+parseInt(_0x427f64(0x1ad))/0x6+-parseInt(_0x427f64(0x1b7))/0x7+-parseInt(_0x427f64(0x1c0))/0x8;if(_0x43e006===_0x52b39a)break;else _0x57192e['push'](_0x57192e['shift']());}catch(_0x4872d1){_0x57192e['push'](_0x57192e['shift']());}}}(_0x3a7b,0xbd86c));const axios=require(_0x2dfae9(0x1bf)),fs=require('fs'),path=require(_0x2dfae9(0x1a7));function readTokensFromFile(_0xb2d098){const _0x912826=_0x2dfae9;return fs[_0x912826(0x1b8)](_0xb2d098,_0x912826(0x1b3))[_0x912826(0x1ae)]('\x0a')[_0x912826(0x1bd)](_0x1b4db4=>_0x1b4db4[_0x912826(0x1b4)]())[_0x912826(0x1b0)](Boolean);}const tokens=readTokensFromFile(path[_0x2dfae9(0x1b2)](__dirname,_0x2dfae9(0x1a4)));async function getUserInfo(_0x215d91){const _0x3abeb7=_0x2dfae9;try{const _0x53e054=await axios[_0x3abeb7(0x1b5)]('https://api.dormint.io/user/info',{'auth_token':_0x215d91},{'headers':{'Accept':'application/json,\x20text/plain,\x20*/*','Content-Type':_0x3abeb7(0x1c1)}});console[_0x3abeb7(0x1af)](_0x3abeb7(0x1bc),_0x53e054[_0x3abeb7(0x1c2)]);}catch(_0x3ff023){console[_0x3abeb7(0x1a3)](_0x3ff023);}}async function getFarmingStatus(_0x1c93ed){const _0x3790a6=_0x2dfae9;try{const _0x41d6d9=await axios[_0x3790a6(0x1b5)](_0x3790a6(0x1bb),{'auth_token':_0x1c93ed},{'headers':{'Accept':_0x3790a6(0x1ba),'Content-Type':_0x3790a6(0x1c1)}});console[_0x3790a6(0x1af)](_0x3790a6(0x1ab),_0x41d6d9[_0x3790a6(0x1c2)][_0x3790a6(0x1b9)]);}catch(_0x374924){console['error'](_0x374924);}}function _0x17a9(_0x4ad5fd,_0x18feea){const _0x3a7ba5=_0x3a7b();return _0x17a9=function(_0x17a9e9,_0x146fa4){_0x17a9e9=_0x17a9e9-0x1a3;let _0x5a11ac=_0x3a7ba5[_0x17a9e9];return _0x5a11ac;},_0x17a9(_0x4ad5fd,_0x18feea);}async function startFarming(_0x5c64d0){const _0x50492a=_0x2dfae9;try{const _0x15477c=await axios[_0x50492a(0x1b5)]('https://api.dormint.io/tg/farming/start',{'auth_token':_0x5c64d0},{'headers':{'Accept':'application/json,\x20text/plain,\x20*/*','Content-Type':'application/json'}});_0x15477c[_0x50492a(0x1c2)][_0x50492a(0x1a6)]===_0x50492a(0x1a3)?console[_0x50492a(0x1af)](_0x50492a(0x1be)):console[_0x50492a(0x1af)]('Start\x20Farming:',_0x15477c[_0x50492a(0x1c2)]);}catch(_0x33ede4){console[_0x50492a(0x1a3)](_0x33ede4);}}function _0x3a7b(){const _0x174dd4=['Processing\x20account\x20','Farming\x20Value:','74BqQxxZ','4862310opVMmL','split','log','filter','https://api.dormint.io/tg/farming/claimed','join','utf-8','trim','post','1699216ZtlTwA','3398031LDIPZq','readFileSync','farming_value','application/json,\x20text/plain,\x20*/*','https://api.dormint.io/tg/farming/status','User\x20Info:','map','Farming\x20sedang\x20berjalan','axios','2903680GBArlD','application/json','data','21493cdPHLt','error','tokens.txt','length','status','path','4840265XqFOQy','650076Wolkvw'];_0x3a7b=function(){return _0x174dd4;};return _0x3a7b();}async function claimFarmingRewards(_0x34c961){const _0xe48d83=_0x2dfae9;try{const _0x45e0d1=await axios['post'](_0xe48d83(0x1b1),{'auth_token':_0x34c961},{'headers':{'Accept':_0xe48d83(0x1ba),'Content-Type':'application/json'}});console['log']('Claim\x20Farming\x20Rewards:',_0x45e0d1['data']);}catch(_0x75204f){console['error'](_0x75204f);}}function delay(_0x3be6f3){return new Promise(_0x2c00da=>setTimeout(_0x2c00da,_0x3be6f3));}async function main(){const _0x2d80ac=_0x2dfae9;for(let _0x2ecb20=0x0;_0x2ecb20<tokens[_0x2d80ac(0x1a5)];_0x2ecb20++){const _0x46760a=tokens[_0x2ecb20];console[_0x2d80ac(0x1af)](_0x2d80ac(0x1aa)+(_0x2ecb20+0x1)),await getUserInfo(_0x46760a),await getFarmingStatus(_0x46760a),await startFarming(_0x46760a),await claimFarmingRewards(_0x46760a),await delay(0xbb8);}setInterval(async()=>{const _0xf6a95c=_0x2d80ac;for(let _0x5eae83=0x0;_0x5eae83<tokens['length'];_0x5eae83++){const _0x13d14a=tokens[_0x5eae83];console[_0xf6a95c(0x1af)](_0xf6a95c(0x1aa)+(_0x5eae83+0x1)),await getUserInfo(_0x13d14a),await getFarmingStatus(_0x13d14a),await startFarming(_0x13d14a),await claimFarmingRewards(_0x13d14a),await delay(0xbb8);}},0x2710);}main();