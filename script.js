
document.querySelectorAll('.nav-links a').forEach(link=> {
    link.addEventListener('click', function (e) {
        e.preventDefault();
const targetId = this.getAttribute('href');
const targetsection = document.queryselection(targetId);
if(targetsection){
    window.scrollTo({
        top: targetsection.offsettop - 70,
        behavior: 'smooth'
    });
}

});
});