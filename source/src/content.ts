import { identity, paymentTerms, counselingTerms, cancellationTerms } from './serviceTerms';
export const LINE_URL = 'https://lin.ee/Pryz2Gq';
export const enrollmentFee = 11000;
export const commonPlanFeatures = ['LINEチャット相談対応','会員サイト「あすたの」の利用'];
export const plans = [
 {id:'food',name:'食事改善',months:3,price:60000,zoomSessions:8,recommended:false,subtitle:'食事から、習慣を整えたい方へ。',zoomSummary:'15分Zoom／全8回',schedule:'初月は週1回（4回）。2・3か月目は隔週（各2回）。',features:['15分のZoomサポート／全8回',...commonPlanFeatures],note:'初月は週1回（4回）、2・3か月目は隔週（各2回）。'},
 {id:'exercise',name:'運動改善',months:3,price:98000,zoomSessions:12,recommended:false,subtitle:'自分に合った運動を、習慣にしたい方へ。',zoomSummary:'30分Zoom／週1回・全12回',schedule:'30分のZoomを週1回、全12回実施します。',features:['週1回30分のZoomサポート／全12回',...commonPlanFeatures],note:'現在の体力や運動経験に合わせてサポートします。'},
 {id:'total',name:'トータル',months:3,price:128000,zoomSessions:12,recommended:false,subtitle:'食事も運動も、まとめて整えたい方へ。',zoomSummary:'30分・45分Zoom／週1回・全12回',schedule:'初月は45分Zoomを週1回。2・3か月目は週1回、30分と45分を交互に実施します（各時間は隔週）。',features:['週1回のZoomサポート／全12回',...commonPlanFeatures],note:'初月は45分。2・3か月目は30分と45分を週ごとに交互に実施。'},
 {id:'premium',name:'プレミアム',months:4,price:178000,zoomSessions:16,recommended:false,subtitle:'時間をかけて、丁寧に取り組みたい方へ。',zoomSummary:'30分・45分Zoom／週1回・全16回',schedule:'初月は45分Zoomを週1回。2〜4か月目は週1回、30分と45分を交互に実施します（各時間は隔週）。',features:['週1回のZoomサポート／全16回',...commonPlanFeatures],note:'初月は45分。2〜4か月目は30分と45分を週ごとに交互に実施。'}
];
export const planScheduleText = plans.map(p=>`${p.name}プラン：${p.months}か月、${p.zoomSummary}。${p.schedule}`).join('\n');
export const yen = (value:number) => value.toLocaleString('ja-JP');
export const faqs = [
 ['運動が苦手でも参加できますか？','はい。現在の体力や運動経験に合わせて、無理のない方法から始められるようサポートします。'],
 ['厳しい食事制限はありますか？','極端に食事を減らしたり、特定の食品を一律に禁止したりすることを基本方針とはしていません。生活習慣や目標に合わせて食事内容を調整します。'],
 ['忙しくても続けられますか？','仕事や家事・育児などの生活リズムを考慮し、無理なく取り組める方法を一緒に考えます。'],
 ['無理な勧誘はありませんか？',counselingTerms.proposal+' '+counselingTerms.refusal],
 ['途中で解約することはできますか？',cancellationTerms.before+' '+cancellationTerms.after+' '+cancellationTerms.enrollment+' '+cancellationTerms.timing+' '+cancellationTerms.note+' 病気・けが・妊娠・介護などの休止は個別相談できます。'],
 ['支払い方法は何がありますか？',paymentTerms.method+' 分割金額と各支払期限は契約書に明記します。初回入金の確認後、クーリング・オフが適用される場合は原則として法定期間経過後に開始します。']
];
export const assets = {
 hero:{file:'hero-approved.png',label:'ダイエット伴走サポート あすたの。今日よりも、楽しい明日へ。体型を隠す毎日から、自分らしく楽しむ毎日へ。初めてでも、何度目でも。あなたに合ったダイエットを、一緒に。食事・運動・生活をサポート。Zoom60分・個別アドバイスPDF付き。',width:1199,height:1312},
 member:{file:'member-site.png',label:'あすたの会員サイト紹介：食事写真の記録、AIによる栄養推定、運動解説動画、グラフでの振り返りの実際の画面',width:1199,height:1312},
 voiceC:{file:'voice-c.png',label:'Cさん、40代女性・営業職。4か月で体重−6.3kg、ウエスト−6.5cm。対面トレーニング等の過去事例。',width:1536,height:1024},
 voiceO:{file:'voice-o.png',label:'Oさん、40代女性・看護師。4か月で体重−7.6kg、ウエスト−8cm。対面トレーニング等の過去事例。',width:1536,height:1024},
 beforeAfter:{file:'before-after-am.png',label:'以前のサポートプログラムに参加されたA様・M様の承認済み結合Before／After画像。成果には個人差があります。',width:1536,height:1024},
 miya:{file:'miya.jpg',label:`${identity.role}${identity.trainer}の本人プロフィール写真`,width:3416,height:5120},
 marui:{file:'marui-profile.png',label:'管理栄養士・丸井遥さんの写真、資格、経歴、紹介文を含む承認済みプロフィール資料',width:1536,height:1024}
} as const;
