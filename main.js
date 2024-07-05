const lines = document.querySelector(".lines-box");
const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");
const btn = document.querySelector(".header__main-screen__btn");
const inp = document.querySelector(".header__main-screen__inp");
const label = document.querySelector(".header__main-screen__label");
const succes = document.querySelector(".header__main-screen__succes");
const form = document.querySelector(".header__main-screen__form");

function init(){
    if(window.innerWidth > 980){
        line1.style.top = btn.getBoundingClientRect().top + 25 + "px";
        line1.style.transform = "translateY(-100%)";
    
        line2.style.top = btn.getBoundingClientRect().top + 25 - 149 + "px";
        line2.style.transform = "translateY(-100%)";
    }
}
init()
window.addEventListener("resize", init);

btn.addEventListener("click", () => {
    event.preventDefault();
    btn.style.maxWidth="100%";
    inp.style.width = '0';
    inp.style.padding = '0';
    label.style.display = 'none';

    succes.style.display = 'block';
    setTimeout(() => {
        succes.style.opacity = 1;
        btn.style.opacity = 0;
    }, 1)
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(window.innerWidth > 980){
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = 'none';
                
                switch (entry.target.className){
                    case "lines-box":
                        entry.target.style.transform = 'translateX(-100%)';
                        break;
                    case "line-1__t":
                        entry.target.style.transform = 'translateY(-100%)';
                        break;
                    case "line-2__btc":
                        entry.target.style.transform = 'translateY(calc(-100% - 7px))';
                        break;
                    case "header__main-screen__inp":
                        entry.target.style.width = '100%';
                        entry.target.style.padding = '16px 24px';
                        setTimeout(() => {
                            entry.target.style.setProperty("transition-delay", "0s", "important");
                        }, 2000)
                        break;
                    case "header__main-screen__btn":
                        entry.target.style.maxWidth = '135px';
                        setTimeout(() => {
                            entry.target.style.setProperty("transition-delay", "0s", "important");
                        }, 2000)
                        break;
                    case "header__main-screen__label":
                        entry.target.style.width = 'fit-content';
                        setTimeout(() => {
                            entry.target.style.setProperty("transition-delay", "0s", "important");
                        }, 2000)
                        break;
                }
            }
        }
        else{
            if(entry.isIntersecting){
                entry.target.style.opacity = "1";
                entry.target.style.transform = 'none';

                switch(entry.target.className){
                    case "lines-box":
                        entry.target.style.transform = 'rotate(90deg)';
                        break;
                    case "line-1__t":
                        entry.target.style.transform = 'translateY(-100%)';
                        break;
                    case "line-1__ru":
                        break
                    case "line-2__btc":
                        entry.target.style.transform = "translateX(-100%) translateY(-43%) rotate(-90deg)";
                        break
                    case "line-2__en":
                        entry.target.style.transform = "translateY(-50%) rotate(-90deg)";
                        break
                    case "header__main-screen__inp":
                        entry.target.style.width = '100%';
                        entry.target.style.padding = '16px 24px';
                        setTimeout(() => {
                            entry.target.style.setProperty("transition-delay", "0s", "important");
                        }, 2000)
                        break;
                    case "header__main-screen__btn":
                        entry.target.style.maxWidth = '135px';
                        setTimeout(() => {
                            entry.target.style.setProperty("transition-delay", "0s", "important");
                        }, 2000)
                        break;
                    case "header__main-screen__label":
                        entry.target.style.width = 'fit-content';
                        setTimeout(() => {
                            entry.target.style.setProperty("transition-delay", "0s", "important");
                        }, 2000)
                        break;
                    case "footer":
                        console.log('heloo');
                        break
                }
            }
        }
    })
});

observer.observe(document.querySelector(".header__top"));
observer.observe(document.querySelector(".background"));
observer.observe(document.querySelector(".lines-box"));
observer.observe(document.querySelector(".header__main-screen__head"));
observer.observe(document.querySelector(".header__main-screen__subhead"));
observer.observe(document.querySelector(".header__main-screen__text"));
observer.observe(document.querySelector(".header__main-screen__form"));
observer.observe(document.querySelector(".footer"));
observer.observe(document.querySelector(".line-1__t"));
observer.observe(document.querySelector(".line-1__ru"));
observer.observe(document.querySelector(".line-2__en"));
observer.observe(document.querySelector(".line-2__btc"));
observer.observe(document.querySelector(".header__main-screen__inp"));
observer.observe(document.querySelector(".header__main-screen__btn"));
observer.observe(document.querySelector(".header__main-screen__label"));