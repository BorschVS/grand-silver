import{j as e,r as l}from"./index-JSynl78t.js";import{A as m}from"./About-CSoyYir3.js";import{n as c}from"./index.browser-DP16PUbO.js";import{S as v,N as x,a as g,b as u,u as p,R as j}from"./Rooms-Bzqm2hbi.js";import{S as w}from"./Service-DM3cBKW3.js";import{H as $}from"./Helmet-D_lhZgb4.js";import"./gallery-DvrF1OPj.js";import"./right-DPtDYjMe.js";import"./Picture-CF92Sgth.js";const T="_button_gosm9_16",f="_hero_gosm9_108",N="_overlay_gosm9_123",b="_container_gosm9_177",I="_title_gosm9_194",S="_text_gosm9_208",C="_slideToTop_gosm9_1",B="_slideToBot_gosm9_1",R="_fadeIn_gosm9_1",L="_shine_gosm9_1",y={button:T,hero:f,overlay:N,container:b,title:I,text:S,slideToTop:C,slideToBot:B,fadeIn:R,shine:L},{hero:E,overlay:A,container:H,title:D,text:P,button:M,shine:V}=y,k=()=>e.jsx("section",{className:E,children:e.jsx("div",{className:A,children:e.jsxs("div",{className:H,children:[e.jsx("h1",{className:D,children:"grand silver"}),e.jsx("p",{className:P,children:"Тут зливаються комфорт, та бездоганне обслуговування."}),e.jsx("button",{type:"button",className:M,children:e.jsx("span",{className:V,children:"Бронювати"})})]})})}),G="_text_1vvh6_16",W="_hiddenTitle_1vvh6_34",Z="_reviewCard_1vvh6_102",q="_thumb_1vvh6_115",z="_authorContainer_1vvh6_120",J="_reviewContainer_1vvh6_136",K="_info_1vvh6_141",O="_age_1vvh6_145",Q="_stars_1vvh6_150",U="_slideToTop_1vvh6_1",X="_slideToBot_1vvh6_1",Y="_fadeIn_1vvh6_1",F="_shine_1vvh6_1",d={text:G,hiddenTitle:W,reviewCard:Z,thumb:q,authorContainer:z,reviewContainer:J,info:K,age:O,stars:Q,slideToTop:U,slideToBot:X,fadeIn:Y,shine:F},ee="/grand-silver/assets/user-avatar-Bgvog690.png",se=n=>l.createElement("svg",{width:13,height:11,viewBox:"0 0 13 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},l.createElement("path",{d:"M6.5 0L7.91068 4.05836L12.2063 4.1459L8.78254 6.74164L10.0267 10.8541L6.5 8.4L2.97329 10.8541L4.21746 6.74164L0.793661 4.1459L5.08932 4.05836L6.5 0Z",fill:"#545454"})),te=()=>(o,s)=>{const t=Math.abs(o),i=t%10,r=t%100;return r>=11&&r<=19?s[2]:i===1?s[0]:i>=2&&i<=4?s[1]:s[2]},{reviewItem:ne,reviewCard:ie,hiddenTitle:oe,authorContainer:re,reviewContainer:ae,thumb:ce,info:le,name:de,text:he,stars:_e,starIcon:me}=d,ve=({review:n})=>{const{author:o,rating:s,age:t,comment:i}=n,r=Array.from({length:s},(ye,_)=>e.jsx("span",{className:me,children:e.jsx(se,{})},_)),a=te(),h=["рік","роки","років"];return e.jsx("li",{className:ne,children:e.jsxs("article",{className:ie,children:[e.jsx("h3",{className:oe,children:"review"}),e.jsxs("div",{className:re,children:[e.jsx("div",{className:ce,children:e.jsx("img",{src:ee,alt:"Фото користувача"})}),e.jsxs("div",{className:le,children:[e.jsx("p",{className:de,children:o}),e.jsx("p",{className:d.age,children:`${t} ${a(t,h)}`})]})]}),e.jsxs("div",{className:ae,children:[e.jsx("div",{className:_e,children:r}),e.jsx("p",{className:he,children:i})]})]})})},xe=[{id:c(),author:"Іван Петров",rating:5,age:20,comment:"Чудовий досвід! Обслуговування було відмінним, а персонал дуже дружелюбний. Я відразу рекомендую це місце."},{id:c(),author:"Олена Коваль",rating:4,age:21,comment:"Я чудово провела час тут. Їжа була смачною, а атмосфера - затишною. Обов'язково повернусь знову."},{id:c(),author:"Михайло Іваненко",rating:5,age:34,comment:"Дивовижне обслуговування! Персонал пішов вище і далі, щоб переконатися, що ми мали фантастичний досвід. Я не можу дочекатися наступного візиту."},{id:c(),author:"Олена Сидоренко",rating:3,age:46,comment:"Їжа була непоганою, але обслуговування трохи повільне. В цілому, це був нормальний досвід."},{id:c(),author:"Давид Васильчук",rating:5,age:26,comment:"Абсолютно в захваті! Їжа була смачною, а атмосфера - ідеальною. Обов'язково рекомендую це будь-кому."}],ge=()=>xe,ue="_subtitle_8l7he_16",pe="_container_8l7he_38",je="_reviews_8l7he_115",we="_wrapper_8l7he_125",$e="_slideToTop_8l7he_1",Te="_slideToBot_8l7he_1",fe="_fadeIn_8l7he_1",Ne="_shine_8l7he_1",be={subtitle:ue,container:pe,reviews:je,wrapper:we,slideToTop:$e,slideToBot:Te,fadeIn:fe,shine:Ne},{reviews:Ie,container:Se,wrapper:Ce,subtitle:Be,list:Re}=be,Le=()=>{const n=l.useRef(null),[o,s]=l.useState(0),t=ge(),{showPrevSlide:i,showNextSlide:r}=p(o,t,s,n);return e.jsx("section",{className:Ie,children:e.jsxs("div",{className:Se,children:[e.jsx("h2",{className:Be,children:"відгуки"}),e.jsxs("div",{className:Ce,children:[e.jsx(v,{modules:[x],spaceBetween:50,slidesPerView:1,navigation:!0,pagination:{clickable:!0},scrollbar:{draggable:!0},onSlideChange:a=>{s(a.activeIndex)},ref:n,children:e.jsx("ul",{className:Re,children:t.map(a=>e.jsx(g,{children:e.jsx(ve,{review:a})},a.id))})}),e.jsx(u,{total:t.length,current:o,prev:i,next:r})]})]})})},We=()=>e.jsxs("main",{children:[e.jsx($,{children:e.jsx("title",{children:"GRAND SILVER"})}),e.jsx(k,{}),e.jsx(m,{}),e.jsx(j,{}),e.jsx(w,{}),e.jsx(Le,{})]});export{We as default};
