// Local, static review snapshots. Not the production React build.
import fs from 'node:fs/promises';
import {createServer} from 'vite';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
const server=await createServer({base:'/',server:{middlewareMode:true,hmr:false,ws:false},appType:'custom'});
try {
 const {default:App}=await server.ssrLoadModule('/src/App.tsx');
 const {legalPages}=await server.ssrLoadModule('/src/legal.ts');
 const {Header,Footer}=await server.ssrLoadModule('/src/components.tsx');
 const css=await fs.readFile('src/style.css','utf8');
 const page=(title,body)=>`<!doctype html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex, nofollow"><title>${title}｜あすたの</title><style>${css}</style></head><body>${body}</body></html>`;
 await fs.mkdir('preview',{recursive:true});
 const main=renderToStaticMarkup(React.createElement(App,{review:true}));
 await fs.writeFile('preview/index.html',page('紹介ページ・確認版',main.replaceAll('src="/assets/','src="../public/assets/').replaceAll('href="/assets/','href="../public/assets/')));
 for (const [file,legal] of Object.entries(legalPages)){
 const body=React.createElement(React.Fragment,null,React.createElement(Header),React.createElement('main',{className:'legal shell'},React.createElement('h1',null,legal.title),React.createElement('aside',{className:'legal-warning'},'公開前の確認用ドラフトです。未確定事項は公開前に要確認。'),...legal.sections.map(s=>React.createElement('section',{key:s.title},React.createElement('h2',null,s.title),React.createElement('p',null,s.text)))),React.createElement(Footer));
 await fs.writeFile(`preview/${file}`,page(legal.title,renderToStaticMarkup(body)));
 }
 await fs.writeFile('確認用.html',page('紹介ページ・確認版',main.replaceAll('src="/assets/','src="public/assets/').replaceAll('href="/assets/','href="public/assets/').replaceAll('href="./index.html"','href="./確認用.html"').replace(/href="\.\/(commerce|privacy|terms)\.html"/g,'href="./preview/$1.html"')));
 console.log('確認用.html と preview/ の静的確認版を更新しました');
} finally {await server.close();}
