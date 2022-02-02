window.addEventListener('scroll', () => {
    const offset = 260;
    if (window.scrollY > offset){
        document.getElementById('header').classList.add('scrolled');
    } else{
        document.getElementById('header').classList.remove ('scrolled');
    }
})