const observer = new IntersectionObserver(showText); 
const paragraphs = document.querySelectorAll('main p');

paragraphs.forEach(element => {
  observer.observe(element) 
});

export function showText(entries, observer) { 
  entries.forEach(entry => {
    const targetClass = entry.target.classList;
    if(entry.isIntersecting) {
      targetClass.add('observed')
    } else {
      targetClass.remove('observed')
    }
  });
};

// source: https://codepen.io/joostf/pen/qJmWzb 
