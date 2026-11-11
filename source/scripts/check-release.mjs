import fs from 'node:fs';
const flags=JSON.parse(fs.readFileSync(new URL('../release-status.json',import.meta.url),'utf8'));
const required=['hero-approved.png','member-site.png','voice-c.png','voice-o.png','before-after-am.png','miya.jpg','marui-profile.png'];
const missing=required.filter(f=>!fs.existsSync(new URL('../public/assets/'+f,import.meta.url)));
const pending=Object.entries(flags).filter(([,v])=>v!==true).map(([k])=>k);
const legal=fs.readFileSync(new URL('../src/legal.ts',import.meta.url),'utf8');
const draftMarkers=['公開前に要確認','未確定','対応予定','確認中','ドラフト'];
const remaining=draftMarkers.filter(word=>legal.includes(word));
if(remaining.length) console.error('公開用本文に未確定表示があります: '+remaining.join(', '));
if(missing.length||pending.length||remaining.length){console.error('公開準備未完了。\n未配置画像: '+missing.join(', ')+'\n未確認: '+pending.join(', '));process.exit(1);}
console.log('チェック項目は確認済みです。このコマンド自体は公開しません。公開前にユーザーの明示的承認を確認してください。');
