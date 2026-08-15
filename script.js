
const D={
en:{home:"HOME",solutions:"SOLUTIONS",services:"SERVICES",industries:"INDUSTRIES",about:"ABOUT US",contact:"CONTACT US",quote:"GET A QUOTE",
kicker:"SECURITY • INTELLIGENCE • AUTOMATION",hero:"SIRA ONE",sub:"SECURE INTELLIGENT REMOTE AUTOMATION",
lead:"Integrated security, cybersecurity, automation and smart energy solutions for safer, smarter and more efficient spaces.",
slogan:"Smart Evolution for Every Space.",explore:"EXPLORE OUR SOLUTIONS",contactBtn:"CONTACT US",
values:"OUR CORE VALUES",reliability:"RELIABILITY",innovation:"INNOVATION",simplicity:"SIMPLICITY",responsiveness:"RESPONSIVENESS",
rel:"Trusted Security Everywhere",inv:"Smart Evolutionary Solutions",simp:"Technology Made Easy",resp:"Fast Expert Support",
solutionsTitle:"OUR SOLUTIONS",solutionsSub:"Comprehensive solutions that protect, connect and optimize every space.",
servicesTitle:"OUR SERVICES",servicesSub:"From concept to support, we deliver end-to-end technology solutions.",
industriesTitle:"INDUSTRIES WE SERVE",industriesSub:"Tailored technology solutions designed around the needs of every industry.",
aboutTitle:"SECURITY. INTELLIGENCE. AUTOMATION. EFFICIENCY.",contactTitle:"LET'S BUILD A SMARTER & SAFER SPACE",
name:"Full Name",company:"Company",email:"Email Address",phone:"Phone Number",solution:"Solution / Service Required",message:"Message",select:"Select a solution",send:"SEND REQUEST"},
ar:{home:"الرئيسية",solutions:"الحلول",services:"الخدمات",industries:"القطاعات",about:"من نحن",contact:"تواصل معنا",quote:"اطلب عرض سعر",
kicker:"الأمن • الذكاء • الأتمتة",hero:"سيرا وان",sub:"التحكم الآمن الذكي عن بُعد",
lead:"حلول متكاملة للأمن والأمن السيبراني والأتمتة وإدارة الطاقة الذكية لبيئات أكثر أمانًا وذكاءً وكفاءة.",
slogan:"التطور الذكي لكل مساحة.",explore:"استكشف حلولنا",contactBtn:"تواصل معنا",
values:"قيمنا الأساسية",reliability:"الموثوقية",innovation:"الابتكار",simplicity:"البساطة",responsiveness:"الاستجابة",
rel:"أمن موثوق في كل مكان",inv:"حلول تتطور بذكاء",simp:"تقنية سهلة الاستخدام",resp:"دعم سريع ومتخصص",
solutionsTitle:"حلولنا",solutionsSub:"حلول متكاملة تحمي كل مساحة وتربطها وتحسن كفاءتها.",
servicesTitle:"خدماتنا",servicesSub:"من الاستشارة والتصميم إلى التنفيذ والدعم، نقدم حلولًا تقنية متكاملة.",
industriesTitle:"القطاعات التي نخدمها",industriesSub:"حلول تقنية مصممة وفق احتياجات كل قطاع.",
aboutTitle:"الأمن. الذكاء. الأتمتة. الكفاءة.",contactTitle:"لنبنِ مساحة أكثر أمانًا وذكاءً وكفاءة",
name:"الاسم الكامل",company:"الشركة",email:"البريد الإلكتروني",phone:"رقم الهاتف",solution:"الحل / الخدمة المطلوبة",message:"الرسالة",select:"اختر الحل",send:"إرسال الطلب"}};
const LANG_KEY="siraLang_v3"; let lang=localStorage.getItem(LANG_KEY)||"en";
function t(k){return D[lang][k]||k}
function applyLang(){
document.body.classList.toggle("rtl",lang==="ar");
document.documentElement.lang=lang;
document.documentElement.dir=lang==="ar"?"rtl":"ltr";
document.querySelectorAll("[data-i18n]").forEach(e=>e.textContent=t(e.dataset.i18n));
document.querySelectorAll("[data-lang]").forEach(e=>e.textContent=lang==="en"?"العربية":"English");
document.querySelectorAll("[data-brand-tag]").forEach(e=>e.innerHTML=lang==="ar"?"التحكم الآمن الذكي<br>عن بُعد":"SECURE INTELLIGENT<br>REMOTE AUTOMATION");
}
function toggleLang(){lang=lang==="en"?"ar":"en";localStorage.setItem(LANG_KEY,lang);applyLang()}
document.addEventListener("DOMContentLoaded",applyLang);
