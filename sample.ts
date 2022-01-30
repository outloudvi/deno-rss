// @ts-nocheck

import { cheerio } from 'https://deno.land/x/cheerio@1.0.4/mod.ts'

const c = `<!DOCTYPE html>
<html lang="ja"><head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#"><meta charset="UTF-8"><meta http-equiv="x-ua-compatible" content="ie=edge"><meta name="viewport" content="width=device-width,user-scalable=no"><title>NEWS | 「IDOLY PRIDE」公式サイト</title><meta name="keywords" content="アイドル,IDOLY,PRIDE,IDOLY PRIDE,アイプラ,QualiArts,ミュージックレイン,ストレートエッジ,あいどりーぷらいど,アイドリープライド,くおりあーつ,クオリアーツ,みすみよしき"><meta name="description" content="サイバーエージェントグループとミュージックレイン、ストレートエッジが協力してメディアミックス展開する大型アイドルプロジェクト「IDOLY PRIDE」公式サイト"><meta property="og:type" content="article"><meta property="og:url" content="https://idolypride.jp/news/"><meta property="og:image" content="https://idolypride.jp/shared/img/common/og-image.png"><meta property="og:site_name" content="「IDOLY PRIDE」公式サイト"><meta property="og:locate" content="ja_JP"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="NEWS | 「IDOLY PRIDE」公式サイト"><meta name="twitter:description" content="サイバーエージェントグループとミュージックレイン、ストレートエッジが協力してメディアミックス展開する大型アイドルプロジェクト「IDOLY PRIDE」公式サイト"><meta name="twitter:image:src" content="https://idolypride.jp/shared/img/common/og-image.png"><script>
      (function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
          'gtm.start': new Date().getTime(),
          event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src =
          'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-NXTNLBF');
    </script><script async src="https://www.googletagmanager.com/gtag/js?id=UA-153086979-2"></script><script>
      window.dataLayer = window.dataLayer || [];

      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'UA-153086979-2');
    </script><script type="text/javascript">
      (function() {
        var tagjs = document.createElement("script");
        var s = document.getElementsByTagName("script")[0];
        tagjs.async = true;
        tagjs.src = "//s.yjtag.jp/tag.js#site=urMGyBs";
        s.parentNode.insertBefore(tagjs, s);
      }());
    </script><noscript>
      <iframe src="//b.yjtag.jp/iframe?c=urMGyBs" width="1" height="1" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </noscript><link rel="icon" href="/shared/img/common/favicon.ico"><link rel="apple-touch-icon" sizes="152x152" href="/shared/img/common/apple-touch-icon-152x152.png"><script>
      (function(d) {
        var config = {
            kitId: 'qqa3nyt',
            scriptTimeout: 3000,
            async: true
          },
          h = d.documentElement,
          t = setTimeout(function() {
            h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
          }, config.scriptTimeout),
          tk = d.createElement("script"),
          f = false,
          s = d.getElementsByTagName("script")[0],
          a;
        h.className += " wf-loading";
        tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
        tk.async = true;
        tk.onload = tk.onreadystatechange = function() {
          a = this.readyState;
          if (f || a && a != "complete" && a != "loaded") return;
          f = true;
          clearTimeout(t);
          try {
            Typekit.load(config)
          } catch (e) {}
        };
        s.parentNode.insertBefore(tk, s)
      })(document);
    </script><link href="https://fonts.googleapis.com/css?family=Cormorant+Infant:300&display=swap" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Cormorant:300&display=swap" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=DM+Sans:400,700&display=swap" rel="stylesheet" type="text/css"><link rel="stylesheet" href="/shared/css/base.css?v=2.1"><link rel="stylesheet" href="/shared/css/news.css?v=2.1"></head><body ontouchstart="">
    
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NXTNLBF" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    

    <div id="pagetop"></div>
    <div id="blind"></div>
    <div id="blindLogo" class="blind__logo">
      <p class="blind__logo__inner">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="310" height="188" viewbox="0 0 310 188"><path fill-rule="evenodd" fill="#ffffff" d="M195.4,109.6h-7.2v14.7h6.9c14.1,0,24.7,10.5,24.7,24.5c0,14-10.6,24.6-24.7,24.6h-6.9V188h7.2c21.9,0,39.2-17.5,39.2-39.2S217.4,109.6,195.4,109.6z M137.8,0c-22.2,0-40.1,18-40.1,40.3c0,22.4,17.9,40.4,40.1,40.4s40.2-18,40.2-40.4C178,18,160,0,137.8,0zM137.9,66.1c-14.2,0-25.6-11.5-25.6-25.8c0-14.2,11.4-25.7,25.6-25.7c14.1,0,25.6,11.5,25.6,25.7C163.5,54.6,152,66.1,137.9,66.1zM151,188h14.7v-78.4H151V188z M14.6,1.2H0v78.4h14.6V1.2z M254.7,188h44.5v-14.7h-44.5V188z M254.7,156.2h44.5v-14.7h-44.5V156.2zM254.7,124.3h44.5v-14.7h-44.5V124.3z M129.9,131.7c0-12.3-9.8-22-22.1-22h-40v14.7h40.1c4.1,0,7.3,3.2,7.3,7.4c0,4.1-3.3,7.4-7.3,7.4H81l32.5,48.9h17.6l-22.8-34.3C120.5,153.5,129.9,143.8,129.9,131.7z M27.9,109.6H0v14.7h28c4.2,0,7.4,3.2,7.4,7.4c0,4.1-3.3,7.4-7.4,7.4H0V188h14.6v-34.3h13.3c12.4,0,22.2-9.7,22.2-22C50.1,119.3,40.2,109.6,27.9,109.6zM83.7,40.3c0-21.8-17.3-39.1-39.2-39.1h-7.2v14.7h6.9C58.4,15.9,69,26.3,69,40.3c0,14-10.6,24.6-24.7,24.6h-6.9v14.7h7.2C66.4,79.6,83.7,62.1,83.7,40.3z M67.8,188h14.6v-34.3H67.8V188z M266.8,79.6h14.6V44.3L310,1.2h-17.7L274,28.8L255.7,1.2h-17.6l28.6,43.1V79.6z M212.9,1.2h-14.6v78.4h42.6V64.9h-28V1.2z"></path></svg></p>
    </div>
    <div class="wrapper">
      
      <header class="header"><div class="header__inner">
          <h1 class="header__logo"><a href="/" class="insite">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="110" height="14" viewbox="0 0 110 14"><path fill-rule="evenodd" fill="#ffffff" d="M92.4,0.2h-1.2v2.5h1.2c2.4,0,4.2,1.8,4.2,4.2c0,2.4-1.8,4.3-4.2,4.3h-1.2v2.5h1.2c3.7,0,6.6-3,6.6-6.8C99,3.2,96.1,0.2,92.4,0.2z M23.4,0c-3.8,0-6.8,3.1-6.8,7c0,3.9,3,7,6.8,7s6.8-3.1,6.8-7C30.2,3.1,27.1,0,23.4,0z M23.4,11.5C21,11.5,19,9.5,19,7c0-2.5,1.9-4.5,4.3-4.5c2.4,0,4.3,2,4.3,4.5C27.7,9.5,25.8,11.5,23.4,11.5z M84.9,13.8h2.5V0.2h-2.5V13.8zM0,13.8h2.5V0.2H0V13.8z M102.5,13.8h7.5v-2.5h-7.5V13.8z M102.5,8.3h7.5V5.7h-7.5V8.3z M102.5,0.2v2.5h7.5V0.2H102.5z M81.3,4c0-2.1-1.7-3.8-3.7-3.8h-6.8v2.5h6.8c0.7,0,1.2,0.6,1.2,1.3c0,0.7-0.6,1.3-1.2,1.3H73l5.5,8.5h3l-3.9-5.9C79.7,7.8,81.3,6.1,81.3,4zM64,0.2h-4.7v2.5H64c0.7,0,1.3,0.6,1.3,1.3c0,0.7-0.6,1.3-1.3,1.3h-4.7v8.5h2.5V7.8H64c2.1,0,3.8-1.7,3.8-3.8C67.8,1.9,66.1,0.2,64,0.2z M7.5,0.2H6.3v2.5h1.2c2.4,0,4.2,1.8,4.2,4.2c0,2.4-1.8,4.3-4.2,4.3H6.3v2.5h1.2c3.7,0,6.6-3,6.6-6.8C14.2,3.2,11.3,0.2,7.5,0.2z M70.8,13.8h2.5V7.8h-2.5V13.8z M46.5,5l-3.1-4.8h-3l4.9,7.5v6.1h2.5V7.7l4.9-7.5h-3L46.5,5z M36.1,0.2h-2.5v13.6h7.2v-2.5h-4.7V0.2z"></path></svg></a></h1>
          <p id="headerMenuBtn" class="header__menu"><a href="#"><span class="header__menu__icon"><span class="header__menu__icon__bar1"></span><span class="header__menu__icon__bar2"></span><span class="header__menu__icon__bar3"></span></span><span id="headerMenuText" class="header__menu__text"><span>MENU</span></span></a></p>
          <div id="headerNav" class="header__nav">
            <div id="haederNavCover" class="header__nav__cover"></div>
            <div id="headerNavInner" class="header__nav__inner">
              <ul id="headerNavList" class="header__nav__list"><li><a href="/project/" class="insite"><span>PROJECT</span></a></li>
                <li><a href="/character/" class="insite"><span>CHARACTER</span></a></li>
                <li><a href="https://anime.idolypride.jp/" target="_blank"><span>ANIME</span></a></li>
                <li><a href="/game/" class="insite"><span>GAME</span></a></li>
                <li><a href="/live/" class="insite"><span>LIVE</span></a></li>
                <li><a href="/news/" class="insite"><span>NEWS</span></a></li>
                <li><a href="/movie/" class="insite"><span>MOVIE</span></a></li>
                <li><a href="/store/" class="insite"><span>STORE</span></a></li>
                <li><a href="https://anime.idolypride.jp/music/" target="_blank"><span>MUSIC</span></a></li>
              </ul><div id="headerNavNews" class="header__nav__news">
                <p class="header__nav__news__head">RECENT INFO</p>
                <ul id="headerNavNewsList" class="header__nav__news__list"></ul></div>
            </div>
          </div>
          <p class="header__lyric">
            No one starts from the spotlight.<br>
            They all start as a nobody.<br>
            Only way there is to prove that she is a true idol.
          </p>
        </div>
      </header><article id="news-page" class="container"><div class="pagetitile">
    <div class="pagetitile__inner">
      <h2 class="pagetitile__head">NEWS<span>最新情報</span></h2>
    </div>
  </div>
  
  <nav class="categories"><div class="categories__inner">
      <div class="categories__list">
        <ul><li class="is--current"><a href="/news/" class="noeff">ALL</a></li>
          <li><a href="/news/category/anime/" class="noeff">ANIME</a></li>
          <li><a href="/news/category/game/" class="noeff">GAME</a></li>
          <li><a href="/news/category/event/" class="noeff">EVENT</a></li>
          <li><a href="/news/category/media/" class="noeff">MEDIA</a></li>
          <li><a href="/news/category/others/" class="noeff">OTHERS</a></li>
        </ul></div>
    </div>
  </nav><section class="lists"><div class="lists__inner">
      <div id="listsList" class="lists__list">
        <ul><li><a href="/news/2022/01/25/1845/" class="noeff"><span style="background-image: url('/wp-content/uploads/2022/01/website_project-livegoods-220125.png')" class="lists__list__img"></span><span class="lists__list__specs"><span class="lists__list__specs__date">2022.01.25</span><span class="lists__list__specs__cat">EVENT</span></span><span class="lists__list__text">「LAWSON presents IDOLY PRIDE VENUS STAGE 2022 “奇跡”」グッズ情報公開&事前通販決定</span></a></li>
                    <li><a href="/news/2022/01/25/1831/" class="noeff"><span style="background-image: url('/wp-content/uploads/2022/01/website_project-valentine-220118.png')" class="lists__list__img"></span><span class="lists__list__specs"><span class="lists__list__specs__date">2022.01.25</span><span class="lists__list__specs__cat">OTHERS</span></span><span class="lists__list__text">バレンタイン仕様のケーキとマカロンが発売決定！</span></a></li>
                    <li><a href="/news/2022/01/21/1830/" class="noeff"><span style="background-image: url('/wp-content/uploads/2021/10/website_project-live_news-211125.png')" class="lists__list__img"></span><span class="lists__list__specs"><span class="lists__list__specs__date">2022.01.21</span><span class="lists__list__specs__cat">EVENT</span></span><span class="lists__list__text">LAWSON presents IDOLY PRIDE VENUS STAGE 2022 “奇跡” 一般販売のお知らせ</span></a></li>
                    <li><a href="/news/2022/01/21/1823/" class="noeff"><span style="background-image: url('/wp-content/uploads/2022/01/website_project-dmm-220121.png')" class="lists__list__img"></span><span class="lists__list__specs"><span class="lists__list__specs__date">2022.01.21</span><span class="lists__list__specs__cat">OTHERS</span></span><span class="lists__list__text">DMMスクラッチにてキャラ・ヌーボーデザインのオンラインくじ発売！</span></a></li>
                    <li><a href="/news/2021/12/22/1811/" class="noeff"><span style="background-image: url('/wp-content/uploads/2021/11/211110_marui_icon.png')" class="lists__list__img"></span><span class="lists__list__specs"><span class="lists__list__specs__date">2021.12.22</span><span class="lists__list__specs__cat">OTHERS</span></span><span class="lists__list__text">マルイ・モディ「IDOLY PRIDEポップアップショップ」続報公開</span></a></li>
                    <li><a href="/news/2021/12/21/1809/" class="noeff"><span style="background-image: url('/wp-content/uploads/2021/11/website_project-album-211129.png')" class="lists__list__img"></span><span class="lists__list__specs"><span class="lists__list__specs__date">2021.12.21</span><span class="lists__list__specs__cat">OTHERS</span></span><span class="lists__list__text">IDOLY PRIDE Collection Album [約束] ブックレット誤植のお知らせ</span></a></li>
                    <li><a href="/news/2021/12/20/1802/" class="noeff"><span style="background-image: url('/wp-content/uploads/2021/11/211110_hmv_icon.png')" class="lists__list__img"></span><span class="lists__list__specs"><span class="lists__list__specs__date">2021.12.20</span><span class="lists__list__specs__cat">OTHERS</span></span><span class="lists__list__text">HMVエソラ池袋 POP UPストア CD商品購入特典が決定</span></a></li>
                    <li><a href="/news/2021/12/17/1797/" class="noeff"><span style="background-image: url('/wp-content/uploads/2021/11/211110_hmv_icon.png')" class="lists__list__img"></span><span class="lists__list__specs"><span class="lists__list__specs__date">2021.12.17</span><span class="lists__list__specs__cat">OTHERS</span></span><span class="lists__list__text">HMVエソラ池袋にてライブグッズ先行販売！イベント詳細も公開</span></a></li>
                    <li><a href="/news/2021/11/30/1776/" class="noeff"><span style="background-image: url('/wp-content/uploads/2021/11/クリ部門受賞newsサムネ_02.png')" class="lists__list__img"></span><span class="lists__list__specs"><span class="lists__list__specs__date">2021.11.30</span><span class="lists__list__specs__cat">GAME</span></span><span class="lists__list__text">「Google Play ベスト オブ 2021」ベストクリエイティブ部門　部門賞受賞！</span></a></li>
                    <li><a href="/news/2021/11/29/1773/" class="noeff"><span style="background-image: url('/wp-content/uploads/2021/11/website_project-album-211129.png')" class="lists__list__img"></span><span class="lists__list__specs"><span class="lists__list__specs__date">2021.11.29</span><span class="lists__list__specs__cat">OTHERS</span></span><span class="lists__list__text">IDOLY PRIDE Collection Album [約束]ジャケット画像公開！</span></a></li>
                    <li><a href="/news/2021/11/25/1764/" class="noeff"><span style="background-image: url('/wp-content/uploads/2021/11/211110_towerrecords_icon.png')" class="lists__list__img"></span><span class="lists__list__specs"><span class="lists__list__specs__date">2021.11.25</span><span class="lists__list__specs__cat">OTHERS</span></span><span class="lists__list__text">「IDOLY PRIDE」POP UP SHOP IN TOWER RECORDS SHIBUYA開催記念 CD商品購入特典決定</span></a></li>
                    <li><a href="/news/2021/11/20/1763/" class="noeff"><span style="background-image: url('/wp-content/uploads/2021/10/website_project-live_news-211125.png')" class="lists__list__img"></span><span class="lists__list__specs"><span class="lists__list__specs__date">2021.11.20</span><span class="lists__list__specs__cat">EVENT</span></span><span class="lists__list__text">LAWSON presents IDOLY PRIDE VENUS STAGE 2022 “奇跡” スマホゲーム先行のお知らせ</span></a></li>
                  </ul></div>
            <div class="lists__button">
        <p><a href="/news/page/2/" class="noeff"><span class="lists__button__text">MORE</span><span class="lists__button__arw"><img src="/shared/img/common/icon_arw1.png" width="101" height="102" alt=""></span></a></p>
      </div>
          </div>
  </section></article><div id="share" class="share">
        <p class="share__head">SHARE</p>
        <ul class="share__list fadeover"><li class="share__list__line"><a href="//line.naver.jp/R/msg/text/?%E3%82%B2%E3%83%BC%E3%83%A0%E4%BA%8B%E5%89%8D%E7%99%BB%E9%8C%B2%E5%8F%97%E4%BB%98%E4%B8%AD%EF%BC%81%0D%0A%E9%9D%92%E6%98%A5%E5%85%A8%E9%83%A8%E3%81%8B%E3%81%91%E3%81%A6%E3%80%81%E3%82%A2%E3%82%A4%E3%83%89%E3%83%AB%E3%81%AE%E6%9C%80%E9%AB%98%E5%B3%B0%E3%81%B8%E3%80%82%0D%0A%E5%A4%A7%E5%9E%8B%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%E3%83%9F%E3%83%83%E3%82%AF%E3%82%B9%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%80%8CIDOLY%20PRIDE%E3%80%8D%E5%A7%8B%E5%8B%95%EF%BC%81%0D%0A%20https://idolypride.jp/" onclick="window.open(this.href,'tw_window', 'screenX='+(screen.width - 800) / 2+',screenY='+(screen.height - 600) / 2+',width=800, height=600, menubar=no, toolbar=no, scrollbars=yes');return false;">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewbox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" d="M15.9,0H4.1C1.8,0,0,1.8,0,4.1v11.8C0,18.2,1.8,20,4.1,20h11.8c2.3,0,4.1-1.8,4.1-4.1V4.1C20,1.8,18.2,0,15.9,0
                	z M15.6,12.8c-1.5,1.7-4.9,3.9-5.7,4.2c-0.7,0.3-0.6-0.2-0.6-0.4c0-0.1,0.1-0.6,0.1-0.6c0-0.2,0.1-0.5,0-0.7C9.3,15.1,9,15,8.7,14.9
                	C5.2,14.5,2.6,12,2.6,9.1c0-3.2,3.3-5.9,7.3-5.9s7.3,2.6,7.3,5.9C17.2,10.4,16.7,11.6,15.6,12.8z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" d="M8.5,7.5H8c-0.1,0-0.1,0.1-0.1,0.1v3.2C7.8,10.9,7.9,11,8,11h0.5c0.1,0,0.1-0.1,0.1-0.1V7.7
                	C8.6,7.6,8.6,7.5,8.5,7.5z M12,7.5h-0.5c-0.1,0-0.1,0.1-0.1,0.1v1.9l-1.5-2l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0
                	l0,0l0,0l0,0l0,0l0,0l0,0H9.3c-0.1,0-0.1,0.1-0.1,0.1v3.2c0,0.1,0.1,0.1,0.1,0.1h0.5c0.1,0,0.1-0.1,0.1-0.1V9l1.5,2l0,0l0,0l0,0l0,0
                	l0,0l0,0l0,0l0,0l0,0l0,0H12c0.1,0,0.1-0.1,0.1-0.1V7.7C12.1,7.6,12.1,7.5,12,7.5z M7.3,10.2H5.9V7.7c0-0.1-0.1-0.1-0.1-0.1H5.2
                	c-0.1,0-0.1,0.1-0.1,0.1v3.2V11l0,0l0,0h0.1h2c0.1,0,0.1-0.1,0.1-0.1v-0.5C7.4,10.3,7.3,10.2,7.3,10.2z M14.8,8.3
                	c0.1,0,0.1-0.1,0.1-0.1V7.7c0-0.1-0.1-0.1-0.1-0.1h-2h-0.1l0,0l0,0v0.1v3.2V11l0,0l0,0h0.1h2c0.1,0,0.1-0.1,0.1-0.1v-0.5
                	c0-0.1-0.1-0.1-0.1-0.1h-1.4V9.7h1.4c0.1,0,0.1-0.1,0.1-0.1V9c0-0.1-0.1-0.1-0.1-0.1h-1.4V8.3H14.8z"></path></svg></a></li>
          <li class="share__list__tw"><a href="https://twitter.com/share?text=%E3%82%B2%E3%83%BC%E3%83%A0%E4%BA%8B%E5%89%8D%E7%99%BB%E9%8C%B2%E5%8F%97%E4%BB%98%E4%B8%AD%EF%BC%81%0D%0A%E9%9D%92%E6%98%A5%E5%85%A8%E9%83%A8%E3%81%8B%E3%81%91%E3%81%A6%E3%80%81%E3%82%A2%E3%82%A4%E3%83%89%E3%83%AB%E3%81%AE%E6%9C%80%E9%AB%98%E5%B3%B0%E3%81%B8%E3%80%82%0D%0A%E5%A4%A7%E5%9E%8B%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%E3%83%9F%E3%83%83%E3%82%AF%E3%82%B9%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%80%8CIDOLY%20PRIDE%E3%80%8D%E5%A7%8B%E5%8B%95%EF%BC%81%0D%0A&url=https://idolypride.jp/&hashtags=IDOLYPRIDE" onclick="window.open(this.href,'tw_window', 'screenX='+(screen.width - 600) / 2+',screenY='+(screen.height - 500) / 2+',width=600, height=300, menubar=no, toolbar=no, scrollbars=yes');return false;">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="16" viewbox="0 0 20 16"><path fill-rule="evenodd" fill="#ffffff" d="M6.3,16C13.8,16,18,9.8,18,4.5c0-0.2,0-0.3,0-0.5c0.8-0.6,1.5-1.3,2-2.1c-0.7,0.3-1.5,0.5-2.4,0.6c0.8-0.5,1.5-1.3,1.8-2.2c-0.8,0.5-1.7,0.8-2.6,1C16.1,0.5,15,0,13.8,0c-2.3,0-4.1,1.8-4.1,4c0,0.3,0,0.6,0.1,0.9C6.4,4.8,3.4,3.2,1.4,0.7C1,1.3,0.8,2,0.8,2.8c0,1.4,0.7,2.6,1.8,3.4C2,6.1,1.4,5.9,0.8,5.6c0,0,0,0,0,0.1c0,2,1.4,3.6,3.3,4C3.7,9.7,3.4,9.8,3,9.8c-0.3,0-0.5,0-0.8-0.1c0.5,1.6,2,2.8,3.8,2.8c-1.4,1.1-3.2,1.7-5.1,1.7c-0.3,0-0.7,0-1-0.1C1.8,15.3,4,16,6.3,16"></path></svg></a></li>
          <li class="share__list__fb"><a href="https://www.facebook.com/sharer.php?quote=%E3%82%B2%E3%83%BC%E3%83%A0%E4%BA%8B%E5%89%8D%E7%99%BB%E9%8C%B2%E5%8F%97%E4%BB%98%E4%B8%AD%EF%BC%81%0D%0A%E9%9D%92%E6%98%A5%E5%85%A8%E9%83%A8%E3%81%8B%E3%81%91%E3%81%A6%E3%80%81%E3%82%A2%E3%82%A4%E3%83%89%E3%83%AB%E3%81%AE%E6%9C%80%E9%AB%98%E5%B3%B0%E3%81%B8%E3%80%82%0D%0A%E5%A4%A7%E5%9E%8B%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%E3%83%9F%E3%83%83%E3%82%AF%E3%82%B9%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%80%8CIDOLY%20PRIDE%E3%80%8D%E5%A7%8B%E5%8B%95%EF%BC%81%0D%0A&u=https://idolypride.jp/" onclick="window.open(this.href,'tw_window', 'screenX='+(screen.width - 800) / 2+',screenY='+(screen.height - 400) / 2+',width=800, height=400, menubar=no, toolbar=no, scrollbars=yes');return false;">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewbox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" class="st0" d="M10,0C4.5,0,0,4.5,0,10c0,5,3.7,9.1,8.4,9.9v-7H5.9V10h2.5V7.8c0-2.5,1.5-3.9,3.8-3.9c1.1,0,2.2,0.2,2.2,0.2
                	v2.4v0.1h-1.3c-1.2,0-1.6,0.8-1.6,1.6V10h2.8l-0.4,2.9h-2.3v7C16.3,19.1,20,15,20,10C20,4.5,15.5,0,10,0z"></path></svg></a></li>
        </ul></div>
      
      <p id="btnPagetop" class="btn--pagetop"><a href="#pagetop" data-offset="0" class="ancor"><span class="btn--pagetop__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="72" viewbox="0 0 70 72"><path fill="#ffffff" d="M-5094.336-1059.688a1.063,1.063,0,0,1,0-1.522l32.674-32.083h-67.269a1.179,1.179,0,0,1-1.18-1.179,1.179,1.179,0,0,1,1.18-1.178h67.06l-32.465-31.88a1.067,1.067,0,0,1,0-1.527,1.113,1.113,0,0,1,1.555,0l33.956,33.343a1.08,1.08,0,0,1,.2.268,1.176,1.176,0,0,1,.515.974,1.178,1.178,0,0,1-.419.9,1.06,1.06,0,0,1-.3.533l-33.962,33.35a1.1,1.1,0,0,1-.774.315A1.1,1.1,0,0,1-5094.336-1059.688Z" transform="translate(1129.373 -5058.11) rotate(-90)"></path></svg></span><span class="btn--pagetop__text">BACK TO TOP</span></a></p>
      
      <footer id="footer" class="footer"><div class="footer__inner">
          <p class="footer__logo"><a href="/" class="insite">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300" height="37" viewbox="0 0 300 37"><path fill-rule="evenodd" fill="#000000" d="M252,0.6h-3.3v6.7h3.2c6.5,0,11.4,4.8,11.4,11.2c0,6.4-4.9,11.2-11.4,11.2h-3.2v6.7h3.3c10.1,0,18.1-8,18.1-18C270.1,8.5,262.1,0.6,252,0.6z M63.7,0C53.5,0,45.2,8.3,45.2,18.5c0,10.3,8.3,18.5,18.6,18.5s18.6-8.3,18.6-18.5C82.3,8.3,74,0,63.7,0z M63.8,30.3c-6.6,0-11.9-5.3-11.9-11.8c0-6.5,5.3-11.8,11.9-11.8c6.5,0,11.8,5.3,11.8,11.8C75.6,25,70.3,30.3,63.8,30.3z M231.5,36.4h6.8V0.6h-6.8V36.4z M0,36.4h6.7V0.6H0V36.4z M279.4,36.4H300v-6.7h-20.6V36.4zM279.4,21.9H300v-6.7h-20.6V21.9z M279.4,0.6v6.7H300V0.6H279.4z M221.7,10.7c0-5.6-4.5-10.1-10.2-10.1H193v6.7h18.5c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4h-12.4l15,22.4h8.1l-10.5-15.7C217.4,20.7,221.7,16.2,221.7,10.7z M174.5,0.6h-12.9v6.7h12.9c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4h-12.9v22.4h6.7V20.7h6.1c5.7,0,10.3-4.4,10.3-10.1C184.8,5,180.2,0.6,174.5,0.6z M20.6,0.6h-3.3v6.7h3.2c6.5,0,11.4,4.8,11.4,11.2c0,6.4-4.9,11.2-11.4,11.2h-3.2v6.7h3.3c10.1,0,18.1-8,18.1-18C38.7,8.5,30.7,0.6,20.6,0.6z M193,36.4h6.7V20.7H193V36.4z M126.7,13.2l-8.5-12.6h-8.1l13.2,19.7v16.2h6.7V20.3l13.2-19.7h-8.2L126.7,13.2z M98.4,0.6h-6.7v35.9h19.7v-6.7H98.4V0.6z"></path></svg></a></p>
          <div class="footer__nav">
            <div class="footer__nav__block">
              <p><a href="/project/" class="insite"><span>PROJECT</span></a></p>
              <p><a href="/character/" class="insite"><span>CHARACTER</span></a></p>
              <p><a href="https://anime.idolypride.jp/" target="_blank"><span>ANIME</span></a></p>
              <p><a href="/game/" class="insite"><span>GAME</span></a></p>
            </div>
            <div class="footer__nav__block">
              <p><a href="/news/" class="insite"><span>NEWS</span></a></p>
              <p><a href="/movie/" class="insite"><span>MOVIE</span></a></p>
              <p><a href="/store/" class="insite"><span>STORE</span></a></p>
              <p><a href="https://anime.idolypride.jp/music/" target="_blank"><span>MUSIC</span></a></p>
            </div>
          </div>
          <ul class="footer__company fadeover"><li><a href="https://qualiarts.jp/" target="_blank"><img src="/shared/img/common/ft_logo_qa.png" width="190" height="55" alt="株式会社QualiArts"></a></li>
            <li><a href="https://musicrayn.com/" target="_blank"><img src="/shared/img/common/ft_logo_mr.png" width="79" height="54" alt="MusicRay'n"></a></li>
            <li><a href="http://straightedge.jp/" target="_blank"><img src="/shared/img/common/ft_logo_se.png" width="121" height="40" alt="株式会社ストレートエッジ"></a></li>
          </ul><ul class="footer__sns fadeover"><li class="footer__sns__twitter"><a href="https://twitter.com/idolypride" target="_blank"><span>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="12" viewbox="0 0 15 12"><path fill-rule="evenodd" fill="#0000ff" d="M4.7,12c5.7,0,8.8-4.6,8.8-8.6c0-0.1,0-0.3,0-0.4c0.6-0.4,1.1-1,1.5-1.6c-0.6,0.2-1.1,0.4-1.8,0.5c0.6-0.4,1.1-1,1.4-1.7c-0.6,0.3-1.3,0.6-2,0.7c-0.6-0.6-1.4-1-2.2-1C8.7,0,7.3,1.4,7.3,3c0,0.2,0,0.5,0.1,0.7C4.8,3.6,2.6,2.4,1,0.6C0.8,1,0.6,1.5,0.6,2.1c0,1.1,0.5,2,1.4,2.5c-0.5,0-1-0.2-1.4-0.4c0,0,0,0,0,0c0,1.5,1.1,2.7,2.5,3C2.8,7.3,2.5,7.3,2.3,7.3c-0.2,0-0.4,0-0.6-0.1c0.4,1.2,1.5,2.1,2.9,2.1c-1.1,0.8-2.4,1.3-3.8,1.3c-0.2,0-0.5,0-0.7,0C1.4,11.5,3,12,4.7,12"></path></svg></span><span>OFFICIAL Twitter</span></a></li>
            <li class="footer__sns__youtube"><a href="https://www.youtube.com/channel/UCOuzrlRFF7aSkooORw0XWRA" target="_blank"><span>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="12" viewbox="0 0 18 12"><path fill-rule="evenodd" fill="#ff0000" d="M17.6,1.9c-0.2-0.7-0.8-1.3-1.6-1.5C14.6,0,9,0,9,0S3.4,0,2,0.4C1.2,0.6,0.6,1.1,0.4,1.9C0,3.2,0,6,0,6s0,2.8,0.4,4.1c0.2,0.7,0.8,1.3,1.6,1.5C3.4,12,9,12,9,12s5.6,0,7-0.4c0.8-0.2,1.4-0.8,1.6-1.5C18,8.8,18,6,18,6S18,3.2,17.6,1.9zM7,8.5V3.5L11.7,6L7,8.5z"></path></svg></span><span>OFFICIAL YouTube</span></a></li>
          </ul><ul class="flooter__links fadeover"><li><a href="/privacy-policy/" class="insite">プライバシーポリシー</a></li>
            <li><a href="https://qualiarts.jp/guideline" target="_blank" rel="nofollow noopener">著作物利用ガイドライン</a></li>
          </ul><p class="footer__rights">
            このホームページに記載されている<br class="sp-only">一切の文書・写真・イラスト等を、<br>
            手段や形態を問わず複写・転載することを禁じます。
          </p>
          <p class="footer__copyright">© 2019 Project IDOLY PRIDE</p>

          <div class="footer__chara">
            <p id="footerCharaVisual" class="footer__chara__visual">
              <span class="footer__chara__visual__c1"><a href="/character/kotono-nagase/" class="insite"><img data-src="/shared/img/common/ft_c1_2_img_pc.png" width="871" height="789" alt="長瀬琴乃" class="switch lazyload"></a></span>
              <span class="footer__chara__visual__c2"><a href="/character/sakura-kawasaki/" class="insite"><img data-src="/shared/img/common/ft_c2_2_img_pc.png" width="808" height="980" alt="川咲さくら" class="switch lazyload"></a></span>
              <span class="footer__chara__visual__c3"><a href="/character/rei-ichinose/" class="insite"><img data-src="/shared/img/common/ft_c3_2_img_pc.png" width="944" height="772" alt="一ノ瀬怜" class="switch lazyload"></a></span>
              <span class="footer__chara__visual__c4"><a href="/character/nagisa-ibuki/" class="insite"><img data-src="/shared/img/common/ft_c4_2_img_pc.png" width="797" height="804" alt="伊吹渚" class="switch lazyload"></a></span>
              <span class="footer__chara__visual__c5"><a href="/character/haruko-saeki/" class="insite"><img data-src="/shared/img/common/ft_c5_2_img_pc.png" width="792" height="787" alt="佐伯遙子" class="switch lazyload"></a></span>
              <span class="footer__chara__visual__c6"><a href="/character/saki-shiraishi/" class="insite"><img data-src="/shared/img/common/ft_c6_2_img_pc.png" width="657" height="791" alt="白石沙季" class="switch lazyload"></a></span>
              <span class="footer__chara__visual__c7"><a href="/character/chisa-shiraishi/" class="insite"><img data-src="/shared/img/common/ft_c7_2_img_pc.png" width="595" height="797" alt="白石千紗" class="switch lazyload"></a></span>
              <span class="footer__chara__visual__c8"><a href="/character/suzu-narumiya/" class="insite"><img data-src="/shared/img/common/ft_c8_2_img_pc.png" width="942" height="782" alt="成宮すず" class="switch lazyload"></a></span>
              <span class="footer__chara__visual__c9"><a href="/character/mei-hayasaka/" class="insite"><img data-src="/shared/img/common/ft_c9_2_img_pc.png" width="856" height="794" alt="早坂芽衣" class="switch lazyload"></a></span>
              <span class="footer__chara__visual__c10"><a href="/character/shizuku-hyodo/" class="insite"><img data-src="/shared/img/common/ft_c10_2_img_pc.png" width="739" height="885" alt="兵藤雫" class="switch lazyload"></a></span>
              <span class="footer__chara__visual__c11"><a href="/character/rui-tendo/" class="insite"><img data-src="/shared/img/common/ft_c11_img_pc.png" width="1288" height="878" alt="天動瑠依" class="switch lazyload"></a></span>
              <span class="footer__chara__visual__c12"><a href="/character/sumire-okuyama/" class="insite"><img data-src="/shared/img/common/ft_c12_img_pc.png" width="1456" height="878" alt="奥山すみれ" class="switch lazyload"></a></span>
              <span class="footer__chara__visual__c13"><a href="/character/yu-suzumura/" class="insite"><img data-src="/shared/img/common/ft_c13_img_pc.png" width="895" height="849" alt="鈴村優" class="switch lazyload"></a></span>
              <span class="footer__chara__visual__c14"><a href="/character/rio-kanzaki/" class="insite"><img data-src="/shared/img/common/ft_c14_img_pc.png" width="651" height="856" alt="神崎莉央" class="switch lazyload"></a></span>
              <span class="footer__chara__visual__c15"><a href="/character/aoi-igawa/" class="insite"><img data-src="/shared/img/common/ft_c15_img_pc.png" width="726" height="837" alt="井川葵" class="switch lazyload"></a></span>
              <span class="footer__chara__visual__c16"><a href="/character/ai-komiyama/" class="insite"><img data-src="/shared/img/common/ft_c16_img_pc.png" width="799" height="835" alt="小美山愛" class="switch lazyload"></a></span>
              <span class="footer__chara__visual__c17"><a href="/character/kokoro-akazaki/" class="insite"><img data-src="/shared/img/common/ft_c17_img_pc.png" width="768" height="863" alt="赤崎こころ" class="switch lazyload"></a></span>
              <span class="footer__chara__visual__c18"><a href="/character/mana-nagase/" class="insite"><img data-src="/shared/img/common/ft_c18_img_pc.png" width="952" height="776" alt="長瀬麻奈" class="switch lazyload"></a></span></p>
          </div>
        </div>
      </footer></div>

    
    <script src="//code.jquery.com/jquery-3.6.0.min.js"></script><script>
      window.jQuery || document.write('<script src="/shared/js/plugins/jquery-3.2.1.min.js"><¥/script>')

    </script><script src="/shared/js/libs-min.js?v=2.1"></script><script src="/shared/js/functions-min.js?v=2.1"></script><script src="/shared/js/secondary-min.js?v=2.1"></script></body></html>
`

const $ = cheerio.load(c)
const links = $('#listsList a')

links.map((_, item) => {
  console.log('href', $(item).attr('href'))
  console.log('date', $('.lists__list__specs__date', item).text())
  console.log('cat', $('.lists__list__specs__cat', item).text())
  console.log('title', $('.lists__list__text', item).text())
  console.log(
    'image',
    $('.lists__list__img', item)
      .css('background-image')
      .replace(/^url\(["']/, '')
      .replace(/["']\)$/, '')
  )
})
