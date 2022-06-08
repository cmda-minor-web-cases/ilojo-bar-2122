if (window.location.href.includes('bar.html')) {
    var scene = document.getElementById("scene");
    var parallaxInstance = new Parallax(scene);
}

if (window.location.href.includes('index.html')) {
    const input = document.querySelector('.switch input');
    const canvas = document.querySelector('.three-module');
    const img = document.querySelector('.ilojobar');
    let checker;

    function toggleThree() {
        if (!checker) {
            console.log('block')
            img.style.setProperty('display', 'none');
            canvas.style.setProperty('display', 'block');
            checker = true
        } else {
            console.log('none')
            canvas.style.setProperty('display', 'none');
            img.style.setProperty('display', 'block');
            checker = false;
        }
    }

    input.addEventListener('change', toggleThree);
}