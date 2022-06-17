//Intersection Observer experiment
const observer = new IntersectionObserver(showArticles); // er wordt intersection object aangemaakt
const elements = document.querySelectorAll('main p, main > img');

elements.forEach(element => {
  observer.observe(element) 
});

export function showArticles(entries, observer) { 
  entries.forEach(entry => {
    const targetClass = entry.target.classList;
    if(entry.isIntersecting) {
      targetClass.add('observed')
    } else {
      targetClass.remove('observed')
    }
  });
};

