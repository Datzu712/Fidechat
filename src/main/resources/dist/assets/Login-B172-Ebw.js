import{r as a,j as e,u as M}from"./index-CsJGC5FH.js";import{f as I,F as q,E as B,m as K,u as h,b as z,a as f,C as H}from"./CloseButton-D_rpZJHE.js";function Z(){const t=a.useRef(!0),s=a.useRef(()=>t.current);return a.useEffect(()=>(t.current=!0,()=>{t.current=!1}),[]),s.current}const g=2**31-1;function y(t,s,r){const n=r-Date.now();t.current=n<=g?setTimeout(s,n):setTimeout(()=>y(t,s,r),g)}function Y(){const t=Z(),s=a.useRef();return I(()=>clearTimeout(s.current)),a.useMemo(()=>{const r=()=>clearTimeout(s.current);function n(i,l=0){t()&&(r(),l<=g?s.current=setTimeout(i,l):y(s,i,Date.now()+l))}return{set:n,clear:r,handleRef:s}},[])}const X={[B]:"showing",[K]:"showing show"},S=a.forwardRef((t,s)=>e.jsx(q,{...t,ref:s,transitionClasses:X}));S.displayName="ToastFade";const k=a.createContext({onClose(){}}),Q=a.forwardRef(({bsPrefix:t,closeLabel:s="Close",closeVariant:r,closeButton:n=!0,className:i,children:l,...u},c)=>{t=h(t,"toast-header");const o=a.useContext(k),d=z(m=>{o==null||o.onClose==null||o.onClose(m)});return e.jsxs("div",{ref:c,...u,className:f(t,i),children:[l,n&&e.jsx(H,{"aria-label":s,variant:r,onClick:d,"data-dismiss":"toast"})]})});Q.displayName="ToastHeader";const J=a.forwardRef(({className:t,bsPrefix:s,as:r="div",...n},i)=>(s=h(s,"toast-body"),e.jsx(r,{ref:i,className:f(t,s),...n})));J.displayName="ToastBody";const R=a.forwardRef(({bsPrefix:t,className:s,transition:r=S,show:n=!0,animation:i=!0,delay:l=5e3,autohide:u=!1,onClose:c,onEntered:o,onExit:d,onExiting:m,onEnter:N,onEntering:L,onExited:G,bg:j,...O},F)=>{t=h(t,"toast");const E=a.useRef(l),x=a.useRef(c);a.useEffect(()=>{E.current=l,x.current=c},[l,c]);const w=Y(),A=!!(u&&n),b=a.useCallback(()=>{A&&(x.current==null||x.current())},[A]);a.useEffect(()=>{w.set(b,E.current)},[w,b]);const U=a.useMemo(()=>({onClose:c}),[c]),v=!!(r&&i),C=e.jsx("div",{...O,ref:F,className:f(t,s,j&&`bg-${j}`,!v&&(n?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"});return e.jsx(k.Provider,{value:U,children:v&&r?e.jsx(r,{in:n,onEnter:N,onEntering:L,onEntered:o,onExit:d,onExiting:m,onExited:G,unmountOnExit:!0,children:C}):C})});R.displayName="Toast";const p=Object.assign(R,{Body:J,Header:Q}),D={"top-start":"top-0 start-0","top-center":"top-0 start-50 translate-middle-x","top-end":"top-0 end-0","middle-start":"top-50 start-0 translate-middle-y","middle-center":"top-50 start-50 translate-middle","middle-end":"top-50 end-0 translate-middle-y","bottom-start":"bottom-0 start-0","bottom-center":"bottom-0 start-50 translate-middle-x","bottom-end":"bottom-0 end-0"},T=a.forwardRef(({bsPrefix:t,position:s,containerPosition:r,className:n,as:i="div",...l},u)=>(t=h(t,"toast-container"),e.jsx(i,{ref:u,...l,className:f(t,s&&D[s],r&&`position-${r}`,n)})));T.displayName="ToastContainer";const W="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA6lBMVEULEJ////////0AAJr//v8LEJ4AAJILEKEAAIkAAI0AAJgAAIZvcq0AAJ2MjcgAAI8AAIL6+/8ACJ3y8//39/9nabTr7PjR0+/d3vd0drE+P5tmZ67W1+/AweLw8/+Agb7f4fYsL52foc0XGpVKS5qentDLy+drbK4jJZVWV6YlKItzdbgQEolJTKq9v+fOz+0vMZe/wd2rrNmxstVYWaSUlspcX6QyNJcaHpJNUKjW1+rj4/G0teU5O5sbHomSlsV/gbhiZKINEpSen9dPUZwsL546PaAtMI6ws+uIib6bnMQ/QJdfYbNTVavKMhf7AAAMaklEQVR4nO1dCVvbOBO2rNiSbBw7jkk4EhJSSLgWaLjLtqFst3ws3f//dz5JtnPYMtgUsKL1WxqOJ/Gj1zOaGY1GY02rUKFChQoVKlSoUKFChQoVKlSoUOG/BkRBvxlG2QN5JyDHxJhATlJFIEh2dofD7ghDNSk6ZLMNONobpnoUETL3hpyeTv83901NsZmIEB4FjJ4Oauwl2LEUk6KPx5SYDiLooHHglD2mtwSCeMi1k4mP/sBe255CQkTQbnOC+lSE9OtQHT1F8GANpBjqJ6oIEWlwrw/CKTidh+znxp5f9tjeBEhzjmKCC9Abfyhha6gE8VqKHTc5nKECigqPOrF2zuTI52Sghpb6uB2raK22IEJwbGssAl9mKSIN+faJSEU5TlWYhlkEqc8HPXeZpReBE0xbUf63XawCQW8odBPsSwGCBpVgF+i1tBDZ773lJ8hU9DMzoCKG/SdTgTwGwp/DRUQN1BIcxzZEy7/8RfaZyIBSdPbJknt6pBkGYgT1UEnnOdK1fc+2FNBQTUiQ8mvsYpPGAYqoaG1mOWN0T10V8k9URvYuWFwO8inYPicQLXUYGgPZg0VHr7MUVGsdQxSl9JccCF/MZ9WiCXjhKWFg+L4Lniz6eOYSj7+pEGaHQLieCtHaN/aSe8AIzEoi3EvMQXC7idXZa0KIJAiCRh3TCWgow9BdB/qCmx8TFmMr4ANDIPdwjiAV5XAD+6pIjwGR0YKbXxsRvhGqDEfkbvIFb+ggQPOObfQayhCkpsS8rIUbS/z/4MhUIn6JYFCG1iYXX41T7F4RX40QdAbD6oFYgJ1Lz+HsVKHIS2MMFG/ytnrUA6rjICIwYflen09ArEKWSQx4RSfgtTsNQRXjydyCuXpOPTzXT0MdNzEHQ7MULXWaQXV+FUMFYChbNPrfgXqenjGK9RLx8mbfcSCEFgV0HN+nf4k1d0nJT6cdQo5lYny/9/PmZpXj183G1R6xiQlhfCOWlKTGa7dt++qwfvzlttmYpWhqQev2y5/1zVPbtqJcxvIZIqaajul9rR+35qjF5ZVROiO4/bN34FGSyydDOmIf2hsDQVGXnvyp/fgNO9qyLRqRbx2td8A0QZrYzJ5nydf9lzwzvEwEzetJP9pYEuwVxpvac2hfEkd+gpHtR5qFJ1sgsU0Yi1NQRBO+7fNX6U8hxHGZb2/eJutInvmN1wTrVI0bj54v9yZ3KAGqoN2U6Pi+faO11j5pt9eaC7Z1Xmu73rTUREqmUdJpNYg8wjya3cnNJ4I53L1/J8Mm41Wbo8hfbmU/L0NDM7aLPS8cTnXtbo9Y0A/3meiboIm3H6MC9trC1Gyeu3IrqsMLDmuLStpawYwdP3cXx2jUm+D1ZkrU1PKOiCbv+TwEv7WSjkAHZx47OzGTTOj26KvpdeffG39wJO+mN7K+bgFuFeetTC/axU5JxdB8b5CyNlRpR+aHD/0lRPfc2mjNq13o60ck0k7hB+msTWtqY99CUqopPG0lNnnp2NeZymXtYxsIMUVNhQCtB/nCGxZo27fpwQ4IX/9ljtfwj7ZSBHXQl+9MELUb3klSfgAMbT7SZzQOmYfJEJVdZWzLR5EMEsVOdOCt65dLZRD+kpQhw6r1AYMuBGs1FcjU6DBZPekzImSCsg5T9OhlbrFcq2LkX3NHqC+Y0q4drfiezZUir5/SUnqZXSITQapq3eRsAqDxLU85l6G59bTD0EFwCt992LlhaHAksPkDN9/H/aNG+sM6GBOJ1DSlaAzNPT9HVoJtJdrHyVnIkh5BDjP1UUBmPU2QucKccQncTDDU+dejKU1k43tBQs3ob42r3HGJ7zWTt4f5xL4tyzoKkQuQOMVL/x17uWsumJ0S4VQWNfWvF0XA8y7gEOaZheFbYC/FjinFxJRCiIjNwrQpDLxnlhRJODsCCeqgI0XoRn06uQU6SJLsFhmdf9QXnfGS48S6gWi8BkBqgPXQX+czhsgdChiyxgrvOvYcoNGYkWEmHpzoHXkuo1ljoZqeSZB4M6idCdLxjN4qtsCz7gTnZXVwW37Ghg7ASttBimGxY6Dwu8BYAb25LcFERLgtOq58wQx9fpLOjTgN/l2C6Bu5IhGCUbHj9P52U7hfMym9h4shWr9SNDYKNgz41BLeqG75eUVEhJa0f1RsAqF7McOOBKaGCIdGR1ZkaAYyxQxbR6UzhD9r6XHRsLuQIzOQ8EbRmRk8lG5MrUdh54dBQQsh1lJ683ZKbgBiGO6ZkOFdQSvv/wyEBMH3kpPfSCN9Yd+HFSfcYuK5tuwfjPA3hOCKQIQgulCp28H+Xmp1zvEdxiTQyz+w5ckwg2EdauXWoDjnomHpjRsnLNbLAbYlTNYzCIZLlOdyyu8NKIqYmcN3zdxw7esLbpDTVlkHF1bJMrQGqVHxsQ7q+fHXML3ZHfED4K+S10/IFKeQCkLPLCKiMiyZodsRSZAXAOXk9sIb7ko+pCHMr8wEkIfiM29lN+nc4d6kPIYHTfEA80nwGWYg1F0WwZe6e+E8pReuv89wCh0Myj5r6vwQj6z28gTLhT5rOFQuw+/vRDDcau3cl57EcMSxyJvIr9kJS41K3X4yYEa0Faz8Ni7/JqXnaCigaN+QouXC34DDX6NChVJFSBc9WQzvFekHgdgKP4Nh2WN7GyBzV3UZZjFs7inCUMtkKMN+w5sAZszD4GeeLe4lgJHBMMxiKAFL7C10cKkKw4yYRgcjRboLZEVteuGMsLQQry0oJsowvMxgOC69iOJtYAgrfRi6EhRRvAWQcyDYUOHVTHIV+L4e/jfxxibol7+z+TZARFA5yxAcqBK2uVm9/3+o8GgDjS0uUn25I6wr4i6QNclIO+0qYkw1uJLBsGDVl6xAmrOTkd0uWLknL3xRLRMvp314gw14GW4SIunttfBQT69IBW3iotF3GWq8Nc0cZ0zE49+p0ZanYx1C1rqIYQ3oW97rN40MzXCtQtWb7wfDP00+gYPPRKqm+86rSygQ8v53bsuRJjA0nC4Zip6GQ1B8+r4gkAbP6fLkqxyNlJF7JqxfBuDWjlsMFL+ox+uOx0cyhA0IrmZtpv16da7GOg9PdwUX92862NcB4SyGx/i1l4xdkN785Jd/ei0qSRNs+gavPJjFTndHOJPhqSXxkRkBLnKeIU3AxzxOYhU5/8LyHSPSfFb8KnAZut7CResMuEri8PwMvWTflqLrNyKiEz2MIuiZryiGgRvc3bAGMD1JMnbwRkyQ2kIqg6LzCNnT55IGsqzAEBYcPAsxyHsce9a7hsyqHSevm8fvANZSPn0Akf/hK8xnDOPuVwa9VnydrYJnNt4RLAQBohOSAHzhJTEvyjHuLGE4D83pdXalESGNa4S10NwcRkfW8+kq8r1O1PQrX9eQDwN65ompKwVOK/t2XNBOGdbLP/I0B/ggCGpqoaY+5SttQvFTHyNQXyhBPBPDQG5WVlHXGzko8kZLjj2cXoQuL2H09w8Yfx4gW1QOHapbcOm+1P2BHSuxDjpzihD3GJKEIB0GfGpkCZE3fNT4wx3nPrEwdNaq71czFp8uU8OIKZB5J+hJCqJFx7EHF2fVlGGYc0KmPZ6tT+i3Hzn96EcC2ePp+JIMqekfeY4wvEG8W63X2wqFF/WHrLsymRkt6oSIvGHUEUMgRABOzokFWWvB6OEW4bOQ2KEu0x6tTW8MLw4+k6JbRBo+tzbi+mfmOTqPV8RkXZ9ngJZLdgb9+U/RH06kfZief98R9Q2Yza6g889o28WYENclBJP7jbuz21ryrrSxlAS5O4C28FHbcVsk/r0RrJ187jK0+0EtvgNzHb7b0kpQ43HlOEtPn8Vct+ghlnn32KAW9S4A8/1Zc9ftR1b0zJYiDfwMkPmUeRTqZUk2luGp6gjylqSR7uWnyrzE2pMMSe4XQA2O7z6cgLidbE7pMX6NOosKpO48Hw+NrhL2T0D+Q4hRZLcEz8yNFxDMlXv7XWFBWBa6N9TEGMv0zFXkkKs6b0w69XnzSssi0NrUE26NN8gS1t8g38RfJ50ZpWRXvpjw8PCILGNJMT9oD03s/hqcbKXOYUZ0G2tnqwQv5RNKwgSEwaeki8npr8k/x+1Wq9VsNiiazVar3x08/vsJu9Ejx6VaKxUFfx6LZdJg2/20vf0Hxen2vUlc05ouNMoe4m+Dm0j+xCffd5zwWU+aArILq0WM3Anh5SNrzL1WqFChQoUKFSpUqFChQoUKFSpUqFChQoUKFSpUqKAG/g/ohrgjuklduwAAAABJRU5ErkJggg==";function $(){const[t,s]=a.useState(""),[r,n]=a.useState(""),[i,l]=a.useState([]),u=M(),c=async o=>{o.preventDefault();const d=o.currentTarget;if(!d.checkValidity()){o.stopPropagation(),d.classList.add("was-validated");return}if(!t||!r){l([...i,new Error("Email and password are required")]);return}const m=await fetch("http://localhost:8080/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:r}),credentials:"include"});if(m.ok){const{data:N}=await m.json();localStorage.setItem("data",JSON.stringify(N)),u("/")}else l([...i,new Error("Invalid email or password")])};return e.jsxs("section",{children:[e.jsx(T,{position:"top-end",className:"p-3",children:i.map((o,d)=>e.jsxs(p,{onClose:()=>{const m=[...i];m.splice(d,1),l(m)},delay:3e3,autohide:!0,children:[e.jsx(p.Header,{children:e.jsx("strong",{className:"me-auto",children:"Error"})}),e.jsx(p.Body,{children:o.message})]},d))}),e.jsx("div",{className:"container mt-5",children:e.jsx("div",{className:"row justify-content-center",children:e.jsx("div",{className:"col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4",children:e.jsx("div",{className:"card border border-light-subtle rounded-3 shadow-sm",children:e.jsxs("div",{className:"card-body p-3 p-md-4 p-xl-5",children:[e.jsx("div",{className:"text-center mb-3",children:e.jsx("img",{src:W,alt:"Fidelitas logo",width:"90",height:"90"})}),e.jsx("h2",{className:"fs-6 fw-normal text-center text-secondary mb-4",children:"Sign in to your account"}),e.jsx("form",{method:"post",className:"needs-validation",onSubmit:o=>c(o),noValidate:!0,children:e.jsxs("div",{className:"row gy-2",children:[e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"form-floating mb-3",children:[e.jsx("input",{type:"email",className:"form-control",id:"email",onChange:o=>s(o.target.value),required:!0}),e.jsx("label",{htmlFor:"email",children:"Email address"}),e.jsx("div",{className:"invalid-feedback",children:"Please enter a valid email address."})]})}),e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"form-floating mb-3",children:[e.jsx("input",{type:"password",className:"form-control",name:"password",id:"password",onChange:o=>n(o.target.value),required:!0}),e.jsx("label",{htmlFor:"password",children:"Password"}),e.jsx("div",{className:"invalid-feedback",children:"Please enter your password."})]})}),e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"d-flex gap-2 justify-content-between",children:[e.jsxs("div",{className:"form-check",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",value:"",name:"rememberMe",id:"rememberMe"}),e.jsx("label",{className:"form-check-label text-secondary",htmlFor:"rememberMe",children:"Keep me logged in"})]}),e.jsx("a",{href:"/forgot-password",className:"link-primary text-decoration-none",children:"Forgot password?"})]})}),e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"d-grid my-3",children:e.jsx("button",{className:"btn btn-primary btn-lg",type:"submit",children:"Log in"})})}),e.jsx("div",{className:"col-12",children:e.jsxs("p",{className:"m-0 text-secondary text-center",children:["Don't have an account?"," ",e.jsx("a",{href:"/signup",className:"link-primary text-decoration-none",children:"Sign up"})]})})]})})]})})})})})]})}export{$ as default};