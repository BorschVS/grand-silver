import{r as d,j as e,D as g}from"./index-DfO_hHMg.js";import{S as k,a as $}from"./right-D5zT7s8v.js";import{Q as M,B as P,H as E}from"./ReactToastify-CbTCqS4R.js";import{H as Y}from"./Helmet-DGPi6neQ.js";const A="_select_188yu_17",H="_selectOptions_188yu_97",R="_selectOption_188yu_97",W="_slideToTop_188yu_1",F="_slideToBot_188yu_1",K="_fadeIn_188yu_1",L="_shine_188yu_1",Q={selectСontainer:"_selectСontainer_188yu_17",select:A,selectOptions:H,selectOption:R,slideToTop:W,slideToBot:F,fadeIn:K,shine:L},{selectСontainer:q,select:z,selectArrow:G,selectOptions:J,selectOption:U}=Q,V=[{label:"Бунгало"},{label:"Котедж"},{label:"Номер"}],X=({isSelectOpen:a})=>{const[l,r]=d.useState(null),[_,h]=d.useState(!1);d.useEffect(()=>{a(_)},[_]);const m=t=>{r(t),h(!1)};return e.jsxs("div",{className:q,children:[e.jsxs("div",{className:z,onClick:()=>h(!_),children:[l||"Тип розміщення",e.jsx("span",{className:G,children:"▾"})]}),_&&e.jsx("ul",{className:J,children:V.map(t=>e.jsx("li",{className:U,onClick:()=>m(t.label),children:t.label},t.label))})]})},Z="_container_dieup_71",ee="_title_dieup_83",te="_blur_dieup_99",se="_slideToTop_dieup_1",ne="_slideToBot_dieup_1",oe="_fadeIn_dieup_1",ce="_shine_dieup_1",x={container:Z,title:ee,blur:te,slideToTop:se,slideToBot:ne,fadeIn:oe,shine:ce},ae="_monthYearPicker_1ugx5_71",le="_date_1ugx5_80",ie="_slideToTop_1ugx5_1",re="_slideToBot_1ugx5_1",de="_fadeIn_1ugx5_1",_e="_shine_1ugx5_1",j={monthYearPicker:ae,date:le,slideToTop:ie,slideToBot:re,fadeIn:de,shine:_e},he=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],ue=()=>{const{year:a,setYear:l,month:r,setMonth:_}=d.useContext(g),h=()=>{const o=r-1<0?11:r-1;_(o),o===11&&l(a-1)},m=()=>{const o=r+1>11?0:r+1;_(o),o===0&&l(a+1)},t=()=>{l(a-1)},y=()=>{l(a+1)};return e.jsxs("div",{className:j.monthYearPicker,children:[e.jsxs("div",{className:j.date,children:[e.jsx("span",{onClick:h,children:e.jsx(k,{})})," ",he[r]," ",e.jsx("span",{onClick:m,children:e.jsx($,{})})]}),e.jsxs("div",{className:j.date,children:[e.jsx("span",{onClick:t,children:e.jsx(k,{})})," ",a," ",e.jsx("span",{onClick:y,children:e.jsx($,{})})]})]})},pe="_calendar_1xp5j_71",xe="_weekday_1xp5j_88",me="_day_1xp5j_94",ye="_days_1xp5j_98",fe="_today_1xp5j_103",je="_selected_1xp5j_108",Te="_start_1xp5j_112",ke="_end_1xp5j_116",$e="_slideToTop_1xp5j_1",Oe="_slideToBot_1xp5j_1",ge="_fadeIn_1xp5j_1",De="_shine_1xp5j_1",u={calendar:pe,weekday:xe,day:me,days:ye,today:fe,selected:je,start:Te,end:ke,slideToTop:$e,slideToBot:Oe,fadeIn:ge,shine:De},O=["Пн","Вт","Ср","Чт","Пт","Сб","Нд"],we=()=>{const{year:a,month:l}=d.useContext(g),[r,_]=d.useState([]),[h,m]=d.useState(0),[t,y]=d.useState(null),[o,T]=d.useState(null),D=s=>P(s,{position:"top-center",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark",transition:E});d.useEffect(()=>{const s=new Date(a,l+1,0).getDate();m(new Date(a,l,1).getDay()-1===-1?6:new Date(a,l,1).getDay()-1);const c=Array.from({length:s},(n,i)=>{const p=i+1,f=(h+i+7)%7;return{year:a,month:l,day:p,dayOfWeek:O[f]}});_(c)},[a,l]);const w=(s,c,n)=>{const i=new Date;return new Date(n,c,s)<i},S=s=>{const c=new Date(s.year,s.month,s.day);if(w(s.day,s.month,s.year)){D("Оберіть дату у майбутньому");return}if(!t||t&&o)y(s),T(null);else if(t&&!o){const n=new Date(t.year,t.month,t.day);c<n?y(s):T(s)}},C=(s,c)=>{if(t&&o){const n=new Date(t.year,t.month,t.day),i=new Date(o.year,o.month,o.day),p=new Date(a,c,s);return p>=n&&p<=i}return!1},N=(s,c,n)=>{const i=new Date;return s===i.getDate()&&c===i.getMonth()&&n===i.getFullYear()};d.useMemo(()=>{if(t&&o){const s=new Date(t.year,t.month,t.day);return(new Date(o.year,o.month,o.day)-s)/(1e3*60*60*24)+1}return 0},[t,o]);const I=()=>{const s=[];let c=[];for(let n=0;n<h;n++)c.push(e.jsx("td",{className:u.emptyCell},`empty-${n}`));return r.forEach((n,i)=>{const p=C(n.day,n.month),f=n.day===(t==null?void 0:t.day)&&n.month===(t==null?void 0:t.month)&&n.year===(t==null?void 0:t.year),b=n.day===(o==null?void 0:o.day)&&n.month===(o==null?void 0:o.month)&&n.year===(o==null?void 0:o.year),B=N(n.day,n.month,n.year),v=`${u.day} ${p?u.selected:""} ${f?u.start:""} ${b?u.end:""} ${B?u.today:""}`.trim();c.push(e.jsx("td",{className:v,onClick:()=>S(n),children:n.day},i)),((h+i+1)%7===0||i===r.length-1)&&(s.push(e.jsx("tr",{children:c},s.length)),c=[])}),s};return e.jsxs("section",{children:[e.jsx(M,{}),e.jsxs("table",{className:u.calendar,children:[e.jsx("thead",{children:e.jsx("tr",{children:O.map((s,c)=>e.jsx("th",{className:u.weekday,children:s},c))})}),e.jsx("tbody",{children:I()})]})]})},Se=()=>{const[a,l]=d.useState(!1),r=h=>{l(h)},_=a?`${x.box} ${x.blur}`:x.box;return e.jsx("section",{className:x.section,children:e.jsxs("div",{className:x.container,children:[e.jsx("h3",{className:x.title,children:"Оберіть дату заїзду та виїзду"}),e.jsxs("div",{children:[e.jsx(X,{isSelectOpen:r}),e.jsxs("div",{className:_,children:[e.jsx(ue,{}),e.jsx(we,{})]})]})]})})},Be=()=>e.jsxs("main",{children:[e.jsx(Y,{children:e.jsx("title",{children:"Book"})}),e.jsx(Se,{})]});export{Be as default};
