// const content1 = document.querySelector('.bg_content1');
// const content2 = document.querySelector('.bg_content2');
// const content3 = document.querySelector('.bg_content3');
// const content4 = document.querySelector('.bg_content4');
// const content5 = document.querySelector('.bg_content5');
// const content6 = document.querySelector('.bg_content6');
// const content7 = document.querySelector('.bg_content7');
// const content8 = document.querySelector('.bg_content8');
// const content9 = document.querySelector('.bg_content9');
// const content10 = document.querySelector('.bg_content10');
// const content11 = document.querySelector('.bg_content11');
// const content12 = document.querySelector('.bg_content12');
// const content13 = document.querySelector('.bg_content13');
const bg = document.querySelectorAll('.bg');


window.addEventListener('scroll', function (e) {
    bg.forEach(function (BG) {
        const windowCenter = window.innerHeight / 1.1 + this.window.scrollY;
        const bg_offset = BG.offsetTop + BG.offsetHeight / 2;
        if (windowCenter >= bg_offset) {
            BG.classList.add('scroll');
            const content = BG.querySelector('.bg_white').querySelectorAll('.bg_content');
            content.forEach(function (contentSearch) {
                contentSearch.classList.add('show');
            });
        }
    });



});