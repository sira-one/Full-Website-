
const dict = {
  en: {
    home:"HOME", solutions:"SOLUTIONS", services:"SERVICES", industries:"INDUSTRIES", about:"ABOUT US", contact:"CONTACT US", quote:"GET A QUOTE",
    heroKicker:"SECURITY • INTELLIGENCE • AUTOMATION", heroTitle:"SIRA ONE", heroSub:"SECURE INTELLIGENT REMOTE AUTOMATION",
    heroText:"Integrated security, cybersecurity, automation and smart energy solutions for safer, smarter and more efficient spaces.",
    explore:"EXPLORE OUR SOLUTIONS", contactBtn:"CONTACT US", values:"OUR CORE VALUES", reliability:"RELIABILITY", innovation:"INNOVATION", simplicity:"SIMPLICITY", responsiveness:"RESPONSIVENESS",
    relText:"Trusted Security Everywhere", invText:"Smart Evolutionary Solutions", simpText:"Technology Made Easy", respText:"Fast Expert Support",
    solutionsTitle:"OUR SOLUTIONS", solutionsSub:"Comprehensive security, cybersecurity, automation and energy solutions that protect, connect and optimize every space.",
    servicesTitle:"OUR SERVICES", servicesSub:"From concept to support, we deliver end-to-end solutions with professional engineering and care.",
    industriesTitle:"INDUSTRIES WE SERVE", industriesSub:"Tailored technology solutions designed around the needs of every industry.",
    aboutTitle:"SECURITY. INTELLIGENCE. AUTOMATION. EFFICIENCY.", contactTitle:"LET'S BUILD A SMARTER & SAFER SPACE",
    email:"EMAIL", emailText:"info@sira-one.com", send:"SEND REQUEST", name:"Full Name", company:"Company", phone:"Phone Number", solution:"Solution / Service Required", message:"Message", select:"Select a solution",
    thank:"Thank you. Your request has been received.", required:"Please complete the required fields."
  },
  ar: {
    home:"الرئيسية", solutions:"الحلول", services:"الخدمات", industries:"القطاعات", about:"من نحن", contact:"تواصل معنا", quote:"اطلب عرض سعر",
    heroKicker:"الأمن • الذكاء • الأتمتة", heroTitle:"SIRA ONE", heroSub:"الأمن والذكاء والتحكم والأتمتة عن بُعد",
    heroText:"حلول متكاملة للأمن السيبراني والأمن المادي والأتمتة وإدارة الطاقة الذكية لبيئات أكثر أمانًا وذكاءً وكفاءة.",
    explore:"استكشف حلولنا", contactBtn:"تواصل معنا", values:"قيمنا الأساسية", reliability:"الموثوقية", innovation:"الابتكار", simplicity:"البساطة", responsiveness:"الاستجابة",
    relText:"أمن موثوق في كل مكان", invText:"حلول تتطور بذكاء", simpText:"تقنية سهلة الاستخدام", respText:"دعم سريع ومتخصص",
    solutionsTitle:"حلولنا", solutionsSub:"حلول متكاملة للأمن والأمن السيبراني والأتمتة والطاقة تحمي كل مساحة وتربطها وتحسن كفاءتها.",
    servicesTitle:"خدماتنا", servicesSub:"من الاستشارة والتصميم إلى التنفيذ والدعم، نقدم حلولًا متكاملة بخبرة هندسية متخصصة.",
    industriesTitle:"القطاعات التي نخدمها", industriesSub:"حلول تقنية مصممة وفق احتياجات كل قطاع.",
    aboutTitle:"الأمن. الذكاء. الأتمتة. الكفاءة.", contactTitle:"لنبنِ مساحة أكثر أمانًا وذكاءً وكفاءة",
    email:"البريد الإلكتروني", emailText:"info@sira-one.com", send:"إرسال الطلب", name:"الاسم الكامل", company:"الشركة", phone:"رقم الهاتف", solution:"الحل / الخدمة المطلوبة", message:"الرسالة", select:"اختر الحل",
    thank:"شكرًا لك. تم استلام طلبك بنجاح.", required:"يرجى تعبئة الحقول المطلوبة."
  }
};

const page = document.body.dataset.page || "home";
let lang = localStorage.getItem("siraLang") || "en";

function t(key){ return (dict[lang] && dict[lang][key]) || key; }
function applyLang(){
  document.body.classList.toggle("rtl", lang==="ar");
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==="ar"?"rtl":"ltr";
  document.querySelectorAll("[data-i18n]").forEach(el=>el.textContent=t(el.dataset.i18n));
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>el.placeholder=t(el.dataset.i18nPlaceholder));
  document.querySelectorAll("[data-lang]").forEach(el=>el.textContent=lang==="en"?"العربية":"English");
  document.title = `SIRA ONE | ${pageTitle(page)}`;
}
function pageTitle(p){
  return p==="home"?"Secure Intelligent Remote Automation":
    p==="solutions"?t("solutionsTitle"):
    p==="services"?t("servicesTitle"):
    p==="industries"?t("industriesTitle"):
    p==="about"?t("aboutTitle"):t("contact");
}
function toggleLang(){lang=lang==="en"?"ar":"en";localStorage.setItem("siraLang",lang);applyLang();}
function wireForm(){
  const form=document.querySelector("#contactForm");
  if(!form)return;
  form.addEventListener("submit",e=>{
    const endpoint=form.getAttribute("action")||"";
    if(!endpoint || endpoint.includes("YOUR_FORM_ID")){
      e.preventDefault();
      alert("Form endpoint is not configured yet. Add your Formspree endpoint in contact.html.");
      return;
    }
    const msg=document.querySelector("#formStatus");
    if(msg)msg.textContent=t("thank");
  });
}
document.addEventListener("DOMContentLoaded",()=>{applyLang();wireForm();});
