import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

const globalStyles = String.raw`@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Manrope:wght@400;500;600;700;800&display=swap');

:root{--ink:#440936;--plum:#71305f;--pink:#c77aa8;--blush:#f1dce9;--paper:#fcf8fb;--white:#fff;--line:#e8dce4}
@layer base{
  *{box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{font-family:'Manrope',sans-serif;background:var(--paper);color:var(--ink);font-size:14px}
  button,input,select{font:inherit}
  button{cursor:pointer}
  h1,h2,h3,p{margin:0}
  h1,h2{font-family:'DM Serif Display',serif;font-weight:400;line-height:.95;letter-spacing:-.02em}
  em{font-weight:400}
}
.app{min-height:100vh;overflow:hidden}.header{height:78px;display:flex;align-items:center;justify-content:space-between;padding:0 max(4vw,28px);background:rgba(252,248,251,.94);backdrop-filter:blur(12px);border-bottom:1px solid rgba(68,9,54,.08);position:relative;z-index:50}.brand{font-size:24px;font-weight:800;letter-spacing:.11em;color:var(--ink);background:none;border:0}.brand span{color:var(--pink)}.nav{display:flex;align-items:center;gap:32px}.nav button,.sign-in{border:0;background:none;color:var(--ink);font-size:13px;font-weight:600;position:relative}.nav button:after{content:"";position:absolute;bottom:-9px;left:0;width:0;height:1.5px;background:var(--pink);transition:.2s}.nav button:hover:after,.nav button.active:after{width:100%}.header-actions{display:flex;align-items:center;gap:20px}.pill{border-radius:100px;padding:13px 21px;border:0;font-weight:700;font-size:13px;display:inline-flex;align-items:center;justify-content:center;gap:9px;transition:.2s}.pill:hover{transform:translateY(-2px)}.pill.primary{background:var(--ink);color:white;box-shadow:0 8px 20px rgba(68,9,54,.16)}.pill.light{background:#fff;color:var(--ink)}.pill.outline{border:1px solid var(--ink);color:var(--ink);background:transparent}.pill.full{width:100%;margin-top:24px}.pill:disabled{opacity:.35;cursor:not-allowed;transform:none}.menu-button,.mobile-sign{display:none}
.hero{min-height:690px;display:grid;grid-template-columns:52% 48%;padding-left:max(6.5vw,40px);background:linear-gradient(120deg,#fcf8fb 55%,#efdde8 55%)}.hero-copy{padding:90px 50px 65px 0;max-width:780px}.eyebrow{text-transform:uppercase;letter-spacing:.16em;font-weight:800;font-size:11px;color:var(--pink)}.hero h1{font-size:clamp(62px,7vw,108px);margin:24px 0;line-height:.86}.hero h1 em,.page-heading h1 em,.consult-card h1 em,.profile-summary h1 em,.booking-form h1 em,.success-page h1 em,.pro-hero h1 em,.pro-cta h2 em{color:var(--pink)}.hero-intro{font-size:16px;line-height:1.7;color:#6f5369;max-width:470px;margin-bottom:32px}.search-box{background:#fff;border-radius:18px;padding:10px 10px 10px 22px;display:grid;grid-template-columns:1.15fr 1px 1fr 50px;align-items:center;gap:16px;box-shadow:0 18px 50px rgba(68,9,54,.13);max-width:690px}.search-box label{display:flex;flex-direction:column;gap:4px}.search-box label>span{font-size:9px;text-transform:uppercase;letter-spacing:.08em;font-weight:800;color:var(--pink)}.search-box select,.search-box input{border:0;outline:0;background:transparent;color:var(--ink);width:100%;font-weight:600;font-size:13px}.search-box select{appearance:none}.input-icon{display:flex;align-items:center;gap:7px}.search-divider{height:34px;background:var(--line)}.search-box>button{height:48px;width:48px;border-radius:50%;border:0;background:var(--ink);color:white;display:grid;place-items:center}.hero-proof{display:flex;align-items:center;gap:12px;margin-top:30px;color:#795d73;font-size:11px}.hero-proof b{color:var(--ink)}.avatar-stack{display:flex}.avatar-stack img{width:30px;height:30px;object-fit:cover;border-radius:50%;border:2px solid white;margin-left:-7px}.avatar-stack img:first-child{margin:0}.hero-visual{position:relative;min-height:690px;overflow:hidden}.hero-photo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transform:scale(1.04);transition:opacity 1s,transform 5s}.hero-photo.active{opacity:1;transform:scale(1)}.hero-visual:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(68,9,54,.08),transparent 40%,rgba(68,9,54,.12))}.view-switch{position:absolute;z-index:2;top:30px;right:30px;color:white;background:rgba(68,9,54,.42);backdrop-filter:blur(8px);border-radius:30px;padding:9px 13px;display:flex;gap:14px;align-items:center;font-size:10px;text-transform:uppercase;letter-spacing:.08em}.view-switch>div{display:flex;gap:5px}.view-switch button{width:6px;height:6px;border-radius:50%;border:0;background:rgba(255,255,255,.4);padding:0}.view-switch button.active{background:white}.floating-note{position:absolute;z-index:2;bottom:36px;left:-44px;background:white;border-radius:15px;padding:14px 18px;display:flex;gap:12px;align-items:center;box-shadow:0 15px 50px rgba(68,9,54,.2)}.floating-note i{font-style:normal;background:var(--blush);color:var(--plum);font-size:9px;text-transform:uppercase;padding:7px;border-radius:50%}.floating-note div{display:flex;flex-direction:column}.floating-note b{font-family:'DM Serif Display';font-size:15px}.floating-note span{font-size:9px;color:#8b7284}.fade-one,.fade-two,.fade-three,.fade-four{opacity:0;animation:rise .75s ease forwards}.fade-two{animation-delay:.12s}.fade-three{animation-delay:.24s}.fade-four{animation-delay:.36s}@keyframes rise{to{opacity:1;transform:translateY(0)}from{opacity:0;transform:translateY(18px)}}
.section{max-width:1240px;margin:0 auto;padding:100px 30px}.section-title{display:grid;grid-template-columns:25% 75%;margin-bottom:50px}.section-title>span{font-size:10px;text-transform:uppercase;letter-spacing:.14em;font-weight:800;color:var(--pink);padding-top:9px}.section-title>div{display:flex;align-items:flex-end;justify-content:space-between;gap:30px}.section-title h2{font-size:clamp(40px,4.5vw,64px)}.section-title p{max-width:360px;color:#795d73;line-height:1.7}.service-grid{display:grid;grid-template-columns:repeat(4,minmax(220px,1fr));gap:18px}.service-card{position:relative;min-height:390px;display:flex;flex-direction:column;justify-content:flex-end;overflow:hidden;padding:0;border:0;border-radius:18px;background:var(--ink);color:#fff;text-align:left;isolation:isolate;transition:transform .25s,box-shadow .25s}.service-card:hover{transform:translateY(-7px);box-shadow:0 18px 34px rgba(68,9,54,.2)}.service-image{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-2;transition:transform .45s}.service-card:hover .service-image{transform:scale(1.06)}.service-card:after{content:"";position:absolute;inset:35% 0 0;background:linear-gradient(transparent,rgba(44,3,34,.95));z-index:-1}.service-content{position:relative;padding:24px 22px 22px}.service-number{display:block;color:#f1dce9;font-size:11px;letter-spacing:.1em;margin-bottom:16px}.service-card h3{font-family:'DM Serif Display';font-size:28px;line-height:1;margin-bottom:10px}.service-card p{color:#f8eaf3;line-height:1.55}.service-card small{display:block;margin-top:12px;color:#f1dce9;font-weight:700}.service-arrow{position:absolute;right:18px;top:18px;width:42px;height:42px;border:1px solid rgba(255,255,255,.55);border-radius:50%;display:grid;place-items:center;transition:background .25s}.service-card:hover .service-arrow{background:rgba(255,255,255,.2)}
.service-section .section-title h2{white-space:nowrap;font-size:clamp(34px,4vw,60px)}.section-title p{max-width:360px;color:#795d73;line-height:1.7}.service-grid{display:grid;grid-template-columns:repeat(4,minmax(220px,1fr));gap:18px}.service-card{position:relative;min-height:390px;display:flex;flex-direction:column;justify-content:flex-end;overflow:hidden;padding:0;border:0;border-radius:18px;background:var(--ink);color:#fff;text-align:left;isolation:isolate;transition:transform .25s,box-shadow .25s}.service-card:hover{transform:translateY(-7px);box-shadow:0 18px 34px rgba(68,9,54,.2)}.service-image{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-2;transition:transform .45s}.service-card:hover .service-image{transform:scale(1.06)}.service-card:after{content:"";position:absolute;inset:35% 0 0;background:linear-gradient(transparent,rgba(44,3,34,.95));z-index:-1}.service-content{position:relative;padding:24px 22px 22px}.service-number{display:block;color:#f1dce9;font-size:11px;letter-spacing:.1em;margin-bottom:16px}.service-card h3{font-family:'DM Serif Display';font-size:28px;line-height:1;margin-bottom:10px}.service-card p{color:#f8eaf3;line-height:1.55}.service-card small{display:block;margin-top:12px;color:#f1dce9;font-weight:700}.service-arrow{position:absolute;right:18px;top:18px;width:42px;height:42px;border:1px solid rgba(255,255,255,.55);border-radius:50%;display:grid;place-items:center;transition:background .25s}.service-card:hover .service-arrow{background:rgba(255,255,255,.2)}
.trend-section{background:#fff;color:var(--ink)}.trend-section .section-title p{color:#795d73}.trend-row{display:flex;gap:18px;overflow-x:auto;padding-bottom:14px;scrollbar-width:none}.trend-card{position:relative;flex:0 0 215px;height:325px;border:0;border-radius:14px;overflow:hidden;padding:0;text-align:left;color:white;background:var(--plum)}.trend-card img{width:100%;height:100%;object-fit:cover;transition:.45s}.trend-card:after{content:"";position:absolute;inset:40% 0 0;background:linear-gradient(transparent,rgba(45,2,34,.9))}.trend-card:hover img{transform:scale(1.06)}.trend-card>span{position:absolute;z-index:2;top:18px;left:50%;transform:translateX(-50%);white-space:nowrap;background:rgba(255,255,255,.9);color:var(--ink);padding:6px 10px;border-radius:20px;text-transform:uppercase;letter-spacing:.08em;font-size:8px;font-weight:800}.trend-card>div{position:absolute;z-index:2;bottom:20px;left:18px}.trend-card h3{font-family:'DM Serif Display';font-size:22px}.trend-card p{font-size:10px;display:flex;align-items:center;gap:5px;margin-top:5px}.trend-2,.trend-4,.trend-3{border-radius:14px}.trend-row .trend-card:first-child{flex-basis:260px}.title-row{display:flex;align-items:flex-end;justify-content:space-between}.title-row .section-title{flex:1}.text-link{border:0;border-bottom:1px solid var(--ink);background:none;color:var(--ink);display:flex;gap:8px;align-items:center;padding:0 0 6px;font-weight:700;margin-bottom:50px}.stylist-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}.stylist-grid.four{grid-template-columns:repeat(4,1fr)}.stylist-card{cursor:pointer}.stylist-image{height:330px;position:relative;overflow:hidden;border-radius:150px 150px 14px 14px;background:var(--blush)}.stylist-image img{width:100%;height:100%;object-fit:cover;transition:.45s}.stylist-card:hover img{transform:scale(1.035)}.stylist-image>button{position:absolute;right:14px;top:14px;width:37px;height:37px;border-radius:50%;border:0;background:rgba(255,255,255,.9);color:var(--ink);display:grid;place-items:center}.stylist-image>span{position:absolute;left:14px;bottom:14px;background:white;padding:7px 10px;border-radius:20px;font-size:9px;font-weight:700}.stylist-info{display:flex;justify-content:space-between;align-items:flex-end;margin-top:16px}.stylist-role{text-transform:uppercase;font-size:9px;letter-spacing:.08em;color:var(--pink);font-weight:800}.stylist-info h3{font-family:'DM Serif Display';font-size:23px;margin-top:3px}.rating{display:flex;align-items:center;gap:4px;font-weight:700;font-size:12px}.rating svg{fill:var(--pink);stroke:var(--pink)}.rating span{color:#9a8394;font-weight:400}.stylist-meta{border-top:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;margin-top:12px;padding-top:11px;font-size:10px;color:#7d6577}.stylist-meta span{display:flex;align-items:center;gap:4px}.stylist-meta strong{color:var(--ink)}
.collab-banner{padding:0;max-width:1180px;margin-bottom:100px;display:grid;grid-template-columns:42% 58%;background:var(--plum);color:#fff;border-radius:24px;overflow:hidden;opacity:0;transform:translateY(40px);transition:.8s}.collab-banner.revealed{opacity:1;transform:translateY(0)}.collab-image{position:relative;min-height:490px}.collab-image img{position:absolute;width:100%;height:100%;object-fit:cover}.collab-image>span{position:absolute;top:22px;left:22px;background:#fff;color:var(--ink);padding:8px 12px;border-radius:20px;font-size:9px;text-transform:uppercase;font-weight:800;letter-spacing:.08em}.collab-copy{padding:70px;display:flex;flex-direction:column;justify-content:center}.collab-copy h2{font-size:58px;margin:18px 0}.collab-copy h2 em{color:#e5aacd}.collab-copy>p:not(.eyebrow){line-height:1.7;color:#e7d3e1;max-width:520px}.collab-copy>div{display:flex;align-items:center;gap:18px;margin-top:30px}.collab-copy small{color:#e8cbdd}
.page-main{max-width:1240px;margin:0 auto;padding:80px 30px 110px}.page-heading{text-align:center;margin-bottom:55px}.page-heading h1{font-size:72px;margin:16px}.page-heading>p:last-child{color:#7b6275}.filter-bar{display:grid;grid-template-columns:1fr 1fr 1.2fr auto;gap:12px;background:white;border:1px solid var(--line);padding:16px;border-radius:18px;box-shadow:0 12px 35px rgba(68,9,54,.07)}.filter-bar label{padding:3px 14px;border-right:1px solid var(--line);display:flex;flex-direction:column;gap:7px;font-size:9px;text-transform:uppercase;letter-spacing:.08em;color:var(--pink);font-weight:800}.filter-bar select,.filter-bar input{border:0;background:transparent;outline:0;color:var(--ink);font-size:12px;text-transform:none;letter-spacing:0;font-weight:600}.filter-bar .budget span{color:var(--ink);font-size:12px;text-transform:none}.budget input{accent-color:var(--pink);width:100%}.results-head{display:flex;justify-content:space-between;margin:44px 0 24px;color:#846c7e}.results-head b{color:var(--ink)}.results-head select{border:0;background:transparent;color:var(--ink);font-weight:700}.empty{text-align:center;padding:80px;background:white;border-radius:20px}.empty h3{font-family:'DM Serif Display';font-size:30px}.empty p{margin:10px 0 25px;color:#846c7e}
.consult-page{min-height:calc(100vh - 78px);background:linear-gradient(110deg,var(--paper) 60%,var(--blush) 60%);padding:20px 6vw 60px}.progress{height:3px;background:var(--line);position:absolute;top:78px;left:0;right:0}.progress span{display:block;height:100%;background:var(--pink);transition:.4s}.back-link{border:0;background:none;color:var(--plum);font-weight:700;padding:24px 0}.consult-card{max-width:650px;margin:30px auto;background:#fff;padding:50px 60px;border-radius:24px;box-shadow:0 25px 80px rgba(68,9,54,.09)}.consult-card h1{font-size:60px;margin:17px 0}.consult-card>p:not(.eyebrow){color:#80677a;margin-bottom:28px}.field-label{font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:var(--pink);font-weight:800}.field-label input{width:100%;border:1px solid var(--line);border-radius:12px;padding:15px;margin:8px 0 18px;outline:none;color:var(--ink)}.choice-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:9px}.choice-grid button{border:1px solid var(--line);background:#fff;color:var(--ink);padding:14px;border-radius:12px;text-align:left;display:flex;justify-content:space-between}.choice-grid button.selected,.time-row button.selected{border-color:var(--pink);background:#fbf0f7}.question-label{display:block;margin:26px 0 10px;font-weight:800;font-size:11px;text-transform:uppercase;letter-spacing:.09em}.match-preview{display:flex;align-items:center;gap:13px;margin-top:25px;padding:16px;background:var(--paper);border-radius:12px}.match-preview>span{width:38px;height:38px;border-radius:50%;background:var(--pink);color:white;display:grid;place-items:center}.match-preview p{font-size:11px;color:#80677a;margin-top:3px}
.profile-hero{display:grid;grid-template-columns:37% 1fr 310px;gap:45px;align-items:center;max-width:1240px;margin:0 auto;padding:55px 30px 80px}.profile-photo{height:570px;position:relative}.profile-photo img{width:100%;height:100%;object-fit:cover;border-radius:220px 220px 20px 20px}.profile-photo>span{position:absolute;top:25px;left:25px;background:#fff;padding:9px 13px;border-radius:20px;text-transform:uppercase;font-size:9px;font-weight:800}.profile-summary h1{font-size:72px;margin:18px 0}.profile-rating{display:flex;align-items:center;gap:7px;font-size:12px;margin-bottom:25px}.profile-rating svg{fill:var(--pink);stroke:var(--pink)}.profile-rating span{color:#8a7083}.profile-summary>p:not(.eyebrow){font-size:15px;line-height:1.8;color:#755c6f}.tag-row{display:flex;gap:7px;flex-wrap:wrap;margin-top:24px}.tag-row span{border:1px solid var(--line);padding:7px 11px;border-radius:20px;font-size:10px}.booking-card{background:#fff;padding:26px;border-radius:18px;box-shadow:0 18px 55px rgba(68,9,54,.1)}.booking-card>p{font-size:10px;color:var(--pink);text-transform:uppercase;font-weight:800}.booking-card h3{font-family:'DM Serif Display';font-size:22px;margin:8px 0 18px}.time-row{display:flex;gap:7px;flex-wrap:wrap}.time-row button{padding:9px 10px;border:1px solid var(--line);border-radius:8px;background:white;color:var(--ink);font-size:11px}.booking-card>small,.booking-summary>small{display:block;text-align:center;margin-top:12px;color:#a28b9c;font-size:9px}.profile-content{background:#fff;padding:90px max(5vw,30px)}.profile-content>div:first-child,.profile-columns{max-width:1180px;margin:auto}.profile-content h2{font-size:55px;margin:12px 0 35px}.portfolio{max-width:1180px;margin:0 auto 100px;display:grid;grid-template-columns:1.4fr .8fr 1fr;grid-template-rows:240px 240px;gap:14px}.portfolio img{width:100%;height:100%;object-fit:cover;border-radius:12px}.portfolio .p-0{grid-row:span 2;border-radius:180px 180px 12px 12px}.portfolio .p-3{grid-column:2/4}.profile-columns{display:grid;grid-template-columns:1fr 1fr;gap:100px}.service-line{display:flex;justify-content:space-between;padding:18px 0;border-bottom:1px solid var(--line)}.service-line span{display:flex;flex-direction:column;gap:4px}.service-line small{color:#91798b}.profile-columns blockquote{margin:0;background:var(--paper);padding:35px;border-radius:16px;font-family:'DM Serif Display';font-size:24px;line-height:1.4}.profile-columns blockquote footer{display:flex;flex-direction:column;font-family:'Manrope';font-size:11px;margin-top:25px}.profile-columns blockquote footer span{color:#8c7385;margin-top:3px}
.booking-page{max-width:1050px;margin:0 auto;padding:55px 30px 90px;display:grid;grid-template-columns:1.4fr .8fr;gap:80px}.booking-form h1{font-size:68px;margin:18px 0 40px}.availability-legend{display:flex;gap:18px;flex-wrap:wrap;margin:0 0 14px;color:#846c7e;font-size:10px}.availability-legend span{display:flex;align-items:center;gap:6px}.legend-dot{width:8px;height:8px;border-radius:50%;display:inline-block}.legend-dot.available{background:#3c9b63}.legend-dot.unavailable{background:#d7656b}.legend-dot.chosen{background:var(--ink)}.calendar{background:white;border:1px solid var(--line);padding:20px;border-radius:16px}.weekdays,.days{display:grid;grid-template-columns:repeat(7,1fr);gap:7px;text-align:center}.weekdays{margin-bottom:10px;color:#ae94a7;font-size:10px}.days button{aspect-ratio:1;border:0;border-radius:50%;background:transparent;color:var(--ink);font-weight:700}.days button.available{color:#287047;background:#e6f4eb}.days button.unavailable{color:#bd4d55;background:#fde8e9;text-decoration:line-through;cursor:not-allowed}.days button:hover.available{background:#c9ead5}.days button.selected{background:var(--ink);color:white}.time-row.large button{padding:12px 20px}.time-row.large button.available{border-color:#9bd3ae;background:#e6f4eb;color:#287047}.time-row.large button.unavailable{border-color:#efb8b8;background:#fde8e9;color:#bd4d55;text-decoration:line-through;cursor:not-allowed}.time-row.large button.selected{border-color:var(--ink);background:var(--ink);color:white}.slot-note{margin-top:12px;color:#846c7e;font-size:10px}.booking-summary{background:white;padding:30px;border-radius:20px;box-shadow:0 20px 60px rgba(68,9,54,.1);height:max-content;position:sticky;top:110px}.summary-person{display:flex;gap:12px;align-items:center;padding:20px 0}.summary-person img{width:55px;height:55px;object-fit:cover;border-radius:50%}.summary-person div{display:flex;flex-direction:column}.summary-person span,.summary-line small{font-size:10px;color:#90798a}.summary-line{display:flex;justify-content:space-between;align-items:center;padding:16px 0;border-top:1px solid var(--line)}.summary-line>span{display:flex;flex-direction:column;gap:4px}.summary-line>span:has(svg){flex-direction:row}.total{display:flex;justify-content:space-between;border-top:1px solid var(--ink);padding-top:20px;font-size:16px}.success-page{min-height:calc(100vh - 78px);display:flex;flex-direction:column;align-items:center;text-align:center;padding:80px 25px;background:radial-gradient(circle at 50% 20%,#f1dce9,transparent 40%)}.success-mark{width:75px;height:75px;border-radius:50%;display:grid;place-items:center;background:var(--ink);color:white;margin-bottom:25px}.success-page h1{font-size:65px;margin:15px}.success-page>p:not(.eyebrow){max-width:500px;color:#7f6679;line-height:1.7}.confirmation{display:flex;text-align:left;gap:14px;align-items:center;background:white;border-radius:15px;padding:13px 28px 13px 13px;margin:30px}.confirmation img{width:60px;height:60px;object-fit:cover;border-radius:50%}.confirmation div{display:flex;flex-direction:column}.confirmation small,.confirmation span{font-size:10px;color:#8c7486}
.page-heading.split{display:grid;grid-template-columns:1.3fr .7fr;text-align:left;align-items:end}.page-heading.split h1{margin-left:0}.page-heading.split>p{line-height:1.7}.call-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.call-card{background:white;border-radius:18px;overflow:hidden}.call-card>div{height:330px;position:relative}.call-card img{width:100%;height:100%;object-fit:cover}.call-card>div span{position:absolute;top:15px;left:15px;background:white;padding:7px 10px;border-radius:20px;font-size:9px;text-transform:uppercase;font-weight:800}.call-card section{padding:22px}.call-card section>small{text-transform:uppercase;letter-spacing:.08em;color:var(--pink);font-weight:800}.call-card h2{font-size:30px;margin:8px 0}.call-card section>p{display:flex;gap:5px;color:#856d7f;font-size:11px}.call-card section>div{display:flex;justify-content:space-between;align-items:center;margin-top:20px}.pill.applied{background:#e9f4eb;color:#31613b}.how-it-works{margin-top:100px;padding:70px;background:var(--ink);color:white;border-radius:22px}.how-it-works>div{display:grid;grid-template-columns:repeat(3,1fr);gap:50px;margin-top:30px}.how-it-works article span{color:var(--pink);font-size:11px}.how-it-works h3{font-family:'DM Serif Display';font-size:25px;margin:10px 0}.how-it-works article p{color:#cdb9c8;line-height:1.6}
.pro-hero{min-height:650px;background:var(--ink);color:white;display:grid;grid-template-columns:55% 45%;padding-left:max(6vw,35px)}.pro-hero>div{padding:110px 55px 80px 0}.pro-hero h1{font-size:clamp(60px,6.5vw,95px);margin:20px 0}.pro-hero>div>p:not(.eyebrow){color:#d6c0d0;max-width:560px;line-height:1.8;font-size:16px}.pro-hero>div>div{display:flex;gap:25px;align-items:center;margin-top:30px}.plain-button{border:0;border-bottom:1px solid white;background:transparent;color:white;padding:8px 0}.pro-hero>img{width:100%;height:100%;object-fit:cover;max-height:650px}.pro-benefits>div:last-child{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}.pro-benefits article{border-top:1px solid var(--pink);padding-top:20px}.pro-benefits article span{color:var(--pink);font-size:11px}.pro-benefits h3{font-family:'DM Serif Display';font-size:25px;margin:25px 0 10px}.pro-benefits article p{line-height:1.7;color:#80687a}.plans{background:#f3e5ee;max-width:none;padding-left:max(calc((100% - 1180px)/2),30px);padding-right:max(calc((100% - 1180px)/2),30px)}.plan-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;align-items:center}.plan-grid article{background:white;border-radius:18px;padding:35px}.plan-grid article.featured{background:var(--plum);color:white;padding:50px 35px}.plan-grid article>small{display:inline-block;background:white;color:var(--ink);border-radius:20px;padding:6px 10px;text-transform:uppercase;font-size:8px;font-weight:800;margin-bottom:20px}.plan-grid article>p{text-transform:uppercase;letter-spacing:.1em;font-size:10px;font-weight:800;color:var(--pink)}.plan-grid h3{font-family:'DM Serif Display';font-size:44px;margin:15px 0}.plan-grid h3 span{font-family:'Manrope';font-size:11px;font-weight:500}.plan-grid ul{list-style:none;padding:0;margin:25px 0}.plan-grid li{display:flex;align-items:center;gap:8px;margin:12px 0;font-size:12px}.plan-grid li svg{color:var(--pink)}.pro-cta{background:var(--plum);color:white;text-align:center;padding:100px 25px}.pro-cta h2{font-size:65px}.pro-cta p{margin:18px 0 25px;color:#e2cddd}
footer{background:#2e0626;color:white;padding:70px max(5vw,30px) 25px;display:grid;grid-template-columns:1fr 2fr;gap:50px}.light-brand{color:white}.light-brand+ p{color:#c9afc2;margin-top:14px}.footer-links{display:grid;grid-template-columns:repeat(3,1fr)}.footer-links section{display:flex;flex-direction:column;align-items:flex-start;gap:11px}.footer-links b{text-transform:uppercase;letter-spacing:.1em;font-size:9px;color:var(--pink);margin-bottom:7px}.footer-links button{border:0;background:none;color:#e6d6e1;padding:0;display:flex;gap:6px}.footer-bottom{grid-column:1/-1;border-top:1px solid rgba(255,255,255,.15);padding-top:20px;margin-top:30px;display:flex;justify-content:space-between;color:#a98b9f;font-size:10px}
@media(max-width:900px){.nav,.sign-in{display:none}.nav.open{display:flex;position:absolute;top:78px;left:0;right:0;background:var(--paper);padding:30px;flex-direction:column;align-items:flex-start;box-shadow:0 20px 30px rgba(68,9,54,.1)}.nav.open button{font-size:18px}.mobile-sign,.menu-button{display:block}.menu-button{border:0;background:none;color:var(--ink)}.header-actions>.primary{display:none}.hero{grid-template-columns:1fr;padding-left:0;background:var(--paper)}.hero-copy{padding:65px 25px 45px}.hero-visual{min-height:580px}.floating-note{left:20px}.section{padding:75px 25px}.section-title{grid-template-columns:1fr;gap:15px}.section-title>div{align-items:flex-start}.section-title p{display:none}.stylist-grid.four{grid-template-columns:repeat(2,1fr)}.collab-banner{margin:0 25px 80px;grid-template-columns:1fr 1fr}.collab-copy{padding:40px}.profile-hero{grid-template-columns:1fr 1fr}.booking-card{grid-column:1/-1}.profile-columns{gap:40px}.call-grid{grid-template-columns:repeat(2,1fr)}.pro-benefits>div:last-child{grid-template-columns:repeat(2,1fr)}}
@media(max-width:640px){.header{height:68px;padding:0 18px}.brand{font-size:20px}.hero-copy{padding-top:55px}.hero h1{font-size:56px}.search-box{grid-template-columns:1fr 46px;padding:12px 10px 12px 18px}.search-box .search-divider,.search-box label:nth-of-type(2){display:none}.hero-visual{min-height:500px}.section{padding:65px 20px}.section-title h2{font-size:42px}.service-grid{grid-template-columns:repeat(4,minmax(240px,1fr));overflow-x:auto;padding:8px 2px 18px;scroll-snap-type:x mandatory}.service-card{min-width:240px;min-height:350px;scroll-snap-align:start}.service-card p{font-size:12px}.service-arrow{width:34px;height:34px}.stylist-grid,.stylist-grid.four{grid-template-columns:1fr}.stylist-image{height:400px}.title-row .text-link{display:none}.collab-banner{margin:0 16px 65px;grid-template-columns:1fr}.collab-image{min-height:350px}.collab-copy{padding:40px 28px}.collab-copy h2{font-size:45px}.collab-copy>div{align-items:flex-start;flex-direction:column}.page-main{padding:55px 18px 80px}.page-heading h1{font-size:53px}.filter-bar{grid-template-columns:1fr}.filter-bar label{border-right:0;border-bottom:1px solid var(--line);padding:10px}.results-head{font-size:11px}.consult-page{padding:20px 15px 50px}.consult-card{padding:35px 22px}.consult-card h1{font-size:48px}.choice-grid{grid-template-columns:1fr}.profile-hero{grid-template-columns:1fr;padding:30px 18px 60px}.profile-photo{height:450px}.profile-summary h1{font-size:58px}.profile-content{padding:65px 18px}.portfolio{grid-template-columns:1fr 1fr;grid-template-rows:280px 180px;margin-bottom:65px}.portfolio .p-0{grid-row:auto;grid-column:span 2}.portfolio .p-3{grid-column:auto}.profile-columns{grid-template-columns:1fr;gap:55px}.booking-page{grid-template-columns:1fr;padding:35px 18px 70px;gap:50px}.booking-form h1{font-size:55px}.booking-summary{position:static}.page-heading.split{grid-template-columns:1fr}.call-grid{grid-template-columns:1fr}.how-it-works{padding:45px 25px}.how-it-works>div{grid-template-columns:1fr}.pro-hero{grid-template-columns:1fr;padding-left:0}.pro-hero>div{padding:75px 22px}.pro-hero h1{font-size:56px}.pro-hero>img{height:500px}.pro-benefits>div:last-child,.plan-grid{grid-template-columns:1fr}.plan-grid article.featured{padding:35px}.pro-cta h2{font-size:50px}footer{grid-template-columns:1fr}.footer-links{grid-template-columns:1fr 1fr;gap:35px}.footer-bottom{flex-direction:column;gap:8px}.success-page h1{font-size:48px}}

/* Layered motion and gradient treatment */
.page-stage {
  transition:
    opacity 0.28s ease,
    transform 0.36s cubic-bezier(0.22, 0.8, 0.25, 1);
  transform-origin: 50% 0;
}

.page-stage.is-entering {
  opacity: 1;
  transform: translateY(0);
}

.page-stage.is-leaving {
  opacity: 0;
  transform: translateY(24px);
  pointer-events: none;
}

.app .pill.primary,
.app .search-box > button {
  background: linear-gradient(120deg, #440936 0%, #71305f 52%, #b76093 100%);
  background-size: 180% 180%;
  box-shadow: 0 10px 28px rgba(113, 48, 95, 0.25);
}

.app .pill.light {
  background: linear-gradient(120deg, #fff, #f8e5f1);
  box-shadow: 0 8px 24px rgba(44, 3, 34, 0.14);
}

.app .pill:hover,
.app .search-box > button:hover {
  background-position: 100% 50%;
  box-shadow: 0 13px 30px rgba(113, 48, 95, 0.32);
}

.app .section-title h2,
.app .page-heading h1,
.app .profile-content h2 {
  color: transparent;
  background: linear-gradient(115deg, #440936 15%, #71305f 55%, #c77aa8 100%);
  background-clip: text;
  -webkit-background-clip: text;
  text-shadow: 0 12px 30px rgba(113, 48, 95, 0.08);
}

.animated-title {
  display: block;
}

.animated-title span {
  display: inline-block;
  margin-right: 0.18em;
  opacity: 0;
  filter: blur(5px);
  transform: translateY(42px) rotate(2deg);
  animation: word-rise 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: var(--word-delay);
}

.app .hero-title span:nth-child(4),
.app .collab-title span:nth-child(5) {
  display: block;
}

.app .gradient-word {
  color: transparent;
  background: linear-gradient(100deg, #8d3f76, #c77aa8 48%, #71305f);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  animation:
    word-rise 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards,
    gradient-flow 4s linear infinite;
  animation-delay: var(--word-delay), calc(var(--word-delay) + 0.8s);
}

.app .gradient-word.light-gradient {
  background-image: linear-gradient(100deg, #f9d6eb, #fff 45%, #dd8fbd);
}

.collab-banner:not(.revealed) .collab-title span {
  animation-play-state: paused;
}

.collab-banner.revealed .collab-title span {
  animation-play-state: running;
}

@keyframes word-rise {
  to {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0) rotate(0);
  }
}

@keyframes gradient-flow {
  to {
    background-position: 200% center;
  }
}

.app .hero {
  background: linear-gradient(125deg, #fcf8fb 0%, #f8eaf3 48%, #e9c7dc 100%);
}

.app .hero-visual {
  padding: 38px;
  background: linear-gradient(145deg, #fff, #c77aa8);
}

.app .hero-visual::after {
  pointer-events: none;
  background: linear-gradient(110deg, rgba(68, 9, 54, 0.18), transparent 35%, rgba(199, 122, 168, 0.12));
}

.model-views {
  display: grid;
  grid-template-columns: 1.15fr 0.82fr 0.82fr;
  gap: 8px;
  height: 100%;
  animation: model-enter 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.hair-view {
  position: relative;
  height: 100%;
  margin: 0;
  overflow: hidden;
  background: #e4c7d9;
}

.hair-view:first-child {
  border-radius: 180px 12px 12px 12px;
}

.hair-view:last-child {
  border-radius: 12px 180px 12px 12px;
}

.hair-view img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 18%;
  filter: saturate(0.88) contrast(1.03);
  transition: transform 5s ease;
}

.hair-view:hover img {
  transform: scale(1.06);
}

.hair-view figcaption {
  position: absolute;
  z-index: 2;
  bottom: 14px;
  left: 50%;
  color: #fff;
  font-size: 8px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-shadow: 0 2px 12px #440936;
  text-transform: uppercase;
  transform: translateX(-50%);
}

.hair-view::after {
  position: absolute;
  inset: 55% 0 0;
  content: "";
  background: linear-gradient(transparent, rgba(44, 3, 34, 0.42));
}

.model-switch {
  position: absolute;
  z-index: 3;
  top: 32px;
  right: 30px;
  display: flex;
  gap: 13px;
  align-items: center;
  padding: 10px 13px;
  color: #fff;
  font-size: 9px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  background: rgba(68, 9, 54, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 30px;
  backdrop-filter: blur(12px);
}

.model-switch > div {
  display: flex;
  gap: 5px;
}

.model-switch button {
  width: 18px;
  height: 3px;
  padding: 0;
  background: rgba(255, 255, 255, 0.35);
  border: 0;
  border-radius: 4px;
  transition: 0.3s;
}

.model-switch button.active {
  width: 30px;
  background: linear-gradient(90deg, #fff, #efabd3);
}

@keyframes model-enter {
  from {
    opacity: 0;
    filter: blur(8px);
    transform: translateX(45px) scale(0.99);
  }
  to {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0) scale(1);
  }
}

.app .floating-note {
  background: linear-gradient(135deg, #fff, #f8e8f2);
  border: 1px solid rgba(255, 255, 255, 0.7);
}

.app .collab-banner {
  background: linear-gradient(135deg, #440936 0%, #71305f 58%, #9e4f82 100%);
}

.app .trend-section,
.app .how-it-works {
  background: linear-gradient(135deg, #2e0626, #440936 55%, #71305f);
}

.app .pro-hero {
  background: linear-gradient(120deg, #2e0626, #440936 60%, #71305f);
}

.app .pro-cta {
  background: linear-gradient(120deg, #440936, #71305f, #9e4f82);
}

.app .plan-grid article.featured {
  background: linear-gradient(145deg, #440936, #71305f);
}

@media (max-width: 900px) {
  .model-views {
    grid-template-columns: 1.2fr 0.9fr 0.9fr;
  }

  .app .hero-visual {
    padding: 14px;
  }

  .model-switch {
    top: 26px;
  }
}

@media (max-width: 640px) {
  .app .hero-title span:nth-child(4) {
    display: inline-block;
  }

  .app .hero-title span:nth-child(3) {
    margin-right: 0;
  }

  .model-views {
    grid-template-columns: 1.1fr 0.82fr 0.82fr;
    gap: 5px;
  }

  .app .hero-visual {
    padding: 10px;
  }

  .hair-view:first-child {
    border-radius: 100px 8px 8px 8px;
  }

  .hair-view:last-child {
    border-radius: 8px 100px 8px 8px;
  }

  .model-switch {
    top: 22px;
    right: 20px;
  }

  .model-switch > span {
    display: none;
  }

  .app .floating-note {
    right: 18px;
    bottom: 22px;
    left: 18px;
  }

  .app .collab-title span:nth-child(5) {
    display: inline-block;
  }
}

@media (prefers-reduced-motion: reduce) {
  .page-stage,
  .animated-title span,
  .model-views {
    opacity: 1 !important;
    filter: none !important;
    transform: none !important;
    transition: none !important;
    animation: none !important;
  }
}

.trend-row{overflow:hidden;mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent);}
.trend-track{display:flex;gap:18px;width:max-content;animation:trend-marquee 28s linear infinite;}
.trend-row:hover .trend-track{animation-play-state:paused;}
@keyframes trend-marquee{from{transform:translateX(0)}to{transform:translateX(calc(-50% - 9px))}}
@media (prefers-reduced-motion: reduce){.trend-track{animation:none}}
.artist-cta{display:flex;align-items:center;gap:28px;max-width:1180px;padding:16px 0;margin-top:0;margin-bottom:32px;background:transparent;border:0;border-radius:0;color:var(--ink)}.artist-cta>div{flex:1}.artist-cta .eyebrow{color:var(--pink)}.artist-cta h2{font-size:clamp(30px,3.5vw,48px);margin-top:8px;color:var(--ink)}.artist-cta>p{color:#795d73;white-space:nowrap}.artist-cta .pill{white-space:nowrap}.artist-cta .pill.primary{background:var(--ink);color:#fff;box-shadow:none}.artist-cta .pill.primary:hover{background:var(--plum)}.login-page{min-height:calc(100vh - 78px);display:grid;place-items:center;padding:70px 25px;background:linear-gradient(135deg,#fcf8fb,#f1dce9)}.login-card{width:min(920px,100%);display:grid;grid-template-columns:1fr .85fr;overflow:hidden;border-radius:24px;background:#fff;box-shadow:0 25px 70px rgba(68,9,54,.14)}.login-intro{padding:65px 55px;background:linear-gradient(145deg,#440936,#71305f);color:#fff}.login-intro h1{font-size:clamp(44px,5vw,68px);margin:20px 0}.login-intro h1 em{color:#f1dce9}.login-intro>p:last-child{color:#ead5e3;line-height:1.7;max-width:340px}.login-form{display:flex;flex-direction:column;gap:18px;padding:55px 45px}.login-modes{display:grid;grid-template-columns:1fr 1fr;padding:4px;border-radius:10px;background:#f8eaf3;gap:4px}.login-modes button{padding:11px 8px;border:0;border-radius:7px;background:transparent;color:var(--plum);font-size:11px;font-weight:700}.login-modes button.selected{background:#fff;color:var(--ink);box-shadow:0 3px 12px rgba(68,9,54,.1)}.login-form label{display:flex;flex-direction:column;gap:7px;color:var(--plum);font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}.login-form input{border:1px solid var(--line);border-radius:8px;padding:13px;color:var(--ink);outline:0}.login-form input:focus{border-color:var(--pink);box-shadow:0 0 0 3px rgba(199,122,168,.14)}.login-submit{width:100%;margin-top:5px}.login-back{border:0;background:none;color:#795d73;font-size:11px;font-weight:700;padding:5px}
@media(max-width:900px){.artist-cta{align-items:flex-start;flex-wrap:wrap;gap:12px 24px}.artist-cta>p{flex-basis:100%}.login-card{grid-template-columns:1fr}.login-intro{padding:45px}.login-form{padding:40px 45px}}
@media(max-width:640px){.artist-cta{padding:22px 20px;margin-top:0;margin-bottom:25px}.artist-cta>p{white-space:normal}.artist-cta .pill{width:100%}.login-page{padding:35px 15px}.login-intro{padding:38px 28px}.login-form{padding:30px 25px}.login-modes button{font-size:10px}}
.profile-button{width:38px;height:38px;display:grid;place-items:center;border:1px solid var(--line);border-radius:50%;background:#fff;color:var(--ink);transition:.2s}.profile-button:hover{background:var(--blush);border-color:var(--pink);transform:translateY(-2px)}.app .collab-banner{position:relative;max-width:none;margin:70px 0 110px;border-radius:0;background:#171117;color:#fff;box-shadow:0 24px 60px rgba(44,3,34,.18)}.app .collab-banner:before{content:"";position:absolute;inset:14px;border:1px solid rgba(255,255,255,.18);pointer-events:none;z-index:2}.app .collab-image{min-height:510px}.app .collab-image:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.05),rgba(23,17,23,.32))}.app .collab-image img{filter:grayscale(1) contrast(1.08);transition:transform .8s,filter .8s}.app .collab-banner:hover .collab-image img{filter:grayscale(.25) contrast(1.05);transform:scale(1.04)}.app .collab-image>span{top:38px;left:38px;border-radius:0;background:#fff;color:#171117}.app .collab-copy{position:relative;padding:78px 8vw;background:linear-gradient(135deg,#171117,#2d202c)}.app .collab-copy:before{content:"02";position:absolute;top:34px;right:8vw;color:rgba(255,255,255,.18);font-size:12px;font-weight:800;letter-spacing:.2em}.app .collab-copy h2{font-size:clamp(48px,5.5vw,82px);line-height:.92;max-width:620px}.app .collab-copy>p:not(.eyebrow){max-width:430px;color:#d4c3d0}.app .collab-copy .eyebrow{color:#e5aacd}.app .collab-copy .pill.light{background:#fff;color:#171117}.app .collab-copy small{color:#caaec1}
@media(max-width:900px){.app .collab-banner{margin-top:55px}.app .collab-copy{padding:55px 40px}}
@media(max-width:640px){.app .collab-banner{margin:40px 0 65px}.app .collab-banner:before{inset:9px}.app .collab-image{min-height:360px}.app .collab-image>span{top:25px;left:25px}.app .collab-copy{padding:52px 28px}.app .collab-copy h2{font-size:50px}}

.login-modes button{display:flex;align-items:center;justify-content:center;gap:6px}.business-page{min-height:calc(100vh - 78px);background:var(--paper)}.business-hero{display:flex;justify-content:space-between;align-items:center;gap:40px;padding:90px max(7vw,30px);background:linear-gradient(120deg,#440936,#71305f);color:#fff}.business-hero h1{font-size:clamp(48px,6vw,82px);margin:18px 0}.business-hero h1 em{color:#efb8d7}.business-hero>div:first-child>p:not(.eyebrow){max-width:430px;color:#ead5e3;line-height:1.7;margin-bottom:28px}.business-profile{width:250px;height:250px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;border:1px solid rgba(255,255,255,.3);border-radius:50%;background:rgba(255,255,255,.08);text-align:center}.business-profile span{font-size:10px;text-transform:uppercase;letter-spacing:.12em;color:#e5aacd}.business-profile strong{font-family:'DM Serif Display';font-size:20px;font-weight:400}.business-tools>div:last-child{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.business-tools article{padding:28px;border:1px solid var(--line);border-radius:16px;background:#fff}.business-tools article svg{color:var(--pink)}.business-tools h3{font-family:'DM Serif Display';font-size:26px;margin:20px 0 8px}.business-tools p{color:#795d73;line-height:1.6}.business-collab-count{display:block;margin-top:18px;color:var(--plum);font-size:11px}.collab-payment,.business-collaboration-payment{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;padding-top:55px;padding-bottom:65px}.payment-section-copy h2,.business-collaboration-payment h2{max-width:560px;margin:10px 0 14px;font-family:'DM Serif Display';font-size:clamp(36px,4vw,58px);font-weight:400;line-height:1}.payment-section-copy>p:not(.eyebrow),.business-collaboration-payment>div>p:not(.eyebrow){max-width:540px;color:#795d73;line-height:1.7}.payment-card,.business-payment-card{display:flex;flex-direction:column;gap:14px;padding:25px;border:1px solid var(--line);border-radius:18px;background:#fff;box-shadow:0 15px 35px rgba(68,9,54,.08)}.payment-card-heading{display:flex;justify-content:space-between;align-items:flex-start;gap:18px}.payment-card-heading h3{margin:10px 0 4px;font-family:'DM Serif Display';font-size:28px}.payment-card-heading>strong{font-family:'DM Serif Display';font-size:32px;color:var(--plum)}.payment-card small,.business-payment-card small{color:#846c7e;font-size:10px}.payment-summary-row{display:flex;justify-content:space-between;padding:14px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);color:#846c7e;font-size:11px}.payment-summary-row b{color:var(--plum)}.payment-card .pill,.business-payment-card .pill{align-self:flex-start}.payment-note{margin:0;color:#846c7e;font-size:10px;line-height:1.5}.completed-history-note{color:#846c7e;font-size:10px}.business-payment-card h3{margin:10px 0 4px;font-family:'DM Serif Display';font-size:28px}.business-success-note{display:grid;grid-template-columns:1fr .8fr;gap:40px;align-items:center;padding-top:20px;padding-bottom:75px}.business-success-note h2{max-width:560px;margin:10px 0 14px;font-family:'DM Serif Display';font-size:clamp(36px,4vw,58px);font-weight:400;line-height:1}.business-success-note p:not(.eyebrow){max-width:560px;color:#795d73;line-height:1.7}.business-success-quote{padding:30px;border-radius:18px;background:linear-gradient(135deg,#440936,#71305f);color:#efb8d7;font-family:'DM Serif Display';font-size:25px;line-height:1.2;box-shadow:0 18px 35px rgba(68,9,54,.15)}
@media(max-width:640px){.business-hero{padding:60px 25px;display:block}.business-profile{width:170px;height:170px;margin:40px auto 0}.business-tools>div:last-child{grid-template-columns:1fr}}
@media(max-width:900px){.business-success-note{grid-template-columns:1fr;gap:25px}}
@media(max-width:900px){.business-collaboration-payment{grid-template-columns:1fr;gap:25px}}
@media(max-width:900px){.collab-payment{grid-template-columns:1fr;gap:25px}}
.business-pricing{padding-top:55px}.pricing-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:30px}.billing-toggle{display:flex;gap:4px;padding:4px;border-radius:100px;background:var(--blush);margin-bottom:50px}.billing-toggle button{border:0;border-radius:100px;padding:10px 18px;background:transparent;color:var(--plum);font-size:11px;font-weight:800}.billing-toggle button.selected{background:var(--ink);color:#fff}.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.pricing-card{position:relative;display:flex;flex-direction:column;padding:32px 28px;border:1px solid var(--line);border-radius:20px;background:#fff;min-height:500px;box-shadow:0 12px 30px rgba(68,9,54,.05)}.pricing-card.popular{border:2px solid var(--pink);transform:translateY(-10px);box-shadow:0 20px 45px rgba(113,48,95,.16)}.pricing-card.premium{background:linear-gradient(145deg,#440936,#71305f);color:#fff;border:0}.popular-label{position:absolute;top:-13px;left:28px;padding:6px 12px;border-radius:20px;background:var(--pink);color:#fff;font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}.pricing-plan-name{color:var(--pink);font-size:11px;font-weight:800;letter-spacing:.15em}.pricing-price{display:flex;align-items:baseline;gap:7px;margin:22px 0 2px}.pricing-price strong{font-family:'DM Serif Display';font-size:42px;font-weight:400}.pricing-price span{font-size:11px;color:#846c7e}.premium .pricing-price span,.premium .pricing-tagline,.premium .pricing-card p{color:#e8cbdd}.annual-saving{height:16px;color:var(--plum);font-size:10px;font-weight:800}.premium .annual-saving{color:#efb8d7}.pricing-tagline{min-height:46px;color:#795d73;line-height:1.55;margin:22px 0}.pricing-card ul{display:flex;flex-direction:column;gap:13px;margin:0 0 28px;padding:0;list-style:none;color:#62495d;font-size:12px}.premium ul{color:#f3e5ee}.pricing-card li{display:flex;align-items:flex-start;gap:8px}.pricing-card li svg{flex:none;color:var(--pink)}.pricing-card .pill{margin-top:auto;align-self:flex-start}.premium .pill.light{color:var(--ink)}.trial-note{margin:22px 0 55px;color:#795d73;font-size:11px}.comparison-wrap{padding:30px;border-radius:18px;background:#fff;border:1px solid var(--line)}.comparison-wrap h3{font-family:'DM Serif Display';font-size:30px;margin-bottom:20px}.comparison-table{width:100%;border-collapse:collapse;font-size:12px}.comparison-table th,.comparison-table td{padding:14px 12px;border-bottom:1px solid var(--line);text-align:left}.comparison-table th{color:var(--plum);font-size:10px;text-transform:uppercase;letter-spacing:.08em}.comparison-table td:not(:first-child),.comparison-table th:not(:first-child){text-align:center}.comparison-table td:not(:first-child){color:var(--pink);font-weight:800}.analytics-preview{background:#f1dce9;max-width:none;padding-left:max(7vw,30px);padding-right:max(7vw,30px)}.analytics-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:30px}.demo-badge{padding:8px 12px;border-radius:20px;background:#fff;color:var(--plum);font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;margin-bottom:50px}.analytics-dashboard{display:grid;grid-template-columns:1.1fr .9fr;gap:18px;padding:26px;border-radius:22px;background:#fff;box-shadow:0 20px 45px rgba(68,9,54,.1)}.analytics-widgets{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}.analytics-widgets article{padding:20px;border-radius:14px;background:#fcf8fb}.analytics-widgets span,.analytics-widgets small{display:block;color:#846c7e;font-size:10px}.analytics-widgets strong{display:block;font-family:'DM Serif Display';font-size:31px;font-weight:400;margin:13px 0 5px;color:var(--ink)}.analytics-widgets small{font-size:8px}.analytics-chart{grid-column:2;grid-row:1 / span 2;padding:24px;border-radius:14px;background:linear-gradient(145deg,#440936,#71305f);color:#fff}.analytics-chart span{display:block;color:#efb8d7;font-size:10px;text-transform:uppercase;letter-spacing:.1em}.analytics-chart strong{display:block;font-family:'DM Serif Display';font-size:24px;font-weight:400;margin-top:8px}.chart-bars{height:180px;display:flex;align-items:flex-end;gap:10px;margin-top:28px;border-bottom:1px solid rgba(255,255,255,.25)}.chart-bars i{display:block;flex:1;border-radius:8px 8px 0 0;background:linear-gradient(#efb8d7,#c77aa8)}.analytics-insights{grid-column:1 / -1;padding:22px;border-top:1px solid var(--line)}.analytics-insights h3{font-family:'DM Serif Display';font-size:28px;margin:10px 0}.analytics-insights>p:last-child{max-width:680px;color:#795d73;line-height:1.6}.business-conversion{max-width:none;text-align:center;background:var(--ink);color:#fff;padding:95px 30px}.business-conversion h2{font-size:clamp(48px,6vw,82px);margin:18px 0}.business-conversion h2 em{color:#efb8d7}.business-conversion>p:not(.eyebrow){max-width:560px;margin:0 auto 28px;color:#e8cbdd;line-height:1.7}.business-conversion .eyebrow{color:#e5aacd}
.business-hero{position:relative;overflow:hidden;padding-top:105px;padding-bottom:105px}.business-hero:after{content:"";position:absolute;inset:auto -10% -55%;height:280px;background:radial-gradient(ellipse,rgba(199,122,168,.24),transparent 65%);pointer-events:none}.business-hero>div:first-child{position:relative;z-index:1}.business-hero>div:first-child>p:not(.eyebrow){font-size:15px}.business-visual{position:relative;width:min(410px,38vw);height:410px;border-radius:210px 24px 24px 210px;overflow:hidden;box-shadow:0 25px 55px rgba(30,0,25,.25);transform:rotate(2deg)}.business-visual:after{content:"";position:absolute;inset:0;background:linear-gradient(145deg,rgba(68,9,54,.08),rgba(68,9,54,.55))}.business-visual>img{width:100%;height:100%;object-fit:cover;filter:saturate(.82)}.business-profile{position:absolute;z-index:1;right:22px;bottom:22px;width:175px;height:175px;border-radius:50%;background:rgba(252,248,251,.92);color:var(--ink);border:0;box-shadow:0 12px 30px rgba(44,3,34,.2);transform:rotate(-2deg)}.business-profile span{color:var(--pink)}.business-profile strong{font-size:17px}.business-tools{padding-top:90px;padding-bottom:75px}.business-tools>div:last-child{gap:20px}.business-tools article{position:relative;min-height:180px;transition:transform .28s,box-shadow .28s;border-radius:18px;overflow:hidden}.business-tools article:after{content:"";position:absolute;right:-25px;bottom:-45px;width:120px;height:120px;border-radius:50%;background:var(--blush);transition:transform .35s}.business-tools article:hover{transform:translateY(-7px);box-shadow:0 18px 35px rgba(68,9,54,.12)}.business-tools article:hover:after{transform:scale(1.35)}.business-tools article svg,.business-tools article h3,.business-tools article p,.business-tool-link{position:relative;z-index:1}.business-tool-number{position:absolute;right:20px;top:20px;color:var(--pink);font-size:10px;font-weight:800;letter-spacing:.1em}.business-tool-link{display:inline-flex;align-items:center;gap:6px;margin-top:16px;padding:0;border:0;border-bottom:1px solid var(--pink);background:none;color:var(--plum);font-size:11px;font-weight:800}.pricing-card{transition:transform .28s,box-shadow .28s}.pricing-card:hover{transform:translateY(-7px);box-shadow:0 22px 45px rgba(68,9,54,.14)}.pricing-card.popular:hover{transform:translateY(-16px)}.pricing-card.premium{background:linear-gradient(145deg,#440936,#71305f 65%,#9e4f82)}.pricing-card.premium:after{content:"";position:absolute;right:-35px;bottom:-45px;width:150px;height:150px;border-radius:50%;background:rgba(255,255,255,.08)}.billing-toggle{box-shadow:0 6px 18px rgba(68,9,54,.08)}.comparison-wrap{box-shadow:0 14px 35px rgba(68,9,54,.05)}.comparison-table tbody tr{transition:background .2s}.comparison-table tbody tr:hover{background:#fcf1f8}.analytics-preview{position:relative;overflow:hidden}.analytics-preview:before{content:"";position:absolute;top:-150px;right:-100px;width:420px;height:420px;border-radius:50%;background:rgba(199,122,168,.2)}.analytics-preview>*{position:relative;z-index:1}.analytics-dashboard{border:1px solid rgba(113,48,95,.12);transition:transform .3s,box-shadow .3s}.analytics-dashboard:hover{transform:translateY(-5px);box-shadow:0 25px 55px rgba(68,9,54,.14)}.analytics-widgets article{transition:transform .25s,background .25s}.analytics-widgets article:hover{transform:translateY(-4px);background:#f8e5f1}.analytics-chart{position:relative;overflow:hidden}.analytics-chart:after{content:"";position:absolute;right:-45px;top:-45px;width:180px;height:180px;border-radius:50%;border:1px solid rgba(255,255,255,.16)}.business-conversion{position:relative;overflow:hidden}.business-conversion:before{content:"T";position:absolute;right:8%;top:-70px;color:rgba(255,255,255,.05);font-family:'DM Serif Display';font-size:330px}.business-conversion>*{position:relative;z-index:1}
@media(max-width:900px){.pricing-heading,.analytics-heading{display:block}.billing-toggle,.demo-badge{display:inline-flex;margin-bottom:30px}.pricing-grid{grid-template-columns:1fr}.pricing-card.popular{transform:none}.analytics-dashboard{grid-template-columns:1fr}.analytics-chart{grid-column:auto;grid-row:auto}}
@media(max-width:900px){.business-hero{padding:75px 25px}.business-visual{width:330px;height:330px}.business-profile{width:145px;height:145px;right:14px;bottom:14px}.business-profile strong{font-size:14px}}
@media(max-width:640px){.business-pricing{padding-top:35px}.business-hero{padding:60px 20px 70px}.business-visual{width:100%;height:350px;margin-top:45px;border-radius:180px 18px 18px 180px}.pricing-card{min-height:0}.comparison-wrap{padding:18px;overflow-x:auto}.comparison-table{min-width:620px}.analytics-preview{padding:55px 20px}.analytics-widgets{grid-template-columns:1fr 1fr}.analytics-dashboard{padding:15px}.analytics-chart{padding:20px}.analytics-insights{padding:18px 5px}.business-conversion{padding:70px 20px}}
.current-plan-label{position:absolute;top:18px;right:20px;padding:6px 10px;border-radius:20px;background:var(--blush);color:var(--plum);font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}.comparison-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;margin-bottom:22px}.comparison-heading h3{margin:8px 0 0}.comparison-heading>span{padding:9px 13px;border-radius:20px;background:var(--blush);color:var(--plum);font-size:10px;font-weight:700}.proplus-walkthrough{background:#fcf1f8;max-width:none;padding-left:max(7vw,30px);padding-right:max(7vw,30px)}.walkthrough-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:30px}.roadmap{position:relative;display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:30px}.roadmap article{position:relative;z-index:1;min-height:225px;padding:25px 20px;border-radius:18px;background:#fff;border:1px solid rgba(113,48,95,.12);box-shadow:0 12px 25px rgba(68,9,54,.06);transition:transform .28s,box-shadow .28s}.roadmap article:hover{transform:translateY(-8px);box-shadow:0 22px 35px rgba(68,9,54,.13)}.roadmap article>span{display:block;color:var(--pink);font-size:10px;font-weight:800;letter-spacing:.12em;margin-bottom:28px}.roadmap article svg{color:var(--plum)}.roadmap h3{font-family:'DM Serif Display';font-size:23px;margin:17px 0 8px}.roadmap p{color:#795d73;line-height:1.55;font-size:12px}.business-tool-link{cursor:pointer}.business-tool-link:hover{color:var(--pink)}
@media(max-width:900px){.roadmap{grid-template-columns:repeat(2,1fr)}.roadmap-arc{display:none}.walkthrough-heading{display:block}}
@media(max-width:640px){.comparison-heading{display:block}.comparison-heading>span{display:inline-block;margin-top:10px}.proplus-walkthrough{padding:55px 20px}.roadmap{grid-template-columns:1fr}.roadmap article{min-height:0}}
.roadmap{grid-template-columns:repeat(2,1fr);align-items:start}.roadmap-stage{min-height:0!important;padding:24px 22px!important}.roadmap-stage-number{display:block;color:var(--pink);font-size:10px;font-weight:800;letter-spacing:.14em;margin-bottom:20px}.roadmap-stage h3{font-size:27px;margin:13px 0 8px}.roadmap-stage h4{font-family:'DM Serif Display';font-size:19px;font-weight:400;line-height:1.1;margin:0 0 12px;color:var(--plum)}.roadmap-stage>p{font-size:11px;line-height:1.5;color:#795d73;margin-bottom:15px}.roadmap-stage strong{display:block;margin:14px 0 7px;color:var(--ink);font-size:9px;text-transform:uppercase;letter-spacing:.08em}.roadmap-stage ul{display:flex;flex-direction:column;gap:5px;margin:0;padding:0;list-style:none;color:#795d73;font-size:10px;line-height:1.35}.roadmap-stage li:before{content:"";display:inline-block;width:5px;height:5px;margin:0 8px 2px 0;border-radius:50%;background:var(--pink)}.roadmap-stage em{display:block;margin-top:17px;padding-top:12px;border-top:1px solid var(--line);font-family:'DM Serif Display';font-size:15px;line-height:1.15;color:var(--plum)}.roadmap-finale{position:relative;margin-top:35px;padding:45px 8%;border-radius:20px;background:linear-gradient(135deg,#440936,#71305f);color:#fff;text-align:center;overflow:hidden}.roadmap-finale:after{content:"";position:absolute;right:-80px;bottom:-130px;width:340px;height:340px;border:1px solid rgba(255,255,255,.16);border-radius:50%}.roadmap-finale>*{position:relative;z-index:1}.roadmap-finale .eyebrow{color:#efb8d7}.roadmap-finale h3{max-width:760px;margin:14px auto;font-family:'DM Serif Display';font-size:clamp(34px,4vw,58px);font-weight:400;line-height:1}.roadmap-finale>p:not(.eyebrow){max-width:620px;margin:0 auto 18px;color:#ead5e3;line-height:1.65}.roadmap-finale>strong{display:block;margin-bottom:25px;color:#fff;font-size:12px}.roadmap-finale>div{display:flex;justify-content:center;gap:12px}.roadmap-finale .pill.outline{border-color:#fff;color:#fff}
@media(max-width:900px){.roadmap{grid-template-columns:1fr}.roadmap-arc{display:none}}
@media(max-width:640px){.roadmap-stage{padding:23px 20px!important}.roadmap-stage h3{font-size:27px}.roadmap-finale{padding:42px 22px}.roadmap-finale>div{flex-direction:column}.roadmap-finale .pill{width:100%}}
.roadmap{display:block;overflow:hidden;padding:18px 0 28px;margin-left:-10px;margin-right:-10px;mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent)}.roadmap-track{display:flex;align-items:stretch;gap:18px;width:max-content;padding:0 10px;animation:roadmap-drift 24s ease-in-out infinite alternate}.roadmap:hover .roadmap-track{animation-play-state:paused}.roadmap-stage{flex:0 0 min(360px,30vw);width:min(360px,30vw);box-sizing:border-box}@keyframes roadmap-drift{from{transform:translateX(0)}to{transform:translateX(calc(-25% - 18px))}}.roadmap-finale .pill:disabled{opacity:.55;cursor:not-allowed;transform:none}
@media(max-width:900px){.roadmap{overflow-x:auto;scrollbar-width:none;mask-image:none}.roadmap::-webkit-scrollbar{display:none}.roadmap-track{animation:roadmap-drift-mobile 22s ease-in-out infinite alternate}.roadmap-stage{flex-basis:320px;width:320px}.roadmap-arc{display:none}@keyframes roadmap-drift-mobile{from{transform:translateX(0)}to{transform:translateX(-180px)}}}
@media(max-width:640px){.roadmap{margin-left:-20px;margin-right:-20px;padding-left:10px;padding-right:10px}.roadmap-stage{flex-basis:290px;width:290px}}


.collab-page{background:var(--paper)}.collab-intro{display:flex;align-items:center;justify-content:space-between;gap:55px;min-height:390px;background:linear-gradient(120deg,#440936,#71305f);color:#fff}.collab-intro>div:first-child{max-width:760px}.collab-intro h1{font-size:clamp(52px,7vw,92px);margin:18px 0;line-height:.92}.collab-intro h1 em{color:#efb8d7}.collab-intro>div>p:last-child{max-width:600px;color:#ead5e3;font-size:16px;line-height:1.7}.collab-hero-model{position:relative;flex:0 0 min(310px,32vw);height:350px;border-radius:170px 22px 22px 22px;overflow:hidden;transform:rotate(3deg);box-shadow:0 25px 55px rgba(30,0,25,.28)}.collab-hero-model:after{content:"";position:absolute;inset:0;background:linear-gradient(145deg,rgba(68,9,54,.05),rgba(68,9,54,.45))}.collab-hero-model img{width:100%;height:100%;object-fit:cover;filter:saturate(.85)}.collab-hero-model span{position:absolute;z-index:1;right:16px;bottom:16px;padding:9px 12px;border-radius:20px;background:rgba(252,248,251,.92);color:var(--plum);font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;transform:rotate(-3deg)}.offer-explainer{padding-top:72px;padding-bottom:72px}.offer-explainer .page-heading{margin-bottom:26px}.offer-explainer h2{margin-top:8px}.offer-explainer-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}.offer-explainer-grid article{padding:26px;border:1px solid var(--line);border-radius:18px;background:#fff}.offer-explainer-label{display:inline-block;padding:7px 10px;border-radius:20px;background:#fcf1f8;color:var(--plum);font-size:9px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}.offer-explainer-grid h3{margin:17px 0 8px;font-family:'DM Serif Display';font-size:30px;color:var(--ink)}.offer-explainer-grid p{max-width:470px;color:#795d73;font-size:13px;line-height:1.65}.offer-explainer-note{margin:22px 0 0;color:#846c7e;font-size:11px}.collab-explore{padding-bottom:75px}.collab-explore .page-heading{margin-bottom:35px}.collab-filters{display:flex;gap:12px;margin-bottom:28px}.collab-filters select{border:1px solid var(--line);border-radius:100px;padding:12px 18px;background:#fff;color:var(--ink);outline:0}.offer-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:22px}.offer-card{overflow:hidden;border:1px solid var(--line);border-radius:20px;background:#fff;box-shadow:0 12px 30px rgba(68,9,54,.05);transition:transform .28s,box-shadow .28s}.offer-card:hover{transform:translateY(-7px);box-shadow:0 22px 40px rgba(68,9,54,.13)}.offer-image{height:245px;position:relative;overflow:hidden}.offer-image img{width:100%;height:100%;object-fit:cover;transition:transform .5s}.offer-card:hover .offer-image img{transform:scale(1.05)}.offer-image span{position:absolute;top:16px;left:16px;padding:7px 10px;border-radius:20px;background:#fff;color:var(--plum);font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}.offer-content{position:relative;padding:22px}.offer-studio{display:flex;align-items:center;gap:8px;color:var(--plum)}.offer-studio img{width:28px;height:28px;border-radius:50%;object-fit:cover}.offer-content h3{font-family:'DM Serif Display';font-size:31px;margin:12px 0 7px}.offer-content>p{display:flex;align-items:center;gap:5px;color:#795d73;font-size:11px}.offer-detail{display:block;color:#846c7e;font-size:10px;margin:18px 0}.offer-meta{display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--line);padding-top:14px}.offer-meta strong{color:var(--plum);font-size:14px}.offer-meta span,.availability{font-size:10px;color:#846c7e}.availability{display:block;margin-top:8px;color:var(--pink);font-weight:800}.offer-actions{display:flex;gap:8px;margin-top:18px}.offer-actions .pill{padding:10px 14px;font-size:11px}.collab-detail{padding-top:30px;background:#fff}.detail-layout{display:grid;grid-template-columns:.85fr 1.15fr;gap:55px;align-items:center;margin-top:25px}.detail-image{width:100%;height:470px;object-fit:cover;border-radius:150px 20px 20px 20px}.detail-copy h2{font-size:clamp(44px,5vw,70px);margin:15px 0}.detail-copy>p{color:#795d73;line-height:1.65}.detail-facts{display:flex;gap:12px;margin:25px 0}.detail-facts span{display:flex;flex-direction:column;gap:5px;padding:12px;border-radius:10px;background:#fcf1f8;color:var(--plum);font-size:11px}.detail-facts b{font-size:9px;text-transform:uppercase;letter-spacing:.08em;color:var(--pink)}.detail-copy h4{margin:18px 0 6px;color:var(--ink);font-size:11px;text-transform:uppercase;letter-spacing:.08em}.application-form{max-width:780px;margin:65px auto 0;padding:32px;border-radius:18px;background:#fcf1f8}.application-form h3{font-family:'DM Serif Display';font-size:34px;margin:10px 0 22px}.application-form input,.application-form textarea{width:100%;border:1px solid var(--line);border-radius:9px;padding:13px;background:#fff;color:var(--ink);outline:0;margin-bottom:12px}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 12px}.consent{display:flex;align-items:flex-start;gap:8px;color:#795d73;font-size:11px;margin:4px 0 18px}.consent input{width:auto;margin:2px 0}.my-collabs{padding-top:24px;padding-bottom:50px}.my-collabs .page-heading{margin-bottom:24px}.collab-status-grid{display:flex;align-items:stretch;justify-content:flex-start;gap:6px;max-width:100%;overflow-x:auto}.collab-status-grid article{flex:0 0 max-content;width:max-content;min-width:0;padding:9px 10px;border-radius:9px;background:#fff;border:1px solid var(--line)}.collab-status-grid strong{display:block;font-family:'DM Serif Display';font-size:22px;line-height:1;color:var(--plum)}.collab-status-grid span{display:block;margin:4px 0 2px;color:var(--ink);font-weight:800;font-size:9px;line-height:1.15;white-space:nowrap}.collab-status-grid small{display:block;color:#846c7e;font-size:8px;line-height:1.2;white-space:nowrap}.collab-fee-note{display:grid;grid-template-columns:.9fr 1.1fr;gap:35px;align-items:center;padding-top:10px;padding-bottom:72px}.collab-fee-note h2{max-width:470px;margin:10px 0;font-family:'DM Serif Display';font-size:clamp(34px,4vw,55px);font-weight:400;line-height:1}.collab-fee-note>div>p:not(.eyebrow){max-width:450px;color:#795d73;line-height:1.65;font-size:13px}.collab-fee-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.collab-fee-quote{grid-column:1/-1;margin:4px 0 0;padding:17px 20px;border-left:3px solid var(--pink);background:#fff;color:var(--plum);font-family:'DM Serif Display';font-size:19px;line-height:1.3}.collab-fee-grid article{padding:22px;border-radius:16px;background:#440936;color:#fff}.collab-fee-grid article+article{background:#fcf1f8;color:var(--ink)}.collab-fee-amount{display:block;color:#efb8d7;font-family:'DM Serif Display';font-size:27px}.collab-fee-grid article+article .collab-fee-amount{color:var(--plum);font-size:22px}.collab-fee-grid strong{display:block;margin:10px 0 7px;font-size:12px}.collab-fee-grid small{display:block;color:#ead5e3;font-size:10px;line-height:1.55}.collab-fee-grid article+article small{color:#795d73}.business-settlement{display:grid;grid-template-columns:1fr 1fr;gap:45px;align-items:center;background:#fcf1f8}.settlement-copy h2{max-width:560px;margin:10px 0 15px;font-family:'DM Serif Display';font-size:clamp(36px,4vw,58px);font-weight:400;line-height:1}.settlement-copy>p:not(.eyebrow){max-width:540px;color:#795d73;line-height:1.7}.settlement-card{padding:27px;border:1px solid rgba(68,9,54,.12);border-radius:18px;background:#fff;box-shadow:0 15px 35px rgba(68,9,54,.08)}.settlement-status{display:inline-block;margin-bottom:16px;padding:7px 10px;border-radius:20px;background:#fcf1f8;color:var(--plum);font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}.settlement-row{display:flex;justify-content:space-between;gap:15px;padding:14px 0;border-top:1px solid var(--line);font-size:11px;color:#795d73}.settlement-row strong{color:var(--plum);text-align:right}.settlement-card>small{display:block;margin-top:12px;color:#846c7e;font-size:10px;line-height:1.5}
@media(max-width:900px){.offer-grid{grid-template-columns:1fr}.detail-layout{grid-template-columns:1fr;gap:30px}.detail-image{height:360px}.collab-status-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:900px){.collab-intro{gap:30px}.collab-hero-model{flex-basis:260px;height:310px}}
@media(max-width:640px){.collab-intro{display:block;min-height:340px;padding-top:55px;padding-bottom:55px}.collab-intro h1{font-size:52px}.collab-hero-model{width:205px;height:245px;margin:38px 12px 0 auto}}.collab-filters{overflow-x:auto;padding-bottom:6px}.collab-filters select{flex:none}.offer-image{height:210px}.offer-content h3{font-size:27px}.offer-actions .pill{flex:1}.detail-facts{flex-wrap:wrap}.detail-image{height:330px}.application-form{padding:22px;margin-top:45px}.form-grid{grid-template-columns:1fr}.collab-status-grid{grid-template-columns:1fr 1fr}}
@media(max-width:900px){.collab-fee-note,.business-settlement{grid-template-columns:1fr;gap:25px}}
@media(max-width:640px){.collab-fee-grid{grid-template-columns:1fr}.settlement-row{display:block}.settlement-row strong{display:block;margin-top:5px;text-align:left}}
@media(max-width:900px){.request-form{grid-template-columns:1fr}.completed-collab{display:block}.completed-fee{margin-top:16px;text-align:left}}
.detail-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:22px}.collab-request{padding-top:35px;padding-bottom:70px;background:#fcf1f8}.request-form{display:grid;grid-template-columns:1fr 1.5fr auto;gap:12px;align-items:start;padding:22px;border:1px solid var(--line);border-radius:16px;background:#fff}.request-form select,.request-form textarea{width:100%;border:1px solid var(--line);border-radius:9px;padding:13px;background:#fff;color:var(--ink);outline:0;font:inherit;font-size:12px}.request-form textarea{resize:vertical;min-height:48px}.completed-collab{display:flex;justify-content:space-between;align-items:center;gap:20px;margin-top:18px;padding:20px 22px;border:1px solid var(--line);border-radius:16px;background:#fff}.completed-collab h3{margin:9px 0 4px;font-family:'DM Serif Display';font-size:27px}.completed-collab p,.completed-fee small{color:#846c7e;font-size:11px}.completed-badge{display:inline-block;padding:6px 9px;border-radius:20px;background:#e6f4eb;color:#287047;font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}.completed-fee{text-align:right}.completed-fee strong{display:block;color:var(--plum);font-size:12px}
@media(max-width:900px){.offer-actions{flex-wrap:wrap}.offer-actions .pill{flex:1;min-width:110px}}
.app .trend-section {
  background: #fcf8fb; !important;
  color: #440936;
}

.app .trend-section .section-title p {
  color: #795D73;
}

.app .trend-section .trend-card {
  background: linear-gradient(145deg, #440936, #71305F);
  color: #FFFFFF;
}

.app .trend-section .trend-card h3,
.app .trend-section .trend-card p {
  color: #FFFFFF;
}

.collab-status-grid {
  justify-content: center;
}

.offer-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.offer-card {
  border-radius: 16px;
}

.offer-image {
  height: 190px;
}

.offer-content {
  padding: 16px;
}

.offer-content h3 {
  font-size: 25px;
}

.offer-actions .pill {
  padding: 8px 10px;
  font-size: 10px;
}

.collab-detail {
  background:
    radial-gradient(circle at 12% 18%, rgba(239, 184, 215, 0.18), transparent 30%),
    linear-gradient(135deg, #440936 0%, #71305f 58%, #8b4776 100%);
  box-shadow: 0 0 0 100vmax #440936;
  clip-path: inset(0 -100vmax);
  color: #fff;
  position: relative;
  overflow: hidden;
}

.collab-detail::after {
  content: "";
  position: absolute;
  width: 280px;
  height: 280px;
  right: -120px;
  top: 80px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 50%;
  box-shadow: 0 0 0 28px rgba(255, 255, 255, 0.04), 0 0 0 56px rgba(255, 255, 255, 0.025);
  pointer-events: none;
}

.collab-detail > * {
  position: relative;
  z-index: 1;
}

.collab-detail .back-link,
.collab-detail .eyebrow,
.collab-detail .detail-copy > p,
.collab-detail .detail-copy h4 {
  color: #f5dfec;
}

.collab-detail .back-link {
  opacity: 0.9;
}

.collab-detail .back-link:hover {
  color: #fff;
}

.collab-detail .detail-copy h2 {
  color: #fff;
}

.collab-detail .detail-copy h2 em {
  color: #efb8d7;
}

.collab-detail .detail-image {
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 24px 55px rgba(20, 0, 15, 0.28);
}

.collab-detail .detail-facts span {
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.collab-detail .detail-facts b {
  color: #f4b9d8;
}

.collab-detail .application-form {
  background: rgba(252, 248, 251, 0.97);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 22px 55px rgba(20, 0, 15, 0.22);
}

.collab-detail .application-form .eyebrow,
.collab-detail .application-form h3 {
  color: #440936;
}

.collab-detail .application-form input,
.collab-detail .application-form textarea {
  color: #440936;
  background: #fff;
  border-color: #dfcbd9;
}

.collab-detail .application-form input::placeholder,
.collab-detail .application-form textarea::placeholder {
  color: #96738b;
  opacity: 1;
}

.collab-detail .application-form .consent {
  color: #6f5267;
}

.collab-detail .application-payment-prompt {
  color: #440936;
  background: #f7eaf2;
  border-left-color: #c77aa8;
}

.application-payment-prompt {
  margin: -8px 0 18px;
  padding: 10px 12px;
  border-left: 2px solid var(--pink);
  background: #fff;
  color: var(--plum);
  font-size: 11px;
  line-height: 1.45;
}

.collab-page {
  background:
    linear-gradient(180deg, #fcf8fb 0%, #f8eef5 48%, #fcf8fb 100%);
}

.collab-page .page-main {
  max-width: 1280px;
}

.collab-intro {
  min-height: 500px;
  padding-top: 92px;
  padding-bottom: 92px;
  background:
    radial-gradient(circle at 78% 20%, rgba(239, 184, 215, 0.18), transparent 28%),
    linear-gradient(120deg, #2d0625 0%, #542044 48%, #71305f 100%);
}

.collab-intro .eyebrow {
  color: #efb8d7;
  letter-spacing: 0.18em;
}

.collab-intro h1 {
  max-width: 760px;
  letter-spacing: -0.045em;
}

.collab-intro > div > p:last-child {
  max-width: 540px;
  color: #f0dce8;
}

.collab-hero-model {
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 30px 70px rgba(20, 0, 15, 0.38);
}

.offer-explainer,
.collab-explore,
.collab-request,
.my-collabs,
.collab-fee-note {
  background: rgba(255, 255, 255, 0.44);
}

.offer-explainer {
  padding-top: 92px;
  padding-bottom: 90px;
}

.offer-explainer .page-heading,
.collab-explore .page-heading,
.collab-request .page-heading,
.my-collabs .page-heading {
  text-align: left;
}

.offer-explainer .page-heading h2,
.collab-explore .page-heading h2,
.collab-request .page-heading h2,
.my-collabs .page-heading h2 {
  letter-spacing: -0.035em;
}

.offer-explainer-grid article {
  padding: 30px;
  border-color: rgba(113, 48, 95, 0.14);
  box-shadow: 0 16px 35px rgba(68, 9, 54, 0.05);
  transition: transform 0.25s, box-shadow 0.25s;
}

.offer-explainer-grid article:hover {
  transform: translateY(-4px);
  box-shadow: 0 22px 42px rgba(68, 9, 54, 0.1);
}

.collab-explore {
  padding-top: 90px;
  padding-bottom: 90px;
}

.collab-explore .page-heading.split,
.collab-request .page-heading.split {
  align-items: end;
}

.collab-explore .page-heading.split > p,
.collab-request .page-heading.split > p {
  max-width: 360px;
  line-height: 1.65;
}

.collab-filters {
  padding: 10px;
  border: 1px solid rgba(113, 48, 95, 0.12);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 12px 28px rgba(68, 9, 54, 0.05);
}

.collab-filters select {
  border-color: transparent;
  box-shadow: inset 0 0 0 1px rgba(232, 220, 228, 0.9);
}

.offer-card {
  box-shadow: 0 14px 32px rgba(68, 9, 54, 0.08);
}

.offer-card:hover {
  box-shadow: 0 24px 44px rgba(68, 9, 54, 0.16);
}

.offer-content h3 {
  letter-spacing: -0.02em;
}

.offer-actions .pill {
  flex: 1;
}

.collab-request {
  padding-top: 82px;
  padding-bottom: 82px;
}

.request-form {
  border-color: rgba(113, 48, 95, 0.14);
  box-shadow: 0 16px 35px rgba(68, 9, 54, 0.06);
}

.my-collabs {
  padding-top: 78px;
  padding-bottom: 78px;
}

.collab-status-grid {
  padding: 7px;
  border: 1px solid rgba(113, 48, 95, 0.12);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.55);
}

.collab-status-grid article {
  box-shadow: 0 8px 18px rgba(68, 9, 54, 0.04);
}

.completed-collab,
.payment-card {
  box-shadow: 0 16px 34px rgba(68, 9, 54, 0.08);
}

.collab-payment {
  background: #f5e5ef;
}

.collab-fee-note {
  padding-top: 82px;
}

.collab-fee-grid article {
  box-shadow: 0 16px 30px rgba(68, 9, 54, 0.1);
}

@media (max-width: 700px) {
  .collab-intro {
    min-height: 0;
    padding-top: 68px;
    padding-bottom: 68px;
  }

  .offer-explainer,
  .collab-explore,
  .collab-request,
  .my-collabs,
  .collab-fee-note {
    padding-top: 62px;
    padding-bottom: 62px;
  }

  .offer-explainer .page-heading,
  .collab-explore .page-heading,
  .collab-request .page-heading,
  .my-collabs .page-heading {
    text-align: left;
  }
}

.collab-page > section + section {
  border-top: 1px solid var(--line);
}

@media (max-width: 1100px) {
  .offer-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .offer-grid {
    grid-template-columns: 1fr;
  }
}



`

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
    <App />
  </React.StrictMode>,
)
