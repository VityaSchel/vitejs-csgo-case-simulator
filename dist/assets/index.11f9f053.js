var S=Object.defineProperty,P=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var X=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var I=(e,t,n)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,K=(e,t)=>{for(var n in t||(t={}))$.call(t,n)&&I(e,n,t[n]);if(X)for(var n of X(t))ee.call(t,n)&&I(e,n,t[n]);return e},Q=(e,t)=>P(e,M(t));import{j as m,a,R as w,_ as L,D as O,f as ae,F as te,u as ne,b as A,c as y,d as U,e as G,L as F,g as J,h as V,B as ue,i as ie,k as C,l as se,m as oe,n as me,P as ce}from"./vendor.e6a42c43.js";const re=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))i(u);new MutationObserver(u=>{for(const o of u)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(u){const o={};return u.integrity&&(o.integrity=u.integrity),u.referrerpolicy&&(o.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?o.credentials="include":u.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(u){if(u.ep)return;u.ep=!0;const o=n(u);fetch(u.href,o)}};re();const le="_items_dpth7_1",de="_caseInfo_dpth7_18",pe="_header_dpth7_27",we="_title_dpth7_33",ge="_targets_dpth7_43",he="_key_dpth7_53",ye="_hint_dpth7_75";var g={items:le,caseInfo:de,header:pe,title:we,targets:ge,key:he,case:"_case_dpth7_18",hint:ye};const E={gamma:{name:"\u0413\u0430\u043C\u043C\u0430-\u043A\u0435\u0439\u0441",keyName:"\u041A\u043B\u044E\u0447 \u043E\u0442 \u0433\u0430\u043C\u043C\u0430-\u043A\u0435\u0439\u0441\u0430",items:["\u0416\u043D\u0435\u0446","\u0416\u0435\u043B\u0435\u0437\u043D\u043E\u0435 \u043F\u043E\u043A\u0440\u044B\u0442\u0438\u0435","\u041F\u043B\u043E\u0442\u043E\u044F\u0434\u043D\u044B\u0439","\u041F\u043E\u043B\u0435\u0442","\u041D\u0435\u0438\u0441\u0442\u043E\u0432\u044B\u0439 \u0434\u0430\u0439\u043C\u0451","\u041B\u0435\u0434\u043D\u0438\u043A\u043E\u0432\u044B\u0439 \u043F\u043E\u043A\u0440\u043E\u0432","\u042D\u043A\u0437\u043E","\u0424\u043E\u0431\u043E\u0441","\u0412 \u0446\u0435\u043D\u0442\u0440\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u044F","\u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430","\u0410\u0440\u0438\u0441\u0442\u043E\u043A\u0440\u0430\u0442","\u0412\u043E\u0438\u043D \u0434\u043E\u0440\u043E\u0433","\u041A\u0440\u043E\u0432\u0430\u0432\u044B\u0439 \u0441\u043F\u043E\u0440\u0442","\u0418\u043C\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0441\u043A\u0438\u0439 \u0434\u0440\u0430\u043A\u043E\u043D","\u0411\u0435\u0437\u043B\u044E\u0434\u043D\u044B\u0439 \u043A\u043E\u0441\u043C\u043E\u0441","\u041F\u0443\u0441\u0442\u044B\u043D\u043D\u044B\u0439 \u043F\u043E\u0432\u0441\u0442\u0430\u043D\u0435\u0446","\u041C\u0435\u0445\u0430\u043D\u043E-\u043F\u0443\u0448\u043A\u0430"]},chroma:{name:"\u0425\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043E\u0440\u0443\u0436\u0435\u0439\u043D\u044B\u0439 \u043A\u0435\u0439\u0441",keyName:"\u041A\u043B\u044E\u0447 \u043E\u0442 \u0445\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u043A\u0435\u0439\u0441\u0430",items:["\u0411\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0430","\u0421\u043C\u0435\u0440\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u044F\u0434","\u0420\u0442\u0443\u0442\u044C","\u0413\u0440\u043E\u0442","\u0417\u0430\u0445\u043E\u0440\u043E\u043D\u0435\u043D\u0438\u0435","\u0411\u0435\u0437\u043C\u044F\u0442\u0435\u0436\u043D\u043E\u0441\u0442\u044C","\u0413\u043E\u0440\u043E\u0434\u0441\u043A\u043E\u0439 \u0448\u043E\u043A","\u041D\u0430\u0433\u0430","\u041C\u0430\u043B\u0430\u0445\u0438\u0442","\u041F\u043E\u043A\u043E\u0439\u043D\u0438\u043A","\u041A\u0430\u0440\u0442\u0435\u043B\u044C","\u0429\u0435\u043B\u043A\u0443\u043D\u0447\u0438\u043A"]},spectrum:{name:"\u041A\u0435\u0439\u0441 \xAB\u0421\u043F\u0435\u043A\u0442\u0440\xBB",keyName:"\u041A\u043B\u044E\u0447 \u043E\u0442 \u043A\u0435\u0439\u0441\u0430 \xAB\u0421\u043F\u0435\u043A\u0442\u0440\xBB",items:["\u0412\u0438\u0445\u0440\u044C \u0434\u0436\u0443\u043D\u0433\u043B\u0435\u0439","\u0421\u0443\u0434\u0430\u043A","\u0413\u043E\u0440\u043D \u0432\u043E\u0439\u043D\u044B","\u041A\u0430\u043F\u0438\u043B\u043B\u044F\u0440\u044B","\u0417\u044B\u0431\u044C","\u041A\u0430\u043B\u044C\u043A\u0430","\u041E\u043A\u0441\u0438\u0434\u043D\u043E\u0435 \u043F\u043B\u0430\u043C\u044F","\u0423\u043A\u0443\u0441 \u0438\u0437\u0443\u043C\u0440\u0443\u0434\u043D\u043E\u0433\u043E \u044F\u0434\u0430","\u041A\u0430\u0440\u043A\u0430\u0441","\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u043F\u043E\u0433\u0440\u0443\u0436\u0435\u043D\u0438\u0435","\u0411\u0430\u0433\u0440\u043E\u0432\u043E\u0435 \u0446\u0443\u043D\u0430\u043C\u0438","\u0412\u0440\u0435\u043C\u0435\u043D\u0430 \u0433\u043E\u0434\u0430","\u0421\u044F\u043D-\u043B\u044E","\u0413\u043E\u0440\u044F\u0447\u0435\u0447\u043D\u044B\u0435 \u0433\u0440\u0451\u0437\u044B","\u041E\u043F\u0443\u0441\u0442\u043E\u0448\u0438\u0442\u0435\u043B\u044C","\u041A\u0440\u043E\u0432\u0430\u0432\u044B\u0439 \u0441\u043F\u043E\u0440\u0442","\u041D\u0435\u043E\u043D\u0443\u0430\u0440"]}},W=Object.values(E).map(({name:e})=>e),Ze=Object.values(E).map(({keyName:e})=>e),fe="_container_174w9_1",xe="_display_174w9_8",Le="_screen_174w9_15",_e="_divider_174w9_22",Ue="_roller_174w9_31";var D={container:fe,display:xe,screen:Le,divider:_e,roller:Ue};const ke="_item_61wis_1",Ee="_img_61wis_13",De="_price_61wis_20",ve="_info_61wis_27",be="_name_61wis_53";var Z={item:ke,img:Ee,price:De,info:ve,"rarity-gray":"_rarity-gray_61wis_38","rarity-blue":"_rarity-blue_61wis_41","rarity-purple":"_rarity-purple_61wis_44","rarity-pink":"_rarity-pink_61wis_47","rarity-red":"_rarity-red_61wis_50",name:be},f={\u0416\u043D\u0435\u0446:{weapon:"\u041F\u041F-19 \u0411\u0438\u0437\u043E\u043D",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf1OD3YS197tWsm460n_bmJb7Cgm5D18l4jeHVu9qg3FDm_RdoYD30cYKQegVvYQ2Er1Trwbu-g8TuupTOwXdrvCkqsSzD30vgYAZZ8iA/120fx90f/image.png",rarity:"blue",price:.35},"\u0416\u0435\u043B\u0435\u0437\u043D\u043E\u0435 \u043F\u043E\u043A\u0440\u044B\u0442\u0438\u0435":{weapon:"P250",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhnwMzYI2gS09GzgIGHqOf1Pb7dhVRd4cJ5nqfApNyhi1Hl-RZpYz-iJoKScwc5YVDX8lPrxLro15S_6ZybmiBk7iFw-z-DyIqJ8OGX/120fx90f/image.png",rarity:"blue",price:.64},\u041F\u043B\u043E\u0442\u043E\u044F\u0434\u043D\u044B\u0439:{weapon:"MAC-10",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0uL3fDxB043mq4GHnvL6DLjQm2Ru5Mx2gv2PpNyg3gzh-kM5MGr0cdWddwc7ZFzWr1Tvku7sgZO5v5TImyBq73MgsWGdwUKG4a4LKQ/120fx90f/image.png",rarity:"blue",price:.51},\u041F\u043E\u043B\u0435\u0442:{weapon:"SG 553",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf0Ob3YjoXuY-JlYWZnvb4DLfYkWNFpsQg2LqZotil0QG18kU9amuiddfGJgZoZ1yB_gfrl-vr08e4uZicwXB9-n51wGEO0Qg/120fx90f/image.png",rarity:"blue",price:.24},"\u041D\u0435\u0438\u0441\u0442\u043E\u0432\u044B\u0439 \u0434\u0430\u0439\u043C\u0451":{weapon:"Five-SeveN",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goW0hPLiNrXukmpY5dx-teXI8oThxlDn8kdvamGgddOUewE5ZFzW8lm5wOrq0cXquszNwXth7iJ3sX3UzkSpwUYbP1ABv1A/120fx90f/image.png",rarity:"blue",price:.42},"\u041B\u0435\u0434\u043D\u0438\u043A\u043E\u0432\u044B\u0439 \u043F\u043E\u043A\u0440\u043E\u0432":{weapon:"Tec-9",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhh3szcdD59teOlkYG0hPb4J4Tdn2xZ_Ism2L_HotTzjAzj-RI9YTqgctXEIA9vYV3RqFXsxue8hpe46JjJmHY2pGB8srWWYKT2/120fx90f/image.png",rarity:"blue",price:.4},\u042D\u043A\u0437\u043E:{weapon:"Nova",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhhwszGfitD08-1nb-Nnsj4OrzZgiUI68Mj3LGZpNr2iVDhqRc-NmrwdtKRJgdqNQuF-wTsye-5jJa5vZvN1zI97btNrV2z/120fx90f/image.png",rarity:"blue",price:.23},\u0424\u043E\u0431\u043E\u0441:{weapon:"AWP",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJS5NO0m5O0m_7zO6-fkGhQsZMgieqYrI-i2ACy-0o_Z22mItOdcAU5aVzT_gTowbvth5a0u4OJlyU2Brz6WA/120fx90f/image.png",rarity:"purple",price:1.65},"\u0412 \u0446\u0435\u043D\u0442\u0440\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u044F":{weapon:"Sawed-Off",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cih9_92hkYS0mPHyDLfYm25u5Mx2gv2Prdvzilax-kZlZDyiJILEdwdsZF6G-QO-l-m8hsDvuszMnyRlvyUhtmGdwULNRxrMww/120fx90f/image.png",rarity:"purple",price:2.03},\u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430:{weapon:"\u0420\u0435\u0432\u043E\u043B\u044C\u0432\u0435\u0440 R8",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopL-zJAt21uH3cih9_oSJl5mJkuXnI7TDglRd4cJ5nqfFoIn30AbjrUplMm3zJY-Ud1Q2Yl_XrwXvxrznhMe87s7AmiM2vnJ0-z-DyNeUBGhM/120fx90f/image.png",rarity:"purple",price:3.15},\u0410\u0440\u0438\u0441\u0442\u043E\u043A\u0440\u0430\u0442:{weapon:"AUG",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFABz7PLddgJD_tWlgI-IhfbgDLfYkWNFppEh2r3F946n2Ffk-BdtMmvyJNDDe1c3aVHW8gXqk-zqhMTo6smdmnR9-n51p3fUIBA/120fx90f/image.png",rarity:"purple",price:1.51},"\u0412\u043E\u0438\u043D \u0434\u043E\u0440\u043E\u0433":{weapon:"P90",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FABz7OORIQJE-dC6q5SDhfjgJ7fUqWdY781lxL6R8Iqj0FDj-0VtZDyhJ4edJwRqN1jVr1G3l-nnhZK4tMzImyM1unQ8pSGK75hLHr0/120fx90f/image.png",rarity:"purple",price:1.57},"\u041A\u0440\u043E\u0432\u0430\u0432\u044B\u0439 \u0441\u043F\u043E\u0440\u0442":{weapon:"SCAR-20",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PTbTi5B7c7kxL-Jm_j7N6jBmXlF18l4jeHVu4jx0Q2yrhA_MWrycITAIQQ3ZwqDrle8wb-90Z60ucjPnydmunQm4SrD30vg_ZtSLog/120fx90f/image.png",rarity:"pink",price:6.64},"\u0418\u043C\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0441\u043A\u0438\u0439 \u0434\u0440\u0430\u043A\u043E\u043D":{weapon:"P2000",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zPYgJSvozmxL-CmufxIbLQmlRV-sR2hef--YXygED6qBBkYTugIoWQcVc-NFCDr1i4wrjp15buup3JwHJm7iR2tnzazUOz0AYMMLKd06oYrw/120fx90f/image.png",rarity:"pink",price:6.27},"\u0411\u0435\u0437\u043B\u044E\u0434\u043D\u044B\u0439 \u043A\u043E\u0441\u043C\u043E\u0441":{weapon:"M4A4",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09izh4-HluPxDKjBl2hU18l4jeHVu93zi1aw_hZtYW2icYHGdwJtN1nSr1foxui8gZW96ZvPznMyvSMq4XrD30vgc83x0v4/120fx90f/image.png",rarity:"pink",price:19.64},"\u041F\u0443\u0441\u0442\u044B\u043D\u043D\u044B\u0439 \u043F\u043E\u0432\u0441\u0442\u0430\u043D\u0435\u0446":{weapon:"Glock-18",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79eJg4GYg_L4MrXVqXlU6sB9teXI8oThxgbs_0tlajihJ4PAd1c8aAvWrwXsx-q9h8fqvZTNmic2uylz5SqJlxypwUYbBM1DXmo/120fx90f/image.png",rarity:"red",price:7.25},"\u041C\u0435\u0445\u0430\u043D\u043E-\u043F\u0443\u0448\u043A\u0430":{weapon:"M4A1-S",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOxh7-Gw_alDLbUlWNQ18x_jvzS4Z78jUeLpxo7Oy3tJo-ScVVoZAuB8wW_xOft0ZC6uZ-bn3Nn63Mq7C2Oyx2yiBsYarNv1OveFwt9ELX6XQ/120fx90f/image.png",rarity:"red",price:49.82},\u0411\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0430:{weapon:"M249",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhjxszFI2kb08-zn5SEhcj4OrzZgiVSsZAmj76R9tqg3gTm_xFuMGn1JtCSI1A8YVvRq1a4krzs1p6_6pya1zI97fYyj9_i/120fx90f/image.png",rarity:"blue",price:.88},"\u0421\u043C\u0435\u0440\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u044F\u0434":{weapon:"MP9",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAR17P7YKAJG6d2ymJm0h_j9ILTfqWdY781lxLmWotqs3wKx_ENlNjr0doOVcVJqZg3U_QO2kufph5W_tJvIzCBm7nE8pSGKOfWakqU/120fx90f/image.png",rarity:"blue",price:1.23},\u0420\u0442\u0443\u0442\u044C:{weapon:"XM1014",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PLZTiVPvYznwL-YnvD4MoTdn2xZ_Ism2-qQrdz2jAe28xE4Njj0cIbHcwc3MArSqFjqxOrojJTvuZybyiMypGB8siECplOC/120fx90f/image.png",rarity:"blue",price:.38},\u0413\u0440\u043E\u0442:{weapon:"SCAR-20",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PLZTi5B7c7kxL-Hkvb_DLfYkWNFppUniLCTpt2j2wy2qkBoZDz6JdWTdQdrMg7SqVC9x-rogJK7tZnBwHF9-n51IW4yjAA/120fx90f/image.png",rarity:"blue",price:.4},\u0417\u0430\u0445\u043E\u0440\u043E\u043D\u0435\u043D\u0438\u0435:{weapon:"Glock-18",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79eJkIWKg__gPLfdqWdY781lxOrH9o-jiQXj-0BrMmrwdtTHdwQ6MgnR8lS4ku7o1sC7usmdmHZns3Q8pSGK4NV4g5I/120fx90f/image.png",rarity:"blue",price:.39},\u0411\u0435\u0437\u043C\u044F\u0442\u0435\u0436\u043D\u043E\u0441\u0442\u044C:{weapon:"Sawed-Off",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cih9_92hkYSEkfHLN77Hl1Rd4cJ5nqeY84rxjQTgrUE6Y2HxcNXAdg88M1qGq1frw-vv05C16pjKwSNmunIn-z-DyMFXoJu6/120fx90f/image.png",rarity:"purple",price:2.03},"\u0413\u043E\u0440\u043E\u0434\u0441\u043A\u043E\u0439 \u0448\u043E\u043A":{weapon:"Dual Berettas",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0Ob3dDFL-Nmlq5WZlfb6IK_ehGZu5Mx2gv2P8d-miw2wr0VpZ2r3cI7He1A6NF-C_1G3w7i81pTpvJqYwXVn7yYg4GGdwUKBwyb7aQ/120fx90f/image.png",rarity:"purple",price:2.27},\u041D\u0430\u0433\u0430:{weapon:"Desert Eagle",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjlH7du6kb-FlvD1DLfYkWNFpscl27nA8dSm3Vbl80poMm33LICSdFdrYV3Z-lS2x-zmjcfqvs6bynF9-n51bHG-s3k/120fx90f/image.png",rarity:"purple",price:4.51},\u041C\u0430\u043B\u0430\u0445\u0438\u0442:{weapon:"MAC-10",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0v73fDxBvYyJmYGHlvT8Oq_UqWdY781lxL-U99zwjlLl-RZqZmyldo-RJ1U3NQ3V_lS9xebugp7qvczMnXRj7yA8pSGKfz9kLDg/120fx90f/image.png",rarity:"purple",price:2.16},\u041F\u043E\u043A\u043E\u0439\u043D\u0438\u043A:{weapon:"P250",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS09G3moSKm_bLP7LWnn8fuMRyiLyQodqhi1Dj-UVoYDr1dYfDJ1BvN1DX-Ve8yea615PovJ-fzmwj5Hf1-Su83w/120fx90f/image.png",rarity:"pink",price:7.79},\u041A\u0430\u0440\u0442\u0435\u043B\u044C:{weapon:"AK-47",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszJemkV09-3hpSOm8j4OrzZgiUD7ZJzj7DHoY-iilC1-ENoNWuiI9WWdQI8Z1iE81Tvl7i81J-_6p2b1zI97XPwFCE_/120fx90f/image.png",rarity:"pink",price:13.6},\u0429\u0435\u043B\u043A\u0443\u043D\u0447\u0438\u043A:{weapon:"Galil AR",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczLZAJF7dC_mL-KleX1ILLemFRc7cF4n-SPodvz2gzjrUE4ZWyld4_DdlBrNAyC_ge4xr_qhZO-7s_PwXRmsnJw7GGdwUI2M1HQMQ/120fx90f/image.png",rarity:"red",price:45.5},"\u0412\u0438\u0445\u0440\u044C \u0434\u0436\u0443\u043D\u0433\u043B\u0435\u0439":{weapon:"\u041F\u041F-19 \u0411\u0438\u0437\u043E\u043D",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3czRY49KJgI-ZmcjzIb7UmFRd4cJ5nqeQ9I2l3wKxrxZqMmv2JYfHJAA5Zw6GqFDtxL_s0Mfq78zOyCFmsnEk-z-DyIQLMxpA/120fx90f/image.png",rarity:"blue",price:.23},\u0421\u0443\u0434\u0430\u043A:{weapon:"Sawed-Off",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cCx9_92hkYSEkfHLKbrfkm5Duvp9g-7J4cKg2QCy_BBqMG_zIoScdA49aQ7V_FG8webogsK7u5vLmndqvnRx4S2JgVXp1gGJxOF0/120fx90f/image.png",rarity:"blue",price:.27},"\u0413\u043E\u0440\u043D \u0432\u043E\u0439\u043D\u044B":{weapon:"MP7",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFBRw7P7YJgJW_tW0lYy0jvL4P7TGqWdY781lxLjCpdnx2gPg80Q6Njv2cI6XJw4_Z13X-FC3xey61JXtupqczyAyuSM8pSGKG3rzCmA/120fx90f/image.png",rarity:"blue",price:.23},\u041A\u0430\u043F\u0438\u043B\u043B\u044F\u0440\u044B:{weapon:"Five-SeveN",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goWYkuHxPYTHk2Jf18l4jeHVu9ij3FG3_UptMWqgJ9WcIQ48aQmB-wC2leq6h8S8u5udmCNn6Cdz4SnD30vgWlTck20/120fx90f/image.png",rarity:"blue",price:.25},\u0417\u044B\u0431\u044C:{weapon:"P250",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhh3szYI2gS08-mgZSFnvzLP7LWnn8fu50m3L-Uptys3wG1qhJoY2n1cNLEdVc8ZV3T-QDtwLzvgMe67puYwWwj5Hf4p3Uhrg/120fx90f/image.png",rarity:"blue",price:.23},\u041A\u0430\u043B\u044C\u043A\u0430:{weapon:"SCAR-20",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PDdTj9O-dmmhomFg8jnMLrDqWdY781lxLDAot3w0AXt-hBuMWvzLIfDd1BqYlDY_ge7xrjmhJ-6up6by3Q27yU8pSGKGwiMA-c/120fx90f/image.png",rarity:"blue",price:.35},"\u041E\u043A\u0441\u0438\u0434\u043D\u043E\u0435 \u043F\u043B\u0430\u043C\u044F":{weapon:"Desert Eagle",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH_9mkgL-OlvD4NoTSmXlD58F0hNbN_Iv9nBrhrRc5YTqgJdWcIA48M1iF81m8wurrgMW76s_LmydguSRwtn3VmUThn1gSOZyN_0a1/120fx90f/image.png",rarity:"blue",price:.34},"\u0423\u043A\u0443\u0441 \u0438\u0437\u0443\u043C\u0440\u0443\u0434\u043D\u043E\u0433\u043E \u044F\u0434\u0430":{weapon:"M249",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhzw8zFI2kb09qkm4e0mOX9NLLfl2du5Mx2gv2Pot-m2VG2-BdqZG-mdtLDelJoZlmBrgO7ybzrhsfp7ZvKz3Rj7Ccq4GGdwUJpddwSYA/120fx90f/image.png",rarity:"purple",price:1.38},\u041A\u0430\u0440\u043A\u0430\u0441:{weapon:"UMP-45",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf1OD3ZDBS0920jZOYqPv9NLPF2D4EsZQh2LCZ9Nr3jQ22-0RtYmz1cdCUdQBvYlmE-Fe-wem7jJTovMvXiSw0GHO1Iuc/120fx90f/image.png",rarity:"purple",price:2.46},"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u043F\u043E\u0433\u0440\u0443\u0436\u0435\u043D\u0438\u0435":{weapon:"MAC-10",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0vL3fDxBvYyJgIiOqPv1IK_ukmJH7fp9g-7J4cLx2ATn8hJkYGr7INfGIFM8Zw7Z-VK5kua-jZXptJyfz3ZiunIlsSzUgVXp1lQTAqTn/120fx90f/image.png",rarity:"purple",price:1.62},"\u0411\u0430\u0433\u0440\u043E\u0432\u043E\u0435 \u0446\u0443\u043D\u0430\u043C\u0438":{weapon:"Galil AR",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczbYQJF7dC_mL-cluHxDLfYkWNFppVw3r6XpIn3igLi-0duazj0I9eTcAQ2aV3Q_1XrwL3rgcXqvJ7AzHt9-n51xe-nTf0/120fx90f/image.png",rarity:"purple",price:1.45},"\u0412\u0440\u0435\u043C\u0435\u043D\u0430 \u0433\u043E\u0434\u0430":{weapon:"XM1014",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PLZTiVP09CzlYa0kfbwNoTdn2xZ_It33byS99333wXkqktsYWqmJo-cJgc3YFCDq1C7wbzrh5K0v86YyCE3pGB8sheESime/120fx90f/image.png",rarity:"purple",price:1.47},"\u0421\u044F\u043D-\u043B\u044E":{weapon:"CZ75-Auto",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf1OD3cid9_9K3n4WYqOfhIavdk1Rd4cJ5nqfApdqg0Q2yqhFtN27wJ4OXJFI3ZliGqVG9xOi8h5e575jJmiNk7ylz-z-DyEHqwXVj/120fx90f/image.png",rarity:"pink",price:7.98},"\u0413\u043E\u0440\u044F\u0447\u0435\u0447\u043D\u044B\u0435 \u0433\u0440\u0451\u0437\u044B":{weapon:"AWP",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJS_8W1nI-bluP8DLfYkWNFppQgj7yV9Nqi2Fbj_Eo5Ym72I9XGJwc2NAnS_1Pqxu6615W575uYznd9-n51iddPieY/120fx90f/image.png",rarity:"pink",price:9.97},\u041E\u043F\u0443\u0441\u0442\u043E\u0448\u0438\u0442\u0435\u043B\u044C:{weapon:"M4A1-S",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOxh7-Gw_alDL_UlWJc6dF-mNbN_Iv9nBrhqhVkYTz6LYSScVBtMliB_gDqwuu9h5-7vc_PynVrvXV37HfUyxPmn1gSOa-1kwUB/120fx90f/image.png",rarity:"pink",price:25.71},\u041D\u0435\u043E\u043D\u0443\u0430\u0440:{weapon:"USP-S",image:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh-TLPbTYhFRd4cJ5nqfE8dzz3Abg_hBtMWDzJ4fGdFI6YFjT-lHtlOi70Jfqvcifm3Vmvigj-z-DyA8aEmbE/120fx90f/image.png",rarity:"red",price:50.78},"\u041A\u043B\u044E\u0447 \u043E\u0442 \u0433\u0430\u043C\u043C\u0430-\u043A\u0435\u0439\u0441\u0430":{image:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUxuxpJSXPbQv2S1MDeXkh6LBBOiev2ZVBkgafOdW9Hu9jgwYXbxKP2Z7mCw28HucZ1j7mR9tvxjlfk-UY9ZW_tZNjClU49oyY/140fx106f",rarity:"gray",price:7.38},"\u0413\u0430\u043C\u043C\u0430-\u043A\u0435\u0439\u0441":{image:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFYznarJJjkQ6ovjw4SPlfP3auqEl2oBuJB1j--WoY322QziqkdpZGr3IteLMlhpw4RJCv8/140fx106f",rarity:"gray",price:.36},"\u041A\u043B\u044E\u0447 \u043E\u0442 \u0445\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u043A\u0435\u0439\u0441\u0430":{image:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUxuxpJSXPbQv2S1MDeXkh6LBBOiezrLVYygaCYdDlB79_mwdKIlq-tY-LUlzgB6sYm27-W8dvx0Vey_0ZrY3ezetEQGWlygA/140fx106f",rarity:"gray",price:7.99},"\u0425\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043E\u0440\u0443\u0436\u0435\u0439\u043D\u044B\u0439 \u043A\u0435\u0439\u0441":{image:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFEuh_KQJTtEuI63xIXbxqOtauyClTMEsJV1jruS89T3iQKx_BBqa2j3JpjVLFH1xpp0EQ/140fx106f",rarity:"gray",price:.76},"\u041A\u043B\u044E\u0447 \u043E\u0442 \u043A\u0435\u0439\u0441\u0430 \xAB\u0421\u043F\u0435\u043A\u0442\u0440\xBB":{image:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUxuxpJSXPbQv2S1MDeXkh6LBBOievzZVMy1aKeJG4R6YzgzNPclaCmN72ClDNQvJMmjLyVoY-mjQTi_EM9amztZNjCYKtxNio/140fx106f",rarity:"gray",price:7.42},"\u041A\u0435\u0439\u0441 \xAB\u0421\u043F\u0435\u043A\u0442\u0440\xBB":{image:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFY2nfKadD4U7Y7lwYXexaGlYb3QzjlUvZ0k0ujHptug2VbirkRrNW2md4SLMlhph09hpX0/140fx106f",rarity:"gray",price:.66}};function _(e){var n;const t=(n=f[e.name])!=null?n:{};return m("div",{className:Z.item,children:[m("div",{className:Z.item,children:[a("div",{style:{backgroundImage:`url(${t.image})`},className:Z.img}),m("span",{className:Z.price,children:[t.price.toFixed(2),"$"]})]}),m("div",{className:[Z.info,Z[`rarity-${t.rarity}`]].join(" "),children:[a("span",{className:Z.name,children:e.name}),a("span",{className:Z.weapon,children:t.weapon})]})]})}const Je={blue:79.92327,purple:15.98465,pink:3.19693,red:.89515},j={blue:63,purple:23,pink:9,red:5},Ve=e=>Object.fromEntries(Object.entries(e).map(([t],n)=>[t,Object.values(e).slice(0,n+1).reduce((i,u)=>i+u)])),Ce=e=>{const t=Math.random(),[n]=Object.entries(Ve(e)).find(([,i])=>t*100<i);return n};function Ye(e){var o;const[t,n]=w.useState(),[i,u]=w.useState(0);return w.useEffect(()=>{const s=H=>{const h=Ce(H),q=e.case.items.map(b=>K({name:b},f[b])).filter(({rarity:b})=>b===h);return L.sample(q)},c=s(Je),r=150+10,p=L.random(40,60),x=L.random(0,.99);n({result:c.name,items:[...new Array(p).fill().map(()=>s(j).name),c.name,...new Array(4).fill().map(()=>s(j).name)],offset:r*(p+x)-250}),setTimeout(()=>e.onDrop(c),1e4)},[]),w.useEffect(()=>u(-(t==null?void 0:t.offset)),[t==null?void 0:t.offset]),a("div",{className:D.container,children:m("div",{className:D.display,children:[a("div",{className:D.screen}),a("div",{className:D.divider}),a("div",{className:D.roller,style:{marginLeft:i},children:(o=t==null?void 0:t.items)==null?void 0:o.map((s,c)=>a(_,{name:s},c))})]})})}const Ne="_container_jxi2r_1";var He={container:Ne};function Y(e){return a("button",Q(K({className:He.container},e),{children:e.children}))}const Ke="_popup_cy8et_1",Oe="_container_cy8et_12",Ge="_preview_cy8et_19",Fe="_action_cy8et_20";var v={popup:Ke,container:Oe,preview:Ge,action:Fe,"rarity-gray":"_rarity-gray_cy8et_32","rarity-blue":"_rarity-blue_cy8et_35","rarity-purple":"_rarity-purple_cy8et_38","rarity-pink":"_rarity-pink_cy8et_41","rarity-red":"_rarity-red_cy8et_44"};function N(e){var t,n;return a("div",{className:v.popup,onClick:(t=e.onCancel)!=null?t:()=>{},children:m("div",{className:v.container,onClick:i=>i.stopPropagation(),children:[m("div",{className:[v.preview,v[`rarity-${e.item.rarity}`]].join(" "),children:[a("span",{children:[e.item.weapon,(n=e.item.name)!=null?n:e.itemName].filter(Boolean).join(" | ")}),a("img",{src:e.item.image.replace(/\d+fx\d+f(\/image\.png)?$/,"580fx468f"),alt:`${e.item.weapon} | ${e.item.name}`})]}),m("div",{className:v.action,children:[a("span",{children:e.description}),a(Y,{onClick:e.onContinue,disabled:e.buttonDisabled,children:e.button})]})]})})}const T=window.location.host.endsWith(".onion");T&&(O.dependencies.indexedDB=ae,O.dependencies.IDBKeyRange=te);const l=new O("csdrop");l.version(1).stores({items:["++id","name","ownerID"].join(", "),users:["++id","name","balance"].join(", ")});function We(){var n;const e=ne(),t=(n=E[e.case])!=null?n:{};return m("div",{className:g.case,children:[a(ze,{case:t}),a(Ie,{items:t.items})]})}function ze(e){const[t,n]=w.useState(!1),[i,u]=w.useState(),o=A(),{user:s}=y(p=>({user:p.user})),c=async()=>{const p=await l.items.where({ownerID:s.id,name:e.case.name}).first(),x=await l.items.where({ownerID:s.id,name:e.case.keyName}).first();l.items.delete(p.id),l.items.delete(x.id),n(!0)},r=p=>{l.items.add({name:p.name,ownerID:s.id}),u(p)};return m(U,{children:[m("div",{className:g.caseInfo,children:[t?a(Ye,{onDrop:r,case:e.case}):a(Xe,{onOpen:c,case:e.case}),a("span",{className:g.possibleItems,children:"\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0432 \u044D\u0442\u043E\u043C \u043A\u0435\u0439\u0441\u0435:"})]}),i&&a(N,{item:i,onContinue:()=>o("/"),description:"\u0412\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u043D\u043E\u0432\u044B\u0439 \u043F\u0440\u0435\u0434\u043C\u0435\u0442!",button:"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C"})]})}function Xe(e){var o;const{user:t}=y(s=>({user:s.user})),n=(o=G.exports.useLiveQuery(()=>l.items.where({ownerID:t.id}).toArray()))==null?void 0:o.map(({name:s})=>s),i=n==null?void 0:n.includes(e.case.name),u=n==null?void 0:n.includes(e.case.keyName);return m(U,{children:[m("div",{className:g.header,children:[a("span",{}),m("span",{className:g.title,children:["\u041E\u0441\u043C\u043E\u0442\u0440 ",e.case.name]}),a(F,{to:"/",children:a("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",children:a("path",{d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z",fill:"currentColor"})})})]}),m("div",{className:g.targets,children:[a("div",{className:g.key,children:a(_,{name:e.case.keyName})}),a("div",{className:g.case,children:a(_,{name:e.case.name})})]}),a("span",{className:g.hint,children:"\u041A\u043B\u044E\u0447 \u043C\u043E\u0436\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0434\u0438\u043D \u0440\u0430\u0437"}),a(Y,{onClick:e.onOpen,disabled:!i||!u,children:i?u?"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043A\u043B\u044E\u0447":"\u0423 \u0432\u0430\u0441 \u043D\u0435\u0442 \u043A\u043B\u044E\u0447\u0430":"\u0423 \u0432\u0430\u0441 \u043D\u0435\u0442 \u043A\u0435\u0439\u0441\u0430"})]})}function Ie(e){return a("div",{className:g.items,children:e.items.map((t,n)=>a(_,{name:t},n))})}const Qe="_balance_1nutc_14",Ae="_buttons_1nutc_18",je="_enabled_1nutc_28",Te="_tab_1nutc_32";var k={switch:"_switch_1nutc_1",balance:Qe,buttons:Ae,enabled:je,tab:Te};function B(){const{user:{balance:e}}=y(t=>({user:t.user}));return m("div",{className:k.switch,children:[a("span",{}),m("div",{className:k.buttons,children:[a(z,{to:"/",children:"\u0418\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C"}),a(z,{to:"/shop",children:"\u041C\u0430\u0433\u0430\u0437\u0438\u043D"}),a(z,{to:"/users",children:"\u0412\u044B\u0445\u043E\u0434"})]}),m("span",{className:k.balance,children:["$",e.toFixed(2)]})]})}function z(e){return window.location.pathname===e.to?a("div",{className:[k.tab,k.enabled].join(" "),children:e.children}):a(F,{to:e.to,children:a("div",{className:k.tab,children:e.children})})}const Be="_container_7suhb_1",Re="_page_7suhb_7",qe="_users_7suhb_14",Se="_items_7suhb_15",Pe="_user_7suhb_14",Me="_name_7suhb_43",$e="_buyButton_7suhb_57",ea="_kit_7suhb_67",aa="_images_7suhb_78";var d={container:Be,page:Re,users:qe,items:Se,user:Pe,name:Me,buyButton:$e,kit:ea,images:aa};function ta(){const{user:e}=y(n=>({user:n.user})),t=G.exports.useLiveQuery(()=>l.items.where({ownerID:e.id}).toArray());return a("div",{className:d.container,children:m("div",{className:d.page,children:[a(B,{}),a("div",{className:d.items,children:(t==null?void 0:t.length)?t==null?void 0:t.map(({name:n},i)=>{const u=W.includes(n),o=u&&Object.entries(E).find(s=>s[1].name===n)[0];return u?a(F,{to:`/open/${o}`,className:d.buyButton,children:a(_,{name:n})},i):a(na,{name:n},i)}):a("div",{children:"\u0418\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C \u043F\u0443\u0441\u0442. \u041A\u0443\u043F\u0438\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u0439 \u043A\u0435\u0439\u0441 \u0438 \u043A\u043B\u044E\u0447 \u043A \u043D\u0435\u043C\u0443 \u0432\u043E \u0432\u043A\u0434\u0430\u0434\u043A\u0435 \u041C\u0430\u0433\u0430\u0437\u0438\u043D."})})]})})}function na(e){const[t,n]=w.useState(!1),i=f[e.name].price,{user:u}=y(r=>({user:r.user})),{balance:o}=u,s=J(),c=async()=>{await l.users.update(u.id,{balance:new V(o).plus(i).toNumber()}),s({type:"user/set",user:await l.users.get(u.id)});const r=await l.items.where({ownerID:u.id,name:e.name}).first();await l.items.delete(r.id),n(!1)};return m(U,{children:[a("div",{onClick:()=>n(!0),className:d.buyButton,children:a(_,{name:e.name})}),t&&a(N,{item:f[e.name],itemName:e.name,description:`\u041F\u0440\u043E\u0434\u0430\u0442\u044C \u044D\u0442\u043E\u0442 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u0437\u0430 $${i}?`,onContinue:c,onCancel:()=>n(!1),button:"\u041F\u0440\u043E\u0434\u0430\u0442\u044C"})]})}const ua=[...W,...Ze];function ia(){return a("div",{className:d.container,children:m("div",{className:d.page,children:[a(B,{}),a("div",{className:d.items,children:ua.map((e,t)=>a(sa,{name:e},t))}),W.map((e,t)=>a(oa,{name:e},t))]})})}function sa(e){const[t,n]=w.useState(!1),i=f[e.name].price,{user:u}=y(r=>({user:r.user})),{balance:o}=u,s=J(),c=async()=>{await l.users.update(u.id,{balance:new V(o).minus(i).toNumber()}),s({type:"user/set",user:await l.users.get(u.id)}),await l.items.add({ownerID:u.id,name:e.name}),n(!1)};return m(U,{children:[a("div",{onClick:()=>n(!0),className:d.buyButton,children:a(_,{name:e.name})}),t&&a(N,{item:f[e.name],itemName:e.name,description:`\u041A\u0443\u043F\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u0437\u0430 $${i}?`,onContinue:c,onCancel:()=>n(!1),button:o<i?"\u041D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u0434\u0435\u043D\u0435\u0433":"\u041F\u0440\u0438\u043E\u0431\u0440\u0435\u0441\u0442\u0438",buttonDisabled:o<i})]})}function oa(e){const[t,n]=w.useState(!1),i=Object.entries(E).find(h=>e.name===h[1].name),u=f[e.name],o=f[i[1].keyName],s=new V(u.price*10+o.price*10).mul(.81),c=`\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442 ${L.capitalize(i[0])} (10 \u043A\u0435\u0439\u0441\u043E\u0432 \u0438 10 \u043A\u043B\u044E\u0447\u0435\u0439)`,{user:r}=y(h=>({user:h.user})),{balance:p}=r,x=J(),H=async()=>{await l.users.update(r.id,{balance:new V(p).minus(s).toNumber()}),x({type:"user/set",user:await l.users.get(r.id)}),n(!1);for(let h=0;h<10;h++)await l.items.add({ownerID:r.id,name:e.name}),await l.items.add({ownerID:r.id,name:i[1].keyName})};return m(U,{children:[m("div",{className:d.kit,children:[a("span",{children:c}),m("div",{className:d.images,children:[a("img",{src:u.image}),a("img",{src:o.image})]}),m(Y,{onClick:()=>n(!0),children:["\u041A\u0443\u043F\u0438\u0442\u044C \u0437\u0430 $",s.toFixed(2)," (-19%)"]})]}),t&&a(N,{item:u,itemName:c,description:`\u041A\u0443\u043F\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442 \u0437\u0430 $${s.toFixed(2)}?`,onContinue:H,onCancel:()=>n(!1),button:p<s?"\u041D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u0434\u0435\u043D\u0435\u0433":"\u041F\u0440\u0438\u043E\u0431\u0440\u0435\u0441\u0442\u0438",buttonDisabled:p<s})]})}const ma="modulepreload",R={},ca="/",ra=function(t,n){return!n||n.length===0?t():Promise.all(n.map(i=>{if(i=`${ca}${i}`,i in R)return;R[i]=!0;const u=i.endsWith(".css"),o=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${o}`))return;const s=document.createElement("link");if(s.rel=u?"stylesheet":ma,u||(s.as="script",s.crossOrigin=""),s.href=i,document.head.appendChild(s),u)return new Promise((c,r)=>{s.addEventListener("load",c),s.addEventListener("error",r)})})).then(()=>t())};function la(){const e=G.exports.useLiveQuery(()=>l.users.toArray()),[t,n]=w.useState(!1),i=J(),u=A(),o=async()=>{n(!0);const c=()=>{const p=L.sample(["Liam","Noah","Oliver","William","Elijah","James","Benjamin","Lucas","Mason","Ethan","Thomas","Jackson"]),x=L.sample(["Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez","Hernandez","Lopez","Gonzales"]);return`${p} ${x}`},r=(await ra(()=>import("./avatars.e3911f3c.js"),[])).default;await l.users.add({name:c(),balance:100,avatar:L.sample(r)}),n(!1)},s=c=>async()=>{const r=await l.users.where({id:c}).first();await i({type:"user/set",user:r}),u("/")};return a("div",{className:d.container,children:a("div",{className:d.page,children:e&&m("div",{className:d.users,children:[(e==null?void 0:e.length)?e.map((c,r)=>m("button",{className:d.user,onClick:s(c.id),children:[a("img",{src:c.avatar,width:30}),a("span",{className:d.name,children:c.name}),m("span",{children:[c.balance.toFixed(2),"$"]})]},r)):a("div",{children:"\u041D\u0435\u0442 \u0441\u043E\u0437\u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439"}),a(Y,{onClick:o,disabled:t,children:t?"\u0418\u0434\u0435\u0442 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F...":"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"}),T&&a("div",{children:"\u041E\u0441\u0442\u043E\u0440\u043E\u0436\u043D\u043E! \u042D\u0442\u043E\u0442 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0437\u0430\u043F\u0440\u0435\u0449\u0430\u0435\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u043F\u0430\u043C\u044F\u0442\u044C, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0441\u0431\u0440\u043E\u0441\u044F\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0438\u043B\u0438 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F \u0432\u043A\u043B\u0430\u0434\u043A\u0438."})]})})})}function da(){const{user:e}=y(t=>({user:t.user}));return a(ue,{children:m(ie,{children:[a(C,{path:e?"/users":"*",element:a(la,{})}),e&&m(U,{children:[a(C,{path:"/open/:case",element:a(We,{})}),a(C,{path:"/shop",element:a(ia,{})}),a(C,{path:"/",element:a(ta,{})})]})]})})}function pa(e=null,t){switch(t.type){case"user/set":return t.user;default:return e}}var wa=se(oe({user:pa}));me.render(a(ce,{store:wa,children:a(da,{})}),document.getElementById("root"));
