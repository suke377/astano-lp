import { useState, type ReactNode } from 'react';
import { assets, LINE_URL } from './content';
export function CTA({children='60分無料カウンセリングはこちら',compact=false}:{children?:ReactNode;compact?:boolean}) {
 return <a className={`cta ${compact?'compact':''}`} href={LINE_URL} target="_blank" rel="noopener noreferrer">{children}<span aria-hidden="true">↗</span><span className="sr-only">（公式LINEを新しいタブで開きます）</span></a>;
}
export function Media({name,priority=false}:{name:keyof typeof assets;priority?:boolean}) {
 const item=assets[name]; const [failed,setFailed]=useState(false);
 const exists=true;
 return <figure className={`media media-${name} ${!exists||failed?'missing':''}`}>
 {exists&&!failed?<img src={`${import.meta.env.BASE_URL}assets/${item.file}`} alt={item.label} width={item.width} height={item.height} loading={priority?'eager':'lazy'} fetchPriority={priority?'high':'auto'} onError={()=>setFailed(true)}/>:<div className="image-placeholder" style={{aspectRatio:`${item.width} / ${item.height}`}}><span>IMAGE / 準備中</span><p>{item.label}</p><small>承認済みの元画像を配置します</small></div>}
 </figure>;
}
export function Heading({number,label,children}:{number:string;label:string;children:ReactNode}) {
 return <div className="section-heading"><p className="eyebrow"><span>{number}</span> {label}</p><h2>{children}</h2></div>;
}
export function Header({home=false}:{home?:boolean}) {
 return <header className="header shell"><a href="./index.html" className="wordmark" aria-label="あすたの トップ">あすたの<span>今日よりも、楽しい明日へ。</span></a><nav aria-label="メインナビゲーション">{home?<><a href="#support">サポート</a><a href="#plans">料金</a><a href="#counseling">無料相談</a></>:<a href="./index.html">紹介ページへ戻る ↗</a>}</nav></header>;
}
export function Footer() {
 return <footer className="footer shell"><div><p className="wordmark">あすたの</p><p className="small">今日よりも、楽しい明日へ。</p></div><nav aria-label="フッターナビゲーション"><a href="./commerce.html">特定商取引法に基づく表記</a><a href="./privacy.html">プライバシーポリシー</a><a href="./terms.html">利用規約</a><a href={LINE_URL} target="_blank" rel="noopener noreferrer">公式LINE ↗</a></nav><small>© あすたの</small></footer>;
}
