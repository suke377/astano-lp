import { identity, paymentTerms, counselingTerms, cancellationTerms } from './serviceTerms';
export const LINE_URL = 'https://lin.ee/Pryz2Gq';
export const enrollmentFee = 11000;
export const plans = [
 {id:'light',name:'ライト',months:4,price:120000,recommended:false,subtitle:'食事から、習慣を整えたい方へ。',features:['管理栄養士による食事サポート','毎日の食事フィードバック','食事に関するチャット相談','会員サイト利用'],note:'Zoomセッションは含まれません。'},
 {id:'standard',name:'スタンダード',months:4,price:198000,recommended:true,subtitle:'食事も運動も、一緒に進めたい方へ。',features:['週1回45分のZoomセッション／全16回','食事・運動・生活習慣の個別サポート','LINE相談','会員サイト利用'],note:'毎日の食事フィードバックは含まれません。'},
 {id:'premium',name:'プレミアム',months:6,price:340000,recommended:false,subtitle:'時間をかけて、丁寧に取り組みたい方へ。',features:['週1回45分のZoomセッション／全24回','毎日の食事フィードバック','食事・運動・生活習慣の個別サポート','LINE相談','会員サイト利用'],note:'詳しい内容は無料カウンセリングでご案内します。'}
];
export const standardOffer = Math.round(plans[1].price * .9);
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
