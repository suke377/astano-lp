import fs from 'node:fs';
const read=p=>fs.readFileSync(new URL('../'+p,import.meta.url),'utf8');
const status=JSON.parse(read('release-status.json'));
const required=['designApproved','userApproved','imagesApproved','paymentConfirmed','browserQaPassed','siteBaseConfirmed','businessDisclosureReviewed'];
const pending=required.filter(k=>status[k]!==true);
for(const file of ['index.html','commerce.html','privacy.html','terms.html']) if(!/name="robots" content="noindex, nofollow"/.test(read(file))) pending.push(file+':noindex');
if(!read('src/legal.ts').includes('申込みの意思決定に先立って十分な時間的余裕')) pending.push('事業者情報開示');
if(!read('src/main.tsx').includes('有料契約の受付は、必要な法令確認・契約手続きの整備後')) pending.push('契約受付状況の明示');
if(pending.length){console.error('紹介LPの公開確認未完了: '+pending.join(', '));process.exit(1);}
console.log('紹介LPの公開確認を通過。法的適合性・有料契約受付の承認を意味しません。契約受付前の確認事項は別管理です。');
